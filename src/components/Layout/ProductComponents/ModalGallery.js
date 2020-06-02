import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import api from '../../../JSON/api.json'
import { useHistory } from 'react-router-dom'

const ModalContainer = styled(motion.div)`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(119, 119, 119, .9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 6;
`

const ImageModal = styled(motion.img)`
    border-radius: 6px;
    
    height: 35vw;

    @media (max-width: 390px){
        height: 40vh;
    }
   
`

const transition = {
    duration: 0.5,
    ease: [0.43, 0.13, 0.23, 0.96]
}

const imageVariants = {
    exit:{
        scale: 0.5,
        opacity: 0,
        transition: { duration: 1.5, ...transition }
    },
    enter: { scale: 1, opacity: 1, transition },
}

  
const backVariants = {
    exit: { x: -50, opacity: 0, transition },
    enter: { x: 0, opacity: 1, transition: { delay: 0.1, ...transition } }
}
  
const ModalGallery = ({ match }) => {
   
    const history = useHistory()

    const [slide,setSlide] = useState(parseInt(match.params.index))

    const nextSlide = direction => {
        setSlide(slide + direction)
        history.push(`/watches/gallery/${api.products[parseInt(match.params.id)].model}/${api.products[parseInt(match.params.id)].id}/image/${slide + direction >= api.products[parseInt(match.params.id)].gallery.length ? 0 : slide + direction}`)
    }

    const prevSlide = direction => {
        setSlide(slide + direction)
        history.push(`/watches/gallery/${api.products[parseInt(match.params.id)].model}/${api.products[parseInt(match.params.id)].id}/image/${slide + direction <= -1 ? api.products[parseInt(match.params.id)].gallery.length -1 : slide + direction}`)
    }
    
    return(
        <ModalContainer initial="exit" animate="enter" exit="exit">
            
            <ImageModal
                variants={imageVariants}
                src={api.products[parseInt(match.params.id)].gallery[parseInt(match.params.index)]}
            />

            <motion.div className="back" variants={backVariants}>
                <a onClick={() => history.push(`/watches/${api.products[parseInt(match.params.id)].sex}/${api.products[parseInt(match.params.id)].marka}/${api.products[parseInt(match.params.id)].model}/${api.products[parseInt(match.params.id)].id}`)}>&times;</a>
            </motion.div>

            <motion.div className="btn left"
                onClick={() => prevSlide(-1)}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
            >
                &#10094;
            </motion.div>

            <motion.button className="btn right"
                onClick={() => nextSlide(+1)}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
            >
                &#10095;
            </motion.button>

        </ModalContainer>
    );
}
export default ModalGallery