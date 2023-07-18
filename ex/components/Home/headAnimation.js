'use client'

import React from 'react'

import Lottie from 'react-lottie-player'
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from '/public/header-ani.json'

export default function HeadAnimation() {
    return (
        <Lottie
        loop
        animationData={lottieJson}
        play
        />
    )
}
