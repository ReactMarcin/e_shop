import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import api from '../../JSON/api.json'

const FooterContainer = styled.div`
    width: 100%;
    padding: 20px 0 0 0;
    background: #DAE9ED;
`

const FooterContent = styled.div`
    display: grid;
    grid-template-rows: .5fr;
    grid-template-columns: repeat(2, .5fr);
    justify-items: center;
`

const List = styled.ul`
    list-style: none;
    padding: 0;
`

const ListItem = styled(motion.li)`
    line-height: 3;

    ${({logos}) => logos && css`
        line-height: 0;
    `}
`

const Item = styled(Link)`
    color: #0066cc;
    text-decoration: none;
    font-family: 'Lato', sans-serif;
`

const Image = styled(motion.img)`
    height: 50px;
`

const Footer = () => (
    <FooterContainer>
        <FooterContent>
                <List>
                    <ListItem
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                    >
                        <Item to="/">
                            Home
                        </Item>
                    </ListItem>
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
                </List>
                <List>
                    {api.logos.map((item,index) => (
                        <ListItem key={index} logos>
                            <Item to={`/${item.name}`}>
                                <Image src={item.img} 
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.9}}
                                />
                            </Item>
                        </ListItem>
                    ))}
                </List>
        </FooterContent>
        <div className="footer-foot">
            <strong>
                &copy; {new Date().toLocaleString()}
            </strong>
        </div>
    </FooterContainer>
);
export default Footer