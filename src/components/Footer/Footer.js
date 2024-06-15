import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:gertmafatle95@gmail.com">gertmafatle95@gmail.com</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:(+27)634402425">+27 63 440 2425</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/codexamped">
          <AiFillGithub size="2rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/codexamped/">
            <AiFillLinkedin size="2rem" />
          </SocialIcons>
          <SocialIcons href="http://twitter.com/gertmafatle">
            <AiFillInstagram size="2rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
