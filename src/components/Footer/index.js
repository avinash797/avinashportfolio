import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinkItems,
  FooterLink,
  FooterLinksWrapper,
  FooterLinkTitle,
  SocialIconLink,
  SocialMedia,
  SocialIcons,
  SocialLogo,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Me</FooterLinkTitle>
              <FooterLink to="/contact">Contact Me</FooterLink>
              <FooterLink to="/contact">Projects</FooterLink>
              <FooterLink to="/contact">Skills</FooterLink>
              <FooterLink to="/contact">Contact Me</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Me</FooterLinkTitle>
              <FooterLink to="/contact">Contact Me</FooterLink>
              <FooterLink to="/contact">Projects</FooterLink>
              <FooterLink to="/contact">Skills</FooterLink>
              <FooterLink to="/contact">Contact Me</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Me</FooterLinkTitle>
              <FooterLink to="/contact">Contact Me</FooterLink>
              <FooterLink to="/contact">Projects</FooterLink>
              <FooterLink to="/contact">Skills</FooterLink>
              <FooterLink to="/contact">Contact Me</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Me</FooterLinkTitle>
              <FooterLink to="/contact">Contact Me</FooterLink>
              <FooterLink to="/contact">Projects</FooterLink>
              <FooterLink to="/contact">Skills</FooterLink>
              <FooterLink to="/contact">Contact Me</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Avinash Joshi
            </SocialLogo>
            <WebsiteRights>
              Avinash Joshi {new Date().getFullYear()} All Rights Reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
