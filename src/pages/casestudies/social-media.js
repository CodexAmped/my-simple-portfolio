import React from 'react'
import { Section, SectionDivider, SectionTitle, SpaceDivider } from '../../styles/GlobalComponents';
import { BlogCard, ContextContainer, Context, CardInfo, LinkWrapper, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, Num, SupContent, SupTitle, TitleContent, UtilityList, Img, Arrow,CardInfoContainer,  CasestudyInfo, CasestudyContent, SubTitle, InfoSpan, LinkInfo, ProjectIconImge, ImageInfoSm, ExtraContent} from '../../components/Projects/ProjectsStyles';
import { Layout } from '../../layout/Layout';
import { RiExternalLinkFill } from 'react-icons/ri';

export default function socialMedia() {
    return (
        <Layout>
            <Section nopadding id="projects">
                <TitleContent>
                    <SupContent>
                        <Num>02</Num>
                        <Arrow />
                        <SupTitle>
                            Viroglyph
                        </SupTitle>
                    </SupContent>
                </TitleContent>
                <SectionTitle main>Implementation of Content Sharing Media Platform</SectionTitle>
                <HeaderThree title>Introduction</HeaderThree>
                <CardInfoContainer project>
                    <CardInfo project>
                        This is a social media platform that allows users to post and share multimedia and other content to a short-form blog. It helps users 
                        share their expereinces and personal information with family and friends. It lets you save everything that inspires you and store it anywhere you want.
                        You can like posts, comment and follow other users of the site.
                    </CardInfo>
                    <CasestudyInfo>
                        <CasestudyContent>
                            <SubTitle>Work</SubTitle>
                            <InfoSpan>Side Project</InfoSpan>
                        </CasestudyContent>
                        <CasestudyContent sideborder>
                            <SubTitle>Year</SubTitle>
                            <InfoSpan>2021</InfoSpan>
                        </CasestudyContent>
                        <CasestudyContent>
                            <SubTitle>Link</SubTitle>
                            <LinkWrapper href="http://viroglyph.rf.gd/" target="_blank">
                                <LinkInfo>Website</LinkInfo>
                                <RiExternalLinkFill />
                            </LinkWrapper>
                        </CasestudyContent>
                    </CasestudyInfo>
                </CardInfoContainer>
                <Img large src="/images/home-page-social--svg.svg" />
            </Section>
            <Section>
                <SectionTitle main>Timeline & Process</SectionTitle>
                <SpaceDivider>
                    <CardInfo>
                        I decided to set the timeline for myself, and this project took about 4 months, more or less. There were two major redesign and deveopment that I had to deal with.
                        The first one failed terribly and had lot of bugs, but it helped me to understand what wasn't working with the previous functionalities. I tried to change the
                        the code and style without questioning the meaning of it. The second iteration allowed me to change the point of view and the understanding of what Viroglyph site could provide as a platform.
                    </CardInfo>
                </SpaceDivider>
                <Img large src="/images/timeline_01.svg" />
            </Section>
            <Section>
                <SectionTitle main>Early Redesign & Redevelopment Version</SectionTitle>
                <SpaceDivider>
                    <CardInfo>
                       After doing a little bit of research, took a deep look into the old design and understanding the project. I produced some wireframes to help me visualise the hierarchy of the content. Since this was just a side project,
                       I didn't want to formalise more on the layout. With wireframing I was able to shape the animation and illustrations with the layout.
                        <br/>
                    <SpaceDivider>
                        For the illustration, the key idea was showing the concept of the social media (where it is used as structure for managing pictures, text content, links, videos, for example), as a platform where users can share thier insperations.
                    </SpaceDivider>
                    </CardInfo>
                </SpaceDivider>
                <Img large src="/images/content_hierarchy_svg.svg" />
                <ImageInfoSm>Content hierarchy iteration</ImageInfoSm>
                <ExtraContent>
                    <HeaderThree>Iterating on the actual design and development</HeaderThree>
                    <ContextContainer project>
                        <Context>
                            <ContextContainer project column>
                                <CardInfo project>
                                    I have worked on this project for few months and I came to realization if I wanted other people to use this platform, the design and illustrations were not 
                                    convincing enough. So I decided to reshape the design and content structure; using my previous mistakes and aking better questions would lead me to a better resolve.
                                </CardInfo>
                            </ContextContainer>
                        </Context>
                        <Context>
                            <ContextContainer project column>
                                <CardInfo project>
                                    The redesign and was incomplete, I was basically doing the iterations of the last one. And because of the validation that I do for every project that I work on, 
                                    I came to realization that if someone other than me were to use this platform, they wouldn't understand the multitude of new elements in the new home page, I decided to change almost everything.
                                </CardInfo>
                            </ContextContainer>
                        </Context>
                    </ContextContainer> 
                </ExtraContent>
            </Section>
            <Section>
                <SectionTitle main>Getting the right content</SectionTitle>
                <SpaceDivider>
                    <CardInfo>
                        When I started working on new implementation and design, I tried to understand what was wrong and missing previously. I decided to work from scratch on the content. I worked to inventory all the content,
                        writing the stregnth of the solution on post-it note. I then did a quick hierarchy between the page to see if all the main layout was is in the right place and tried to create to create the beginning of explaining what
                        the site was all about.
                    </CardInfo> 
                </SpaceDivider>
                <Img large src="/images/content-svg.svg" />
            </Section>
        </Layout>
      );
}
