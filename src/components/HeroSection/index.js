import React from "react";
import { HeroContainer, HeroBg, VideoBg } from "./HeroElements";
import Video from "../../videos/video.mp4";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Hi, I'm Avinash.</HeroH1>
        <HeroP>I'm a Software Developer, ready to be your new hire.</HeroP>
        <HeroBtnWrapper>
          <Button to='/contact'>
            Hire Me! {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
