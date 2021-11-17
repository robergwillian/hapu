import React from 'react'
import {FeatureWrapper} from './styles'
import ImageSection4 from '../../assets/ImageSection4.png'
import Divider from '../../components/Divider/Divider'

function FeatureSection() {
    return (
        <>
        <FeatureWrapper>
            <h2>A framework built for the long term</h2>
            <p>Childcare is for the long term. And you need a framework you can count on that gives your share long term viability and success. That’s why we’ve defined Hapu around our three tribal principles; clearly defined process, transparency over money and equality of participation.</p>
            <a href="/">Read how Hapu’s tribal background defines our app </a>
            <figure>
                <img src={ImageSection4} alt="Hopu billing history screenshot" />
            </figure>
        </FeatureWrapper>
        <Divider />
        </>
    )
}

export default FeatureSection
