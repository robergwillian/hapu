import React from "react";
import { HeroAction, HeroImg, HeroText, HeroWrapper } from "./styles";
import {MdArrowRight} from 'react-icons/md'
import heroImg from '../../assets/heroImg.png'

function Hero() {
  return (
        <HeroWrapper>
            <HeroText>
                <h1>Easily create or join a local nanny share with Hapu</h1>
                <p>Hapu is Airbng for nanny share. Share your home, nanny and costs, and create new flexible, affordable solutions in childcare.</p>
                <HeroAction>
                    <button><MdArrowRight color="#ffffff" size="large"/></button>
                    <p><a href="/">See hapu in action (27 seconds)</a></p>

                </HeroAction>
            </HeroText>
            <HeroImg>
                <img src={heroImg} alt="Manage your nanny share"/>
            </HeroImg>

        </HeroWrapper>
    );
}

export default Hero;
