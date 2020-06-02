import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import { wrap } from '@popmotion/popcorn'

import Parallax from './Parallax'

const Image = styled(motion.img)`
    width: 100%;
    height: 100%;
`

const variants = {
    enter: (direction) => {
        return{
            x: direction > 0 ? 1000 : -1000,
            opacity: 0.2
        }
    },
    center:{
        zIndex: 1, x: 0, opacity: 1
    },
    exit: (direction) => {
        return{
            x: direction < 0 ? 1000 : -1000,
            opacity: 0.2
        }
    }
}

const SlideShowHero = ({ api }) => {
    const [slide, setSlide] = useState(0)

    const imageIndex = wrap(0, api.slider.length, slide)

    const paginate = newDirection => {
        setSlide(slide + newDirection)
    }

    useEffect(() => {
        if(!slide){
            setTimeout(() => {
                paginate(+1)
            }, 5000)
        }
    },[slide])

    return(
            <AnimatePresence initial={false} custom={0}>
                <Parallax>
                    <Image 
                        key={slide}
                        src={api.slider[imageIndex].img}
                        custom={0}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 200 },
                            opacity: 0.2
                        }}
                    />
                    <motion.div
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.8}}
                        className="btn left"
                        onClick={() => paginate(- 1)}
                    >
                        &#10094;
                    </motion.div>

                    <motion.div
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.8}}
                        className="btn right"
                        onClick={() => paginate(+ 1)}
                    >
                        &#10095;
                    </motion.div>
                </Parallax>
            </AnimatePresence>
    );
}
export default SlideShowHero