import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`
export const ProjectIconImge = styled.img`
  width 75px;
  height: 75px;
`;
export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2.5rem;
row-gap: 3.5rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
  column-gap: 2rem;
  row-gap: 3rem;
}

`
export const BlogCard = styled.a`
  text-align: center;
  width: 400px;
  padding-bottom: 10px;
  transition: .3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    background: #1c2331;
    transition: .3s ease-in-out;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  color: #f0f0f0;
`;
export const Arrow = styled.span`
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.5);
  height: 1px;
  width: 40px;
  top: -5px;
  margin: 0 20px;
  transition: width 400ms;
`;
export const Num = styled.p`
  padding-left: 10px;
  color: rgba(255, 255, 255, 0.5);
`;
export const SupContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const SupTitle = styled.p`
  width: 100%;
  padding: 15px 0 15px 0;
  color: rgba(255, 255, 255, 0.5);
  font-style: 2rem;
  line-height: 24px;
  text-align: start;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.8rem
  }
`;
export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;
export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: ${(props) => props.project ? "30px 0px" : "0 50px"};
  color: rgba(255, 255, 255, 0.5);
  font-style: 2rem;
  line-height: 24px;
  text-align: start;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  }
`;
export const ImageInfoSm = styled.p`
  width: 100%;
  padding: 30px 0;
  color: rgba(255, 255, 255, 0.5);
  font-style: 2rem;
  line-height: 24px;
  text-align: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  }
`;
export const ContextContainer = styled.div`
  display: ${(props) => props.column ? "block" : "flex"};
  padding: ${(props) => props.project ? "0px 50px" : "0px"};
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const Context = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  flex: 1;
`;
export const CardInfoContainer = styled.div`
  width: ${(props) => props.project ? "50%" : "100%"};
  @media ${(props) => props.theme.breakpoints.sm} {
      width: 100%;
    }
`;
export const ExtraContent = styled.div`
    border: 1px solid rgb(135 126 126 / 50%);
    padding: 65px;
    @media ${(props) => props.theme.breakpoints.sm} {
      padding: 2rem;
    }
`;
export const CasestudyInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid rgb(135 126 126 / 50%);
    margin-top: 35px;
    padding: 10px 0;
`
export const SubTitle = styled.p`
    font-weight: 600;
    padding: 10px;
`;
export const InfoSpan = styled.p`
    color: rgba(255, 255, 255, 0.5);
    padding: 10px;
`;
export const CasestudyContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-left: ${(props) => props.sideborder ? "1px solid rgb(135 126 126 / 50%);" : "none"};
  border-right: ${(props) => props.sideborder ? "1px solid rgb(135 126 126 / 50%);" : "none"};
`;
export const LinkWrapper = styled.a`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  &:hover {
    color: #9cc9e3;
  }
`;
export const LinkInfo = styled.div`
  padding: 10px;
  margin-right: 2px;
`;
export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;

}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
`