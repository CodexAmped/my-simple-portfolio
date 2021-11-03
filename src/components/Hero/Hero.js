import React from 'react';

import { Section, SectionText, SectionTitle, BioName } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <BioName>I'm Gert Mafatle</BioName>
      <SectionTitle main center>
        I'm a Web Developer<br />
        Turning Your Idea Into Reality
      </SectionTitle>
      <SectionText>
        I help clients to implement and design digital products and turn ideas into a functional and delightful experience. My main focus is working on interface and digital design – mainly building products, branding and websites.
      </SectionText>
      <Button onClick={() => window.location = "http://github.com/gertmafatle"}>About & Services</Button>
    </LeftSection>
  </Section>
);

export default Hero;