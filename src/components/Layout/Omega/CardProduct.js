import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Card = styled(motion.div)`
/* position: relative; */
    display: grid;
    box-sizing: border-box;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(auto-fit, minmax(264px, 1fr));
    grid-auto-rows: min-content;
    border-radius: 6px;
    cursor: pointer;
    background: #FBFEFF;
    box-shadow: 0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15);
`

const BodyContainer = styled(motion.div)`
    display: grid;
    box-sizing: border-box;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    padding: 25px;
`

const Body = styled(motion.div)`
    box-sizing: border-box;
    padding: 10px 25px;
    font-size: 70%;
`

const CardImage = styled(motion.div)`
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 20px 20px 0 20px;
`

const Image = styled(motion.img)`
    transform: translateY(-40px);
    width: 100%;
    height: 100%;
    border-radius: 6px;
    box-shadow: 0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15);
`

const ButtonContainer = styled(motion.div)`
    position: relative;
    height: 30px;
    box-sizing: border-box;
    padding-top: 20px;
    display: flex;
    
`

const Button = styled(Link)`
    padding: 7px 30px;
    border-radius: 10px;
    text-decoration: none;
    font-family: 'Lato', sans-serif;
    color: #F8F8FF;
    background-image: linear-gradient(45deg, #2196F3 30%, #21CBF3 90%);
    box-shadow: 0 3px 5px 2px rgba(33, 203, 243, .3);
`

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const cardVariants = {
    enter: { 
        opacity: 1,
        scale: 1,
        transition: { 
            staggerChildren: 0.1,
            transition
        }
    },
    exit: {
        opacity: 0,
        scale: 0.75,
        transition
    }
}

const imageVariants = {
    enter: {
        opacity: 1,
        scale: 1,
        transition
    },
    exit: {
        opacity: 0,
        scale: 0.5,
        transition
    }
}

const bodyVariants = {
    enter:{
        opacity: 1,
        scale: 1,
        transition
    },
    exit: {
        opacity: 0.1,
        scale: 0.8,
        transition
    }
}

const CardProduct = ({ item }) => {
    return(
    
    <Card
        initial="exit"
        exit="exit"
        enter="enter"
        animate="enter"
        variants={cardVariants}
    >
        <CardImage className="img-conteiner"
            initial="exit"
            variants={imageVariants}
        >
            <Image src={item.gallery[0]} className="img"/>
        </CardImage>
        <BodyContainer
            initial="exit"
            variants={bodyVariants}
        >
            <h3>
                    {item.marka}
            </h3>
            <Body>
                
                <p>
                    {item.description.substring(0, item.description.length / 2)} ...
                </p>
                <ButtonContainer

                >
                    <motion.div
                        style={{position: 'absolute'}}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                    >
                            <Button
                                to={`/watches/${item.sex}/${item.marka}/${item.model}/${parseInt(item.id)}`}
                            >
                                More ...
                            </Button>
                    </motion.div>
                </ButtonContainer>
            </Body>
        </BodyContainer>
    </Card>

    );
}
export default CardProduct