import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, Logo } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: '20' }}>
          <Logo src="/images/logo-svg.svg" /><Span>Portfolio</Span>
        </a>
      </Link> 
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/codexamped">
        <AiFillGithub size="2rem" />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/in/gertmafatle">
        <AiFillLinkedin size="2rem" />
      </SocialIcons>
      <SocialIcons href="http://twitter.com/gertmafatle">
        <AiFillInstagram size="2rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
