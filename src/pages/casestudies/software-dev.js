import React from 'react'
import { Section, SectionDivider, SectionTitle, SpaceDivider } from '../../styles/GlobalComponents';
import { BlogCard, ContextContainer, Context, CardInfo, LinkWrapper, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, Num, SupContent, SupTitle, TitleContent, UtilityList, Img, Arrow,CardInfoContainer,  CasestudyInfo, CasestudyContent, SubTitle, InfoSpan, LinkInfo, ProjectIconImge, ImageInfoSm} from '../../components/Projects/ProjectsStyles';
import { Layout } from '../../layout/Layout';
import { RiExternalLinkFill } from 'react-icons/ri';

export default function softwareDev() {
    return (
        <Layout>
            <Section>
                <TitleContent>
                    <SupContent>
                        <Num>01</Num>
                        <Arrow />
                        <SupTitle>
                            MoshTech
                        </SupTitle>
                    </SupContent>
                </TitleContent>
                <SectionTitle main>Designing and Building a Website for Software Design & Development Startup</SectionTitle>
                <HeaderThree title>Introduction</HeaderThree>
                <CardInfoContainer project>
                    <CardInfo project>
                        MoshTect is a software development platform project, that help design, implement and deliver scalable systems,
                        web applications, and many other services to the clients or businesses. I have done some work on redesigning and illustration style.
                    </CardInfo>
                    <CasestudyInfo>
                        <CasestudyContent>
                            <SubTitle>Work</SubTitle>
                            <InfoSpan>Side Project</InfoSpan>
                        </CasestudyContent>
                        <CasestudyContent sideborder>
                            <SubTitle>Year</SubTitle>
                            <InfoSpan>2018</InfoSpan>
                        </CasestudyContent>
                        <CasestudyContent>
                            <SubTitle>Link</SubTitle>
                            <LinkWrapper href="http://moshtech.epizy.com/" target="_blank">
                                <LinkInfo>Landing Page</LinkInfo>
                                <RiExternalLinkFill />
                            </LinkWrapper>
                        </CasestudyContent>
                    </CasestudyInfo>
                </CardInfoContainer>
                <Img large src="/images/moshtech_01.png" />
            </Section>
            <Section>
                <SectionTitle main>Context & Epitaph</SectionTitle>
                <ContextContainer project>
                    <Context>
                        <HeaderThree>The Original Idea</HeaderThree>
                        <CardInfo project>
                            I have always wanted to build my own sofwares and web/mobile application. I like designing and building applications from the ground up, I know that it is a time consuming process, 
                            but it helps me understand how different components come together to form a fully functional product. With that kind of experience, I decided to build a platform where I can help design and build 
                            applications for other people or companies.
                        </CardInfo>
                    </Context>
                    <Context>
                        <HeaderThree>The End</HeaderThree>
                        <CardInfo project>
                            This is was one of my many projects that helped me improve my design and coding skills. With the help of many other third party libraries and frameworks, made my work very efficient and helped minimize time efficiency. 
                            Finding motivation, how to rationalize decisions. I decided to hit pause on this project becuase at that moment, my school work was piling up. 
                        </CardInfo>
                    </Context>
                </ContextContainer>
            </Section>
            <Section>
                <SectionTitle main>Process</SectionTitle>
                <SpaceDivider>
                    <CardInfo>
                        With a good knowladge of different tools and resource managers like Kipt, Zootools, with agile management approach, detailed documentation and development process, 
                        I added to my reseach, sites and software systems with the same problematic-like user interface experience. I have made a list of some basic functionalities.
                    </CardInfo>
                </SpaceDivider>
                <ContextContainer project>
                    <Context>
                        <HeaderThree>Defining goals</HeaderThree>
                        <ProjectIconImge src="/images/icon_02.svg" />
                        <CardInfo project>
                           The basic task of MoshTech site was to provide users with a way to communicate with the developer teams
                            about projects they want to conduct. It was to focus on delivering elegant and powerful systems that helps to rapidly grow a business.
                        </CardInfo>
                    </Context>
                    <Context>
                        <HeaderThree>Designing the product</HeaderThree>
                        <ProjectIconImge src="/images/icon_03.svg" />
                        <CardInfo project>
                            This site needed to be distraction-free, becuase the content in the interface needed to take most of the space. 
                            I also wanted this site to have fun interface with it's own personality. 
                        </CardInfo>
                    </Context>
                    <Context>
                        <HeaderThree>Building the experience</HeaderThree>
                        <ProjectIconImge src="/images/icon_01.svg" />
                        <CardInfo project>
                            I have developed lot of interfaces in the past, but lot of them were not built to handle lot of content mostly in a single page application,
                            were not quick enough for daily use. Efficiency was a key to design the experience. 
                        </CardInfo>
                    </Context>
                </ContextContainer>
            </Section>
            <Section>
                <SectionTitle main>Wireframes & Prototype</SectionTitle>
                <SpaceDivider>
                    <CardInfo>
                        MoshTech is designed to make it easy for customers to be fully informed about the services provided so that they can make a good decision about growing their business with Moshtech services provided.
                        It also lets you see how different components work together to form a product(s) that are elegant and scalable. 
                    </CardInfo>
                </SpaceDivider>
                <Img large src="/images/wireframe_svg_01.svg" />
                <Context>
                    <ContextContainer project column>
                        <HeaderThree>Main focus</HeaderThree>
                        <CardInfo project>
                            The purspose of MoshTech website was to be an easy day-to-day interface where the recurrent actions needed to have as less friction as possible. And I tried to build some features in that way.
                        </CardInfo>
                    </ContextContainer>
                </Context>
                <Context>
                    <ContextContainer project column>
                        <HeaderThree>Technologies</HeaderThree>
                        <CardInfo project>
                           Here in this section I wanted to build a list that was intuitive with basic animation integration. When you hover over the item, will be gorgeous animation.
                        </CardInfo>
                    </ContextContainer>
                </Context>
                <Img large src="/images/wireframe_svg_03.svg" />
                <Context>
                    <ContextContainer project column>
                        <HeaderThree>Signup form</HeaderThree>
                        <CardInfo project>
                            I tried to build a form that was dynamic, and have animation coupled with progress bar to show the progrees of form submision when the a button is pressed.
                        </CardInfo>
                    </ContextContainer>
                </Context>
                <Img large src="/images/wireframe_svg_02.svg" />
                <Context>
                    <ContextContainer project column>
                        <HeaderThree>Prototype</HeaderThree>
                        <CardInfo project>
                            Working on prototype helped to realise the things that were not working well, such as the smooth animation for page scroll-to-top function, it felt that smooth scroll was frustating. 
                            To improve that I had to use different javascript algorithm for the efficiency.
                        </CardInfo>
                    </ContextContainer> 
                </Context>
                <Img large src="/images/prototype_svg_01.svg" />
            </Section>
            <Section>
                <SectionTitle main>Building the interface</SectionTitle>
                <SpaceDivider>
                    <CardInfo>
                        The masonry grid-based design was chosen to not alter the content. I wanted to keep the ratio of the boxes rather than having everything the same size, to keep that total overview on the content. 
                        And I decided to put the contact-us form at the bottom of the the page, but the original idea was to have a pop-up window that displays form.
                    </CardInfo>
                </SpaceDivider>
                <Img large src="/images/interface_svg_02.svg" />
                <ImageInfoSm>Defualt grid interface</ImageInfoSm>
                <SpaceDivider>
                    <Img large src="/images/interface_svg_03.svg" />
                    <ImageInfoSm>Sign up form</ImageInfoSm>
                </SpaceDivider>
            </Section>
            <Section>
                <SectionTitle main>Interaction</SectionTitle>
                <SpaceDivider>
                    <CardInfo>
                        When building the interaction in motion, helped me determine the efficiency of the animation. I didn’t want that animation to slow down the process of submitting the content. I used After Effects at first, but an HTML & CSS prototype gave a much better result when trying these interactions.
                    </CardInfo>
                </SpaceDivider>
                
            </Section>
            <Section>
                <SectionTitle main>Logo</SectionTitle>
                <SpaceDivider>
                    <CardInfo>
                       I had lot of iterations for the logo. I selected the one which shows the idea of two different pieces with few similarities that fuses together to form a perfect shape which also represent a letter 'M',
                       so I have used two rounded triangles and coupled it with simple sans-serif font. I wanted something that will be simple to play with.
                    </CardInfo>
                </SpaceDivider>
                <Img large src="/images/logo_design_svg.svg" />
            </Section>
            <Section>
                <SectionTitle main>Landing Page</SectionTitle>
                <SpaceDivider>
                    <CardInfo>
                        This website was one of the project I really enjoyed doing 
                    </CardInfo>
                </SpaceDivider>
                <Img large src="/images/landingpage_svg.svg" />
            </Section>
        </Layout>
      );
}
