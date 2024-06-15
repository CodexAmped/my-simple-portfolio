import React from 'react';
import Link from 'next/link'
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, Num, SupContent, SupTitle, TitleContent, UtilityList, Img, Arrow} from '../Projects/ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../otherProjects/constants';
import { RiExternalLinkFill } from 'react-icons/ri';

const Projects = () => (
  <Section nopadding id="projects">
    <GridContainer>
      {projects.map(({id, image, supTitle, title, description, tags, source, visit, num, path}) => (
        <Link href={path}>
          <BlogCard key={id}>
            <Img src={image} />
            <UtilityList>
              <ExternalLinks href={source} target="_blank">Github</ExternalLinks>
              <ExternalLinks href={visit} target="_blank">Link <RiExternalLinkFill />
              </ExternalLinks>
            </UtilityList>
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
            </TitleContent>
            {/* <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div> */}
          </BlogCard>
        </Link>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;