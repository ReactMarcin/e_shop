import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import api from '../../../JSON/api.json'
import { Link } from 'react-router-dom'

import SlideShowHero from './SlideShowHero'
import Video from './VideoComponent'

const Container = styled(motion.div)`
    max-width: 1250px;
    margin: 0 auto;
    margin-top: 72px;
`

const LogoContainer = styled(motion.div)`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background: #EEF6FF;
`

const Item = styled(Link)`
    text-decoration: none;
`

const LogoImage = styled(motion.img)`
    height: 10vh;
    display: inline-block;

    @media (max-width: 1149px){
        height: 10vw;
    }
`

const AboutUsContainer = styled(motion.div)`
    margin: 100px 0;
    color: #555;
    font-family: 'Lato', sans-serif;
`

const About = styled(motion.div)`
    display: grid;
    grid-template-rows: repeat(auto-fit, 1fr);
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(1fr 100%);
    grid-row-gap: 75px;
    margin: 75px 0;
`

const Header = styled(motion.div)`
    display: grid;
    grid-template-rows: minmax(150px 1fr);
    grid-template-columns: repeat(auto-fill, minmax(250px 1fr));
    align-items: center;

    ${({logo}) => logo && css`
        justify-items: center;
        grid-template-columns: 1fr !important;
    `}
     
    @media (max-width: 600px){
        grid-template-columns: repeat(auto-fit, minmax(250px 1fr));
    }

    @media (min-width: 601px){
        grid-template-columns: 200px 1fr;
    }
`

const Column = styled(motion.div)`
    padding: 0 50px;
    border-left: 2px solid #333;
    border-bottom: 2px solid #555;

    @media (max-width: 600px){
        border: none;
    }
`

const Section = styled(motion.div)`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(auto-fit, minmax(264px 300px));
    grid-template-columns: repeat(auto-fill, minmax(264px 300px));
    grid-template-columns: repeat(auto-fit, minmax(264px, 1fr));
    grid-auto-rows: 1fr;
    justify-items: center;
    align-items: center;
    padding-bottom: 100px;
`

const Logo = styled(motion.img)`
    height: 100px;
`

const Image = styled(motion.img)`
    border-radius: 6px;
    width: 230px;
    height: 230px;
    object-fit: cover;
`

const Content = styled(motion.div)`
    padding: 0 50px;
`

const variants = {
    enter: {
        opacity: 1,
        transition:{
            duration: 0.9, staggerChildren: 0.2, ease: [0.43, 0.13, 0.23, 0.96]
        }
    },
    exit: {
        opacity: 0,
        transition:{
            duration: 0.9, staggerChildren: 0.2, ease: [0.43, 0.13, 0.23, 0.96]
        }
    }
}

const childrenVariants = {
    enter: {
        opacity: 1
    },
    exit: {
        opacity: 0
    }
}

const LandingPage = () => {
    
    return(
        <Container
        exit="exit"
            animate="enter"
            initial="exit"
            variants={variants}
        >
            <SlideShowHero api={api} variants={childrenVariants} initial="exit" />

            <LogoContainer variants={childrenVariants} initial="exit">
                {api.logos.map((item,index) => (
                    <Item to={`/${item.name}`} key={index}>
                        <LogoImage 
                            src={item.img}
                            alt={item.name}
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                        />
                    </Item>
                ))}
            </LogoContainer>

            <AboutUsContainer variants={childrenVariants} initial="exit">
                <Header>
                    <h1 align="center">
                        About ons
                    </h1>
                    <Column>
                        <p align="justify">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </Column>
                </Header>

                <About>
                    <div>
                        <Header logo>
                            <Logo 
                                src="/images/logos/rolex.svg"
                            />
                        </Header>

                        <Section>
                            <div>
                                <Image 
                                    src="/images/categories/rolex.jpg"
                                />
                            </div>
                            <div>
                                <Content>
                                    <u><h2 align="center">History mark</h2></u>
                                </Content>
                                <Content>
                                    <p align="justify">
                                        I'm baby twee neutra meggings, VHS shabby chic seitan sriracha selvage cold-pressed beard hexagon polaroid biodiesel. Truffaut hot chicken trust fund af salvia fixie. Bespoke ramps cornhole YOLO. Farm-to-table single-origin coffee lumbersexual ramps.
                                    </p>
                                </Content>
                            </div>
                        </Section>
                    </div>

                    <div className="snow">
                        <Header logo>
                            <Logo 
                                src="/images/logos/rado.svg"
                            />
                        </Header>

                        <Section>
                            <div>
                                <Content>
                                    <u><h2 align="center">History mark</h2></u>
                                </Content>
                                <Content>
                                    <p align="justify">
                                        I'm baby twee neutra meggings, VHS shabby chic seitan sriracha selvage cold-pressed beard hexagon polaroid biodiesel. Truffaut hot chicken trust fund af salvia fixie. Bespoke ramps cornhole YOLO. Farm-to-table single-origin coffee lumbersexual ramps.
                                    </p>
                                </Content>
                            </div>
                            <div>
                                <Image 
                                    src="/images/categories/rado.jpeg"
                                />
                            </div>
                        </Section>
                    </div>

                    <div>
                        <Header logo>
                            <Logo 
                                src="/images/logos/omega.svg"
                            />
                        </Header>

                        <Section>
                            <div>
                                <Image 
                                    src="/images/categories/omega.jpg"
                                />
                            </div>
                            <div>
                                <Content>
                                    <u><h2 align="center">History mark</h2></u>
                                </Content>
                                <Content>
                                    <p align="justify">
                                        I'm baby twee neutra meggings, VHS shabby chic seitan sriracha selvage cold-pressed beard hexagon polaroid biodiesel. Truffaut hot chicken trust fund af salvia fixie. Bespoke ramps cornhole YOLO. Farm-to-table single-origin coffee lumbersexual ramps.
                                    </p>
                                </Content>
                            </div>
                        </Section>
                    </div>
                </About>
            </AboutUsContainer>
            <Video variants={childrenVariants} initial="exit" />
        </Container>
    );
}
export default LandingPage