import React, { useEffect, useContext, useState } from 'react'
import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context'

const Navigation = styled(motion.nav)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 9px;
    background: #FBFEFF;
    z-index: 5;
    display: flex;
    align-items: center;
`

const List = styled.ul`
    list-style: none;
    padding: 0;
    padding-left: 15px;
`

const ListItem = styled(motion.li)`
    margin-left: 30px;
    display: inline-block;

    ${({cart}) => cart && css`
        position: absolute;
        right: 50px;
        top: 50%;
        transform: translateY(-50%);
    `}
`

const Logo = styled.img`
    height: 25px;

    ${({scale}) => scale && css`
        transform: scale(1.3);
        -moz-transform: scale(1.3);
        -webkit-transform: scale(1.3);
        transition: all .1s ease-in-out;
        -webkit-transition: all 1s ease-in-out;
    `}

    ${({reverse_scale}) => reverse_scale && css`
        transform: scale(1);
        -moz-transform: scale(1);
        -webkit-transform: scale(1);
        transition: all .8s ease-in-out;
        -webkit-transition: all .8s ease-in-out;
    `}
`

const Item = styled(Link)`
    text-decoration: none;
    color: #333;
    font-family: 'Lato', sans-serif;
`

const Image = styled(motion.img)`
    height: 30px;
`

const Notification = styled(motion.div)`
    background-color: #F50057;
    padding: 3px 7px;
    border-radius: 50%;
    position: absolute;
    color: snow;
    right: -12px;
    top: -12px;
`

const NavBarMenu = () => {
    const { cart } = useContext(CartContext)
    const [logo,setLogo] = useState(false)

    useEffect(() => {
        const nav = document.querySelector('nav')
        window.addEventListener('scroll', () => {
            if(window.scrollY > 0){
                nav.classList.add('header')
                setLogo(true)
            }else{
                nav.classList.remove('header')
                setLogo(false)
            }
        })
    })
    return(
        <Navigation>
            <motion.div
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    style={{
                        position:'relative',height:'25px',left:'30px',paddingRight:'30px'
                    }}
                >
                    <Item to="/">
                        <Logo alt="Logo" src="/images/tempo.png"  scale={logo} reverse_scale={!logo} />
                    </Item>
            </motion.div>
            <List>
                <ListItem
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                >
                    <Item to="/mens">
                        Mens
                    </Item>
                </ListItem>
                <ListItem
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                >
                    <Item to="/women">
                        Women
                    </Item>
                </ListItem>

                <ListItem cart>
                    <Item to="/cart">
                        {
                            cart.length ? (
                                <Notification>
                                    {cart.reduce((accumulator,item) => { return accumulator + item.qty }, 0)}
                                </Notification>
                            ) : null
                        }
                        <Image 
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            src="/images/cart.svg"
                        />
                    </Item>
                </ListItem>
            </List>
        </Navigation>
    );
}
export default NavBarMenu