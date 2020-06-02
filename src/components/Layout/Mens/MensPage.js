import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import api from '../../../JSON/api.json'
import CardProduct from './CardPage'

const Container = styled.div`
    max-width: 700px;
    margin: 0 auto;
    margin-top: 70px;
    position: relative;
`

const Header = styled(motion.div)`
    display: grid;
    grid-template-rows: minmax(200px 300px);
    grid-template-columns: 1fr;
    background-image: linear-gradient(rgba(255,255,255,.5),rgba(255,255,255,.5)), url('/images/categories/womens_rolex.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 20px;
` 

const ProductsContainer = styled(motion.div)`
    display: grid;
    grid-template-rows: 1fr min-content;
    grid-template-columns: 1fr;
    grid-gap: 100px;
    justify-content: center;
    margin: 50px 0 100px 0;
    position: relative;
    padding: 0 10px;

`

const WomenPage = () => {
    const mens = api.products.filter(i => i.sex === 'mens')
    return(
        <Container>
            <Header>
                <h1 align="center">
                    Mens
                </h1>
            </Header>

            <ProductsContainer>
                
                {mens.map((item,index) => (
                    <CardProduct item={item} key={index} index={index} />
                ))}
                
            </ProductsContainer>
        </Container>
    );
}
export default WomenPage