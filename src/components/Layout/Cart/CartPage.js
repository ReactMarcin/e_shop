import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { motion, useTransform, useMotionValue } from 'framer-motion'
import { CartContext } from '../../../context'
import api from '../../../JSON/api.json'

import ProductInCart from './Components/ProductInCart'
import ListOfShippingForm from './Components/ListOfShippingForm'
import PaymentOfForm from './Components/PaymentOfForm'
import TotalBalance from './Components/TotalBalance'

const Container = styled(motion.div)`
    max-width: 1249px;
    margin: 0 auto;
    margin-top: 72px;
`

const ContainerCart = styled.div`
    max-width: 792px;
    margin: 0 auto;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    grid-row-gap: 100px;
    background-color: #FFF;

    ${({total}) => total && css`
        grid-row-gap: 0;
    `}

    ${({shipping}) => shipping && css`
        grid-row-gap: 0;
    `}

    ${({pay}) => pay && css`
        grid-row-gap: 0;
    `}
`

const Item = styled(Link)`
    color: #3A668C;
    font-size: 30px;
`
const Header = styled(motion.div)`
    padding: 50px;
    background: #DAE9ED;
    font-family: 'Lato', sans-serif;
    text-align: center;

    ${({mini}) => mini && css`
        background-color: #EEF6FF;
        margin-top: 100px;
        padding: 30px;
    `}
`

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    height: 250px;
    padding: 50px 0;
    box-sizing: border-box;
`

const Logo = styled.img`
    height: 150px;
    position: absolute;
`

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

const noProductVariants = {
    enter: {
        scale: 1,
        opacity: 1,
        transition
    },
    exit: {
        scale: 0.65,
        opacity: 0.1,
        transition
    }
}

const variants = {
    enter: {
        transition: { 
            staggerChildren: 0.1,
            transition
        }
    }
}

const childrenVariants = {
    enter: {
        opacity: 1, scale: 1, transition
    },
    exit: {
        opacity: 0.1, scale: 0.5, transition
    }
}

const transitionGradient = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }


const saveDeliveryToLocalStorage = state => {
    try{
        localStorage.setItem('delivery', JSON.stringify(state))
    }catch(err){
        console.log(err)
    }
}

const savePayingToLocalStorage = state => {
    try{
        localStorage.setItem('payment', JSON.stringify(state))
    }catch(err){
        console.log(err)
    }
}

const CartPage = () => {
    const history = useHistory()
    const { dispatch, cart } = useContext(CartContext)

    const paying = localStorage.getItem('payment')
    
    const [payment,setPayment] = useState(paying ? JSON.parse(paying) : null)
    

    const handlePayment = item => {
        setPayment(item)
        savePayingToLocalStorage(item)
    }

    const deliver = localStorage.getItem('delivery')
    const [delivery,setDelivery] = useState(deliver ? JSON.parse(deliver) : null)

    const handleChecked = item => {
        setDelivery(item)
        saveDeliveryToLocalStorage(item)
    }

    const handleCheckOrder = () => {
        if(!delivery){
            alert('Please check your delivery form')
        }
        if(!payment){
            alert('Please ceck your payment form')
        }
        else{
            localStorage.removeItem('payment')
            localStorage.removeItem('delivery')
            setPayment(null)
            setDelivery(null)
            dispatch({ type: "CLEAR_CART" })
            history.push('/checkout')
        }
    }

    const sortItems = items => {
        return items.sort((a,b) => {
            if(a.id < b.id){
                return 1
            }
            else if(a.id > b.id){
                return -1
            }
            else{
                return 0
            }
        })
    }

    const shippingPrice = delivery && delivery.price

    const transformBg = useMotionValue(0)

    const inputBg = [-100, 0, 100]
    const bgButton = useTransform(
        transformBg,
        inputBg,
        ["#F50057","#F25270","#F25270"]
    )

    const bg = useTransform(
        transformBg,
        [-100, 0, 100],
        ["#DEF0E6", "#FBFEFF", "#FFFFFF"]     
    )

    if(!cart.length){
        return(
            <Container>
                <Header animate="enter" initial="exit" exit="exit" variants={noProductVariants}>
                    <h1>
                        No product in cart ...
                    </h1>
                    <Item to="/">
                        Back to shop!
                    </Item>
                </Header>
            </Container>
        );
    }
    return(
        <Container variants={variants} animate="enter" initial="exit" exit="exit">

            <Header variants={childrenVariants} >
                <h2>
                    Your cart
                </h2>
            </Header>

            <ContainerCart>

                <Header mini variants={childrenVariants} >
                    <h3 align="center">
                        Your products:
                    </h3>
                </Header>

                {sortItems(cart).map((item,index) => (
                    <ProductInCart 
                        variants={childrenVariants} 
                        item={item} 
                        key={index} 
                        dispatch={dispatch}    
                    />
                ))}
            </ContainerCart>

            <ContainerCart shipping>

                <Header mini variants={childrenVariants} >
                    <h3>
                        Shipping form:
                    </h3>
                </Header>

            <LogoContainer variants={childrenVariants}>
                <Logo src="/images/global_shipping.png" alt="Delivery" variants={childrenVariants} />
            </LogoContainer>

            <ListOfShippingForm
                api={api}
                variants={childrenVariants}
                handleChecked={handleChecked}
                deliver={delivery}
            />
                
            </ContainerCart>

            <ContainerCart pay>

                <Header mini variants={childrenVariants} >
                    <h3>
                        Payment form:
                    </h3>
                </Header>

                <PaymentOfForm
                    api={api} 
                    payment={payment}
                    handlePayment={handlePayment}
                    variants={childrenVariants}
                />

            </ContainerCart>

            <ContainerCart total>
                <Header mini variants={childrenVariants} >
                    <h3>
                        Total balnce:
                    </h3>
                </Header>
                
                <TotalBalance 
                    delivery={delivery}
                    payment={payment} 
                    cart={cart} 
                    handleCheckOrder={handleCheckOrder} 
                    bg={bg} 
                    transformBg={transformBg}
                    bgButton={bgButton}
                    transitionGradient={transitionGradient}
                    shippingPrice={shippingPrice}
                    variants={childrenVariants} 
                />

            </ContainerCart>
        </Container>
    );
}
export default CartPage