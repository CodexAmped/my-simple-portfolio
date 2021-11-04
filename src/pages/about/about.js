import React from 'react';
import Link from 'next/link';
import { Section, OutlineTitle, SectionText, SectionTitle, AboutTag, Group, SpaceDivider } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, AboutIntro, IntroTitleText, IntroText, ProfileImg, AboutServices, ContentServices, Resume, ContentHeader, ContentText, ContentList, ContentListItem, ContentListItemParagraph, ResumeLink, PastExperienceHead, ProcessList, ProcessListItem, ProcessListItemNumber } from '../../components/Hero/HeroStyles';
import { Img } from '../../components/Projects/ProjectsStyles';
import { Layout } from '../../layout/Layout';
import { FcViewDetails } from "react-icons/fc";

const About = (props) => (
  <Layout>
    <Section row nopadding>
      <LeftSection>
        <AboutTag>About & Services</AboutTag>
        <OutlineTitle main>Hello ! I'm Gert</OutlineTitle>
        <SectionTitle main center>
          I'm Building Digital<br />
          Experience & Interfaces
        </SectionTitle>
        <AboutIntro>
          <Group>
            <IntroTitleText>I'm Gert Mafatle, a freelance Web Developer/UI -UX Designer currently living in Johanessburg, South Africa</IntroTitleText>
            <IntroText>
              My experience comes from working with different people to solve problems on various projects and help them ship designs and developments, alpha products or new features.
              One of my goals during the project development, is to make sure that we are always on the same page by documenting and communicating about the journey.
            </IntroText>
          </Group>
          <Group>
            <ProfileImg>
              <Img src="/images/profile.svg" />
            </ProfileImg>
          </Group>
        </AboutIntro>
        <AboutServices>
          <ContentServices>
            <ContentHeader>Services</ContentHeader>
            <ContentText>Over the past years, I have helped clients to develop and ship their products. I've collaborated with few people on site or remote doing freelance work - to build
              on a wide product range.
            </ContentText>
            <ContentList>
              <ContentListItem>
                Website
                <ContentListItemParagraph>
                  Telling a story that will engage with your target audience to your product.
                </ContentListItemParagraph>
              </ContentListItem>
              <ContentListItem>
                Design System
                <ContentListItemParagraph>
                  Building and shiping ideas, from features to complete product.
                </ContentListItemParagraph>
              </ContentListItem>
              <ContentListItem>
                Branding
                <ContentListItemParagraph>
                  Creating a brand that's appealing to your users and customers that align your strategy.
                </ContentListItemParagraph>
              </ContentListItem>
              <ContentListItem>
                SAAS Products
                <ContentListItemParagraph>
                  Working on your product consistency and helping others getting onboard.
                </ContentListItemParagraph>
              </ContentListItem>
            </ContentList>
          </ContentServices>
          <Resume>
            <PastExperienceHead>
              <FcViewDetails size="3rem"/>
              <IntroTitleText paddingLeft mBottomZero>Past Experience</IntroTitleText>
            </PastExperienceHead>
            <IntroText>Want to know more about my experience and education.</IntroText>
            <Link href="/files/file">
              <ResumeLink>My Resume</ResumeLink>
            </Link>
          </Resume>
        </AboutServices>
      </LeftSection>
    </Section>
    <Section>
      <SectionTitle>Values & Process</SectionTitle>
      <SpaceDivider>
        <IntroTitleText>Using the right tools with well structured process leads to the collaboration's success.</IntroTitleText>
      </SpaceDivider>
      <ProcessList>
        <ProcessListItem>
          <ProcessListItemNumber>1.</ProcessListItemNumber>
          <IntroTitleText>Research</IntroTitleText>
          <IntroText>
              Gathering information about your product and goals. Reseaching your industry and competitors.
            </IntroText>
        </ProcessListItem>
        <ProcessListItem>
          <ProcessListItemNumber>2.</ProcessListItemNumber>
          <IntroTitleText>Prototype</IntroTitleText>
          <IntroText>
              Gathering information about your product and goals. Reseaching your industry and competitors.
            </IntroText>
        </ProcessListItem>
        <ProcessListItem>
          <ProcessListItemNumber>3.</ProcessListItemNumber>
          <IntroTitleText>Design</IntroTitleText>
          <IntroText>
              Gathering information about your product and goals. Reseaching your industry and competitors.
            </IntroText>
        </ProcessListItem>
        <ProcessListItem>
          <ProcessListItemNumber>4.</ProcessListItemNumber>
          <IntroTitleText>Build</IntroTitleText>
          <IntroText>
              Gathering information about your product and goals. Reseaching your industry and competitors.
            </IntroText>
        </ProcessListItem>
      </ProcessList>
    </Section>
  </Layout> 

);

export default About;