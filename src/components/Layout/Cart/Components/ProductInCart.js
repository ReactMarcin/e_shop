import React from 'react'
import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

const Section = styled(motion.div)`
    background-color: #FBFEFF;
    position: relative;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(auto-fit, minmax(264px, 1fr));
    grid-row-gap: 20px;

    justify-items: center;
    align-items: center;
`

const ContainerImage = styled(motion.div)`
    min-width: 264px;
    height: 100%;
    box-sizing: border-box;
    padding: 10px;
    position: relative;
`

const Image = styled(motion.img)`
    width: 100%;
    height: 100%;
    border-radius: 6px;
`

const Description = styled(motion.div)`
    padding: 20px 50px;
    font-family: 'Lato', sans-serif;
    font-size: 75%;
`
const Amount = styled(motion.div)`
    
`

const ButtonContainer = styled(motion.div)`

`

const Button = styled(motion.button)`
    padding: 10px 15px;
    background-color: #DEF0E6;
    outline: none; 
    border: none;
    border-radius: 50%;
    color: #333;
    display: inline-block;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15);

    ${({remove}) => remove && css`
        padding: 15px 15px;
        color: orangered;
        border: 3px solid #F25270;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    `}
`

const Qty = styled.div`
    display: inline-block;
    padding: 20px;
    font-family: 'Lato', sans-serif;
`

const Price = styled(motion.div)`
    color: #555;
`

const Remove = styled(motion.div)`
    color: #555;
    position: relative;
    width: 200px;
    height: 150px;
`

const PorductInCart = ({ item, dispatch, variants }) => (
    <Section variants={variants}>
        <ContainerImage>
            <Image src={item.gallery[0]} alt={item.model} />
        </ContainerImage>

        <Description>
            <h3>
                Description
            </h3>
            <p>
                {item.description.substring(0, item.description.length / 3)} ...
            </p>
        </Description>

        <Amount>
            <ButtonContainer>
                <Button
                    onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
                    title="Add one more"
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                >
                                +
                </Button>

                <Qty>
                    {item.qty}
                </Qty>

                <Button
                    onClick={() => dispatch({ type: "REMOVE_ONE_ITEM", payload: item })}
                    title="Remove one more"
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                >
                                -
                </Button>
            </ButtonContainer>

        </Amount>

                <Price>
                    <h3>
                        Price:
                    </h3>
                    <h2>
                        {item.price},00 Euro
                    </h2>
                </Price>

                <Price>
                    <h3>
                        Price to amount:
                    </h3>
                    <h2 align="center">
                        {item.qty} Qty. / {item.price * item.qty} Euro
                    </h2>
                </Price>

                <Remove>
                    <h3>
                        Remove all !
                    </h3>
                    <Button remove title="Remove all products"
                        onClick={() => dispatch({ type: "REMOVE_ALL_ITEMS", payload: item })}
                    >
                        <i className="material-icons">clear</i>
                    </Button>
                </Remove>
    </Section>
);
export default PorductInCart