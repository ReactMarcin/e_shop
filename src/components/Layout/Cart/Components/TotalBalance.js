import React from 'react'
import styled from 'styled-components'
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

const Grid = styled.div`
    display: grid;
    justify-items: center;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr;
`

const ButtonConfirm = styled(motion.div)`
    padding: 15px 50px;
    border-radius: 10px;
    cursor: pointer;
    font-family: 'Architects Daughter', cursive;
    color: #fff;
    box-shadow: 0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15);
`

const Total = styled(motion.div)`
    max-width: 264px;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TotalBalance = ({ variants, shippingPrice, transitionGradient, delivery, payment, cart, handleCheckOrder, bg, transformBg, bgButton }) => (
    <Section variants={variants}>
        <div></div>

        <Grid>
            <h3>
                Delivery form:
            </h3>
            <h2>
                {delivery && delivery.type.toUpperCase()}
            </h2>
            <u><h3>
                {delivery && delivery.name.toUpperCase()}
            </h3></u>
        </Grid>

        <Grid>
            <h3>
                Payment form:
            </h3>

            <img src={payment && payment.img} alt={payment && payment.name.toUpperCase()} height="70" />

            <h2>
                {payment && payment.name.toUpperCase()}
            </h2>
        </Grid>

        <div>
            <h3>
                Total items:
            </h3>
            <h2>
                Items : {cart.reduce((accumulator,items) => { return accumulator + items.qty }, 0)} /Qty.
            </h2>
        </div>

        <div>
            <h3>
                Total price:
            </h3>
            <h2>
                {cart.reduce((accumulator,items) => { return accumulator + (items.price * items.qty) }, 0) + shippingPrice},00 Euro
            </h2>
        </div>

        <Total
            style={{background: bg, transformBg}} whileHover={{ transformBg: -100 }} transition={transitionGradient}
        >
            <ButtonConfirm
                style={{ background: bgButton, transformBg }}
                whileTap={{ scale: 1, transformBg: -100 }}
                transition={transitionGradient}
                whileHover={{ scale: 1.1 }}
                onClick={handleCheckOrder}
            >
                Check order
            </ButtonConfirm>
        </Total>

    </Section>
);
export default TotalBalance