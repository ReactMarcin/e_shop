import React, { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import './styles/styles.css'
import styled from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import ContextCart from './context'

import Loader from './components/Layout/Landing/LandingPage'

import NavBarMenu from './components/Layout/NavBar/NavBarMenu'
import LandingPage from './components/Layout/Landing/LandingPage'
import Footer from './components/Layout/Footer'
import WomenPage from './components/Layout/Women/WomenPage'
import MensPage from './components/Layout/Mens/MensPage'
import RadoPage from './components/Layout/Rado/RadoPage'
import OmegaPage from './components/Layout/Omega/OmegaPage'
import RolexPage from './components/Layout/Rolex/RolexPage'
import ProductPage from './components/Layout/ProductComponents/ProductPage'
import Modal from './components/Layout/ProductComponents/ModalGallery'
import Cart from './components/Layout/Cart/CartPage'
import Checkout from './components/Layout/Checkout/CheckoutPage'
import NotMatch from './components/Layout/NotFound'

const Container = styled.div`
    max-width: 1250px;
    margin: 0 auto;
    margin-top: 20px;
`

const App = () => {
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        window.addEventListener('load', () => {
            setLoading(false)
        })
    },[loading])

    return(
        <React.Fragment>

        <ContextCart>

        <BrowserRouter>

            <NavBarMenu />

                <Route render={({ location }) => (
                    <AnimatePresence exitBeforeEnter initial={false}>
                        <Switch location={location} key={location.pathname}>
                            <Route exact path="/">
                                <LandingPage />
                            </Route>
                            
                            <Route exact path="/women"> 
                                <WomenPage />
                            </Route>
                            <Route exact path="/mens">
                                <MensPage />
                            </Route>
                            <Route exact path="/rado">
                                <RadoPage />
                            </Route>
                            <Route exact path="/omega">
                                <OmegaPage />
                            </Route>
                            <Route exact path="/rolex">
                                <RolexPage />
                            </Route>
                            <Route exact path="/watches/:sex/:marka/:model/:id">
                                <ProductPage />
                            </Route>
                            <Route exact path="/watches/gallery/:model/:id/image/:index" component={Modal} />
                            <Route exact path="/cart">
                                <Cart />
                            </Route>
                            <Route exact path="/checkout">
                                <Checkout />
                            </Route>

                            <Route>
                                <NotMatch />
                            </Route>
                        </Switch>
                    </AnimatePresence>
                )} />

            <Container>
                <Footer />
            </Container>

        </BrowserRouter>
        </ContextCart>
    </React.Fragment>
    );
}
export default App