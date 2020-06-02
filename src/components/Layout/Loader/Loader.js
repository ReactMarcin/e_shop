import React from 'react'
import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

const variants = {
    enter: {
        opacity: 1,
        transition:{
            duration: 0.5
        }
    },
    exit: {
        opacity: 0,
        transition:{
            duration: 0.5
        }
    }
}

const LoaderConatiner = styled(motion.div)`
    width: 100%;
    height: 100%; 
    position: fixed;
    background: rgba(119,119,119,0.7);
    top: 0;
    left: 0;
    z-index: 11;
    display: flex;
    justify-content: center;
    align-items: center;    
`

const Loader = styled(motion.img)`
    position: absolute;
    height: 70px;
    width: 70px;
`

const LoadingComponent = () => (
    <LoaderConatiner variants={variants} animate="enter" initial="exit" exit="exit">
        <Loader src="/images/loader.gif" alt="Loader" />
    </LoaderConatiner>
);
export default LoadingComponent