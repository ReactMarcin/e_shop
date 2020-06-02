import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import vid from '../../../video/rado_vid.mp4'

const VideoGrid = styled.div`
    background: #fff;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(auto-fit, minmax(264px,1fr));
    grid-auto-columns: max-content;
    grid-auto-rows: 1fr;
`

const VideoContainer = styled.div`
    width: 100%;
    min-width: 264px;
    max-width: minmax(625px, 100%);
    position: relative;
    height: 40vh;
`

const LogoContainer = styled.div`
    position: relative;
    width: 100%;
    height: 40vh;
    background-color: #EEF6FF;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Image = styled.img`
    height: 50px;
    position: absolute;

    ${({scale}) => scale && css`
        transform: scale(1.3);
        -moz-transform: scale(1.3);
        -webkit-transform: scale(1.3);
        transition: all .1s ease-in-out;
        -webkit-transition: all 1s ease-in-out;
    `}
`

const VideoComponent = () => {
    const [scrollHeight,setScrollHeight] = useState(false)

    useEffect(() => {      
        const video = document.querySelector('#video') 
        const player = document.querySelector('.video') 
        window.addEventListener('scroll', () => {
            if((window.scrollY + window.innerHeight) >= video.offsetTop){
                player.play()
            }else{
                player.pause()
            }
        })
    })

    useEffect(() => {
        const logo = document.querySelector('#logo')
        window.addEventListener('scroll', () => {
            if((window.scrollY + window.innerHeight) >= logo.offsetTop){
                setScrollHeight(true)
            }else{
                setScrollHeight(false)
            }
        })
    },[scrollHeight])

    return(
        <VideoGrid>
            <VideoContainer id="video">
            <video className="video" muted loop>
                <source src={vid} type="video/mp4" />
            </video>
            </VideoContainer>
            <LogoContainer id="logo">
                <Image src="/images/tempo.png" scale={scrollHeight} />
            </LogoContainer>
        </VideoGrid>
    );
}
export default VideoComponent