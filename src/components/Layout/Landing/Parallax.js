import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Parallax = styled(motion.div)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    z-index: 1;
    height: 400px;

    @media (max-width: 1149px){
        height: 32vw;
    }

    &::before{
      position: absolute;
      width: 100%;
      height: 100%;
      display: block;
      left: 0;
      top: 0;
      content: '';
      background: rgba(0, 0, 0, 0.3);
      z-index: 2;
    }
`

const ParallaxComponent = (props) => {
    let windowScrollTop;
    if (window.innerWidth >= 768) {
      windowScrollTop = window.pageYOffset / 3;
    } else {
      windowScrollTop = 0;
    }
    const [transform, setTransform] = React.useState(
      "translate3d(0," + windowScrollTop + "px,0)"
    );
    useEffect(() => {
      if (window.innerWidth >= 768) {
        window.addEventListener("scroll", resetTransform)
      }
      return function cleanup() {
        if (window.innerWidth >= 768) {
          window.removeEventListener("scroll", resetTransform)
        }
      };
    });
    const resetTransform = () => {
      var windowScrollTop = window.pageYOffset / 3;
      setTransform("translate3d(0," + windowScrollTop + "px,0)");
    };    
    
    return(
        <Parallax className="parallax" style={{ transform: transform }}>
            {props.children}
        </Parallax>
    );
}
export default ParallaxComponent