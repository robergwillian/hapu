import React from "react";
import { HeroAction, HeroImg, HeroText, HeroWrapper } from "./styles";
import { MdArrowRight } from "react-icons/md";
import heroImg from "../../assets/heroImg.png";
import {
  Experiment,
  Variant,
  emitter,
  experimentDebugger,
} from "@marvelapp/react-ab-test";
import Mixpanel from 'mixpanel';
import secrets from '../../secrets.json';

var mixpanel = Mixpanel.init(secrets.mixpanelToken);

experimentDebugger.enable();
emitter.defineVariants(
  "landingPageHeroExperiment",
  ["control", "variant"],
  [34, 33]
);

function Hero() {

  function handleExperiment(e) {
    emitter.emitWin("landingPageHeroExperiment");
  }

  return (
    <Experiment name="landingPageHeroExperiment">
      <Variant name="control">
        <HeroWrapper>
          <HeroText onMouseOver={(e) => handleExperiment(e)}>
            <h1>Easily create or join a local nanny share with Hapu</h1>
            <p>
              Hapu is Airbng for nanny share. Share your home, nanny and costs,
              and create new flexible, affordable solutions in childcare.
            </p>
            <HeroAction>
              <button aria-label="Press Play">
                <MdArrowRight color="#ffffff" size={120} />
              </button>
              <p>
                <a href="/">See hapu in action (27 seconds)</a>
              </p>
            </HeroAction>
          </HeroText>
          <HeroImg>
            <figure>
              <img src={heroImg} alt="Manage your nanny share" />
            </figure>
          </HeroImg>
        </HeroWrapper>
      </Variant>

      <Variant name="variant">
        <HeroWrapper>
          <HeroText onMouseOver={(e) => handleExperiment(e)}>
            <h1>Create the childcare you need at a price you can afford</h1>
            <p>
              Connect with other local families to share a nanny from as low as
              $10.00/hr each. Create your family profile today to get started.
            </p>
            <HeroAction>
              <button aria-label="Press Play">
                <MdArrowRight color="#ffffff" size={120} />
              </button>
              <p>
                <a href="/">See hapu in action (27 seconds)</a>
              </p>
            </HeroAction>
          </HeroText>
          <HeroImg>
            <figure>
              <img src={heroImg} alt="Manage your nanny share" />
            </figure>
          </HeroImg>
        </HeroWrapper>
      </Variant>
    </Experiment>
  );
}

export default Hero;

// Called when the experiment is displayed to the user.
emitter.addPlayListener(function(experimentName, variantName) {
    console.log(`Displaying experiment ${experimentName} variant ${variantName}`);
});


// Called when a 'win' is emitted, in this case by this.refs.experiment.win()
emitter.addWinListener(function(experimentName, variantName) {
    console.log(
        `Variant ${variantName} of experiment ${experimentName} was shown`
    );
    mixpanel.track(experimentName + " " + variantName, {
        name: experimentName,
        variant: variantName,
    });
});