import React from 'react';
import Link from 'next/link';

import { Section, SectionText, SectionTitle, AboutTag } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <AboutTag>I'm Gert Mafatle</AboutTag>
      <SectionTitle main center>
        I'm a Web Developer<br />
        Turning Your Idea Into Reality
      </SectionTitle>
      <SectionText>
        I help clients to implement and design digital products and turn ideas into a functional and delightful experience. My main focus is working on interface and digital design – mainly building products, branding and websites.
      </SectionText>
      <Link href="/about/about">
        <Button>About & Services</Button>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;