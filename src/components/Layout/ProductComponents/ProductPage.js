import React, { useState, useContext } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { motion, useTransform, useMotionValue } from 'framer-motion'
import api from '../../../JSON/api.json'
import { Link, useParams } from 'react-router-dom'

import { CartContext } from '../../../context'

const Container = styled(motion.div)`
    max-width: 720px;
    margin: 0 auto;
    padding: 220px 0 150px 0;
    background-color: #FBFEFF;
`

const Header = styled(motion.div)`
    display: grid;
    box-sizing: border-box;
    grid-template-rows:  auto;
    grid-template-columns: 1fr;
    background: #DAE9ED;
    justify-items: center;
    align-self: center;

    ${({mini}) => mini && css`
        padding: 10px;
        margin: 0;
        color: #555;
        font-family: 'Lato', sans-serif;
    `}

    ${({history}) => history && css`
        grid-template-rows: auto;
        grid-template-columns: repeat(auto-fit, minmax(264px, 1fr));
        background: #FBFEFF;
        padding: 30px 0;
        margin: 0;
    `}
`

const Logo = styled(motion.img)`
    height: 80px;

    ${({mini}) => mini && css`
        height: 60px;
    `}
`

const GridContainer = styled(motion.div)`
    display: grid;
    box-sizing: border-box;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(auto-fit, minmax(264px, 1fr));
    grid-auto-rows: min-content;
    grid-row-gap: 50px;
`

const ContainerSlideShow = styled(motion.div)`
    display: grid;
    box-sizing: border-box;
    grid-template-rows: 1fr min-content;
    grid-template-columns: 1fr;
    background-color: #FBFEFF;
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

const ContainerImage = styled(motion.div)`
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 430px;
    box-sizing: border-box;
    padding: 5px 5px 0 5px;

    &:hover{

        .item{
            text-decoration: none;
            opacity: 1;
            transition: all .5s ease-in-out;
            -webkit-transition: all .5s ease-in-out;
            position: relative;
            width: 100%;
            height: 100%;
            color: #333;
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
        .item::before{
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
`

const Image = styled(motion.div)`
    width: 100%;
    height: 100%;
    border-radius: 6px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: background .7s ease;
    -webkit-transition: background .7s ease;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Gallery = styled(motion.div)`
    position: relative;
    box-sizing: border-box;
    padding: 5px 0 5px 0;
    display: flex;
    justify-items: center;
    width: 100%;
`

const ImageGallery = styled(motion.div)`
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    max-height: 17vw;
    min-height: 70px;
    height: 100%;
    margin: 0 5px;
`

const Description = styled(motion.div)`
    display: grid;
    box-sizing: border-box;
    grid-template-rows: 1fr min-content;
    grid-template-columns: 1fr;
    background-color: #FBFEFF;
    z-index: 4;
`

const DescriptionContent = styled.div`
    padding: 0 30px;
    font-size: 75%;
    background-color: #FBFEFF;
`

const AboutMarka = styled(motion.div)`
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 50px 0 100px 0;
    font-size: 62.5%;
`

const SectionPrice = styled(motion.div)`
    padding: 50px 0;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(auto-fit, minmax(264px, 1fr));
    justify-items: center;
    align-items: center;
    grid-auto-rows: min-content;
`

const Button = styled(motion.button)`
    outline: none;
    border: none;
    padding: 10px 55px;
    border-radius: 10px;
    color: snow;
    box-shadow: 0 3px 5px 2px rgba(255, 102, 0, .3);
`

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const imageVariantsInit = {
    enter: { 
        transition: { 
            staggerChildren: 0.1,
        } 
    }
}

const imageVariants = {
    enter: {
        opacity: 1,
        scale: 1,
        transition
    },
    exit: {
        opacity: 0.1,
        scale: 0.5,
        transition
    }
}

const containerVariants = {
    enter:{
        opacity: 1,
        scale: 1,
        transition
    },
    exit: {
        opacity: 0.1,
        scale: 0.75,
        transition
    }
}

const transitionGradient = { duration: 3, ease: [0.43, 0.13, 0.23, 0.96] }

const ProductPage = ({match}) => {
    const { dispatch } = useContext(CartContext)

    const params = useParams()

    const [slide,setSlide] = useState(0)

    const transformBg = useMotionValue(0)

    const bg = useTransform(
        transformBg,
        [-100, 0, 100],
        ["#DEF0E6", "#FBFEFF", "#FFFFFF"] 
    )

    const inputBg = [-100, 0, 100]
    const bgButton = useTransform(
        transformBg,
        inputBg,
        ["#F50057","#F25270","#F25270"]    
    )

    console.log(dispatch)

    return(
        <Container initial="exit" animate="enter" enter="enter" exit="exit" >

            <Header
                variants={containerVariants} initial="exit"
            >
                <Logo src={api.products[params.id].logo} alt={api.products[params.id].model} />
            </Header>

            <GridContainer
                variants={containerVariants} initial="exit"
            >
                
            <ContainerSlideShow
                initial="exit"
                animate="enter"
                exit="exit"
                enter="enter"
                variants={imageVariantsInit}
            >

                    <ContainerImage>
                        <Image 
                            variants={imageVariants} initial="exit"
                            style={{
                                backgroundImage: `url(${api.products[params.id].gallery[slide]})`
                            }}
                        >
                            <Link className="item" to={`/watches/gallery/${api.products[params.id].model}/${api.products[params.id].id}/image/${slide}`}>
                                <i className="material-icons icons">search</i>
                                <span className="two">
                                    Click!
                                </span>
                            </Link>
                        </Image>
                    </ContainerImage>

                    <Gallery>
                        {api.products[params.id].gallery.map((item,index) => (
                            <ImageGallery key={index} style={{
                                    backgroundImage:`url(${item})`
                                }}
                                onClick={() => setSlide(index)} 
                                variants={imageVariants}
                                initial="exit"
                            />
                        ))}
                    </Gallery>
                    
            </ContainerSlideShow>
            
          
            <Description>
                <div>
                    <Header mini>
                        <h3>Description</h3>
                    </Header>
                    <h3>
                        <span>Watch: </span>&nbsp;&nbsp;
                        <span>
                            {api.products[params.id].model}
                        </span>
                    </h3>
                    <DescriptionContent>
                        <p>
                            {api.products[params.id].description}
                        </p>
                    </DescriptionContent>
                </div>
    
                <Header mini>
                        <Logo src={api.products[params.id].logo} alt={api.products[params.id].model} mini/>
                </Header>
            </Description>

            </GridContainer>

            <SectionPrice
                variants={containerVariants} initial="exit" style={{background: bg, transformBg}} whileHover={{ transformBg: -100 }} transition={transitionGradient}
            >
                <h3>
                    <span>Price for:</span>&nbsp;&nbsp;<span style={{color:'#F50057'}}>{api.products[params.id].price},00 Eur</span>
                </h3>
                <div>
                    <Button
                        style={{
                            background: bgButton, transformBg
                        }}
                        onClick={() => dispatch({ type: 'ADD_TO_CART', payload: api.products[params.id] })}
                        whileTap={{ scale: 1, transformBg: -100 }}
                        transition={transitionGradient}
                        whileHover={{ scale: 1.1 }}
                    >
                        Buy!
                    </Button>
                </div>
            </SectionPrice>

            <Header mini
                variants={containerVariants} initial="exit"
            >
                <h2>History mark</h2>
            </Header>

            <Header history
                
            >
                    <h3 style={{color: '#555'}}>About:</h3>
                    <span>
                        <Logo src={api.products[params.id].logo} alt={api.products[params.id].model} mini/>
                    </span>
            </Header>
            <AboutMarka
                variants={containerVariants} initial="exit"
                style={{
                    backgroundImage: `linear-gradient(to right bottom, rgba(0,0,0,.5),rgba(0,0,0,.8)), url(${api.products[params.id].history})`
                }}
            >
                <div style={{padding: '0 20px 0 40%'}}>
                    <p style={{color:'snow'}}>
                        {api.products[params.id].about}
                    </p>
                </div>
            </AboutMarka>
        </Container>
    );
}
export default ProductPage