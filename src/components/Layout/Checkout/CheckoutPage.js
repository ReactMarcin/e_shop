import React from 'react'
import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Conatiner = styled(motion.div)`
    max-width: 720px;
    margin: 70px auto;

    ${({maxi}) => maxi && css`
        max-width: 1249px;
    `}
`

const Header = styled(motion.div)`
    padding: 50px;
    background: #DAE9ED;
    font-family: 'Architects Daughter', cursive;
    color: #555;
    text-align: center;
`

const Image = styled(motion.div)`
    height: 446px;
    width: 100%;
    background-image: linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url('/images/checkout.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Item = styled(Link)`
    color: #F50057;
    font-size: 30px;
    font-family: 'Lato', sans-serif;
`
const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

const variants = {
    enter: {
        transition: { 
            staggerChildren: 0.3,
            transition
        }
    },
    exit: {
        transition: { 
            staggerChildren: 0.3,
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

const Checkout = () => (
    <Conatiner maxi variants={variants} animate="enter" exit="exit" initial="exit">
            <Header variants={childrenVariants}>
                <h3>
                Your order is now processed ...
                </h3>
                <h3>
                    Thank you
                </h3>
            </Header>
        <Conatiner>
            
            <Image variants={childrenVariants}>
                <Item to="/">
                    Back to shop ...
                </Item>
            </Image>

        </Conatiner>
    </Conatiner>
);
export default Checkout