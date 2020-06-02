import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { motion } from 'framer-motion'

const PaymentSection = styled(motion.div)`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(auto-fit, minmax(132px, 1fr));
    justify-items: center;
    align-content: center;
    grid-gap: 15px;
    background-color: #FBFEFF;
    position: relative;
`

const animationCircle = keyframes`
    0%{
        clip-path: circle(0% at 50% 50%);
        -webkit-clip-path: circle(0% at 50% 50%);
    }
    100%{
        clip-path: circle(100% at 50% 50%);
        -webkit-clip-path: circle(100% at 50% 50%);
    }
`

const PaymentLogo = styled(motion.div)`
    width: 132px;
    height: 132px;
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    object-fit: cover;
    position: relative;
    align-self: center;
    justify-self: center;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{

        .material-icons{
            text-decoration: none;
            opacity: 1;
            position: absolute;
            transition: all .5s ease-in-out;
            -webkit-transition: all .5s ease-in-out;
            width: 100%;
            height: 100%;
            font-size: 40px;
            color: #f50057;
            z-index: 1;
            animation-name: ${animationCircle};
            -webkit-animation: ${animationCircle};
            animation-duration: 1.3s;
            -webkit-animation-duration: 1.3s;
            animation-iteration-count: 1;
            -webkit-animation-iteration-count: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
        .material-icons::before{
            background-color: rgba(218, 233, 237, .5);
            content: "";
            width: 100% !important;
            height: 100%;
            top: 0;
            border-radius: 3px;
            position: absolute;
            z-index: -1;
            
        }
    }

    ${({checkPayingForm}) => checkPayingForm && css`
        .material-icons{
            text-decoration: none;
            opacity: 1;
            position: absolute;
            transition: all .5s ease-in-out;
            -webkit-transition: all .5s ease-in-out;
            width: 100%;
            height: 100%;
            font-size: 40px;
            color: #f50057;
            z-index: 1;
            animation-name: ${animationCircle};
            -webkit-animation: ${animationCircle};
            animation-duration: 1.3s;
            -webkit-animation-duration: 1.3s;
            animation-iteration-count: 1;
            -webkit-animation-iteration-count: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
        .material-icons::before{
            background-color: rgba(218, 233, 237, .5);
            content: "";
            width: 100% !important;
            height: 100%;
            top: 0;
            border-radius: 3px;
            position: absolute;
            z-index: -1; 
        }
    `}
`

const PaymentOfForm = ({ api, payment, handlePayment, variants }) => (
    <PaymentSection variants={variants}>
        {api.paying.map((item,index) => (
            <PaymentLogo 
                title="Check your paying form"
                checkPayingForm={payment && payment.name === item.name}
                key={index}
                style={{
                backgroundImage: `url(${item.img})`
            }}
    >
            <i className="material-icons item"
                onClick={() => handlePayment(item)}
            >check</i>
            </PaymentLogo>
        ))}
    </PaymentSection>
);
export default PaymentOfForm