import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Checkbox } from '@material-ui/core';

const ListGrid = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(auto-fit, minmax(264px, 1fr));
    grid-auto-rows: 1fr;
    /* justify-items: center;
    align-content: center; */
`

const List = styled(motion.ul)`
    padding: 50px 0;
    margin: 0;
    list-style: none;
    width: 100%;
    position: relative;
    
    &:nth-child(1){
        background-color: #EEF6FF;
    }
    &:nth-child(2){
        background-color: #EEFFFA;
    }
    &:nth-child(3){
        background-color: #DEF0E6;
    }
`

const ListItem = styled(motion.li)`
    display: flex;
    justify-content: center;
    
    font-family: 'Lato', sans-serif;
    color: #555;
`

const ListOfShippingForm = ({ handleChecked, api, delivery, variants }) => {

    return(
        <ListGrid>
            {api.shipping.map((item,index) => (        
                <List key={index} variants={variants}>
                    <ListItem>
                        {item.type.toUpperCase()}
                    </ListItem>
                    <ListItem>
                        <Checkbox 
                            name={item.name} 
                            checked={delivery && delivery.type === item.type}  
                            onChange={() => handleChecked(item)}
                        />
                    </ListItem>
                    <ListItem>
                        {item.name === 'For free' ? '' : '+'} {item.price === 0 ? null : item.price} {item.name === 'For free' ? 'For free' : 'Euro'}
                    </ListItem>
                </List>                
            ))}
        </ListGrid>
    );
};
export default ListOfShippingForm