import React from 'react';
import Link from 'next/link'
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, Num, SupContent, SupTitle, TitleContent, UtilityList, Img, Arrow} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Case Studies & Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id, image, supTitle, title, description, tags, source, visit, num, path}) => (
        <Link href={path}>
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <SupContent>
                <Num>{num}</Num>
                <Arrow />
                <SupTitle>
                  {supTitle}
                </SupTitle>
              </SupContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            {/* <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={source}>Source</ExternalLinks>
              <ExternalLinks href={visit}>Code</ExternalLinks>
            </UtilityList> */}
          </BlogCard>
        </Link>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;