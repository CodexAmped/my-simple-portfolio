import React, { useState, useRef, useEffect } from 'react';

import { AboutIntro, IntroText, AboutServices, ContentServices, ContentHeader, ContentText, } from '../Hero/HeroStyles';
import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode, Email, EmailAddress, Icon } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle, OutlineTitle, Group } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';
import { BiEnvelope } from "react-icons/bi";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);
  const copyText = () => {
    var copyText = "gertmafatle95@gmail.com";
    var text = document.getElementById("myText");
  
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    navigator.clipboard.writeText(copyText);
  
    text.value = "Copied!";
  }
  const handleHover = () => {
    var text = document.getElementById("myText");
    text.value = "Click to copy!";
  }
  const handleHoverLeave = () => {
    var text = document.getElementById("myText");
    text.value = "gertmafatle95@gmail.com";
  }
  return (
    <Section>
      <SectionTitle id="about">About Me</SectionTitle>
      <SectionText>
        Develop gorgeous, responsive interfaces and create clean and secure code, that is elegant
        and easy to manage. Render your product in the most efficient and safe route.
      </SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
       <>
        {TimeLineData.map((item, index) => (
          <CarouselMobileScrollNode key={index} final={index === TOTAL_CAROUSEL_COUNT - 1}>
            <CarouselItem
            index={index} 
            id={`carousel__item-${index}`}
            active={activeItem}
            ononClick={e => handleClick(e, index)}
            >
              <CarouselItemTitle>
                {item.year}
                <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fill-opacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop
                          offset="0.79478"
                          stop-color="white"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
              </CarouselItemTitle>
              <CarouselItemText>{item.text}</CarouselItemText>
            </CarouselItem>
          </CarouselMobileScrollNode>
        ))}
       </>
      </CarouselContainer>
      <CarouselButtons>
          {TimeLineData.map((e, index) => (
            <CarouselButton
            key={index}
            index={index}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type="button">
              <CarouselButtonDot active={activeItem} />
            </CarouselButton>
          ))}
      </CarouselButtons>
      <SectionTitle main>Services & Contact</SectionTitle>
      <AboutIntro>
        <Group sidemargin>
          <AboutServices>
            <ContentServices>
              <ContentHeader>I'm building digital experience and interface</ContentHeader>
              <ContentText>
                I build my projects with concise detail and responsiveness in mind. My mission is to keep the viewers on your page and increase the turnover
                by finding exactly what is it that appeals to them.
              </ContentText>
            </ContentServices>
          </AboutServices>
        </Group>
        <Group sidemargin>
          <OutlineTitle main>
            Interested?<br />
            Lets get in touch!
          </OutlineTitle>
          <IntroText>
            I'm open to freelance opportunities or remote position. Feel free to reach out if you need hand
            on your side or open source project. I'd love to help.
          </IntroText>
          <Email onClick={copyText} onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
            <Icon>
              <BiEnvelope />
            </Icon>
            <EmailAddress type="text" value="gertmafatle95@gmail.com" id="myText" disabled/>
          </Email>
        </Group>
      </AboutIntro>
    </Section>
  );
};

export default Timeline;
