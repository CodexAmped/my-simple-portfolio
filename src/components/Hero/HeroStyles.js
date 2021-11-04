import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  padding: 45px 0;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    padding-top: 40px;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
export const RightSection = styled.div`
  width: 100%;
  padding: 45px 0;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    padding-top: 40px;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
export const AboutIntro = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    padding-bottom: 0;
  }
`;
export const IntroTitleText = styled.h4`
  font-weight: bold;
  font-size: 22px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  align-items: center;
  padding-left: ${(props) => props.paddingLeft ? "10px" : "0" };
  background: #fff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: ${(props) => props.mBottomZero ? "0px" : "8px"};

  @media ${props => props.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 4px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
  }
`;
export const IntroText = styled.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
  padding-right: 16px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 12px;
    line-height: 18px;
    padding-right: 32px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 16px;
    padding-right: 0;
  }
`;
export const ProfileImg = styled.div`
  height: 400px;
`;
export const AboutServices = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 45px;
`;
export const ContentServices = styled.div`
  background: rgb(227 152 162);
  padding: 70px 90px;
  box-sizing: border-box;
  width: 100%;
  
  @media ${props => props.theme.breakpoints.md} {
    padding: 40px 60px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    padding: 30px;
  }
`;
export const Resume = styled.div`
  margin: 100px 0 0 57px;
  width: 35%;
  @media ${props => props.theme.breakpoints.md} {
    width: 100%;
    margin: 8px 0 0 0;
  }
  @media ${props => props.theme.breakpoints.sm} {
    width: 100%;
    margin: 8px 0 0 0;
  }
`;
export const ContentHeader = styled.h2`
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  background: #000;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 4px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
  }
  `;
export const ContentText = styled.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: #000;
  padding-right: 16px;
  margin: 40px 0;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 12px;
    line-height: 18px;
    padding-right: 32px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 16px;
    padding-right: 0;
  }
`;
export const ContentListItem = styled.li`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #000;
  width: 48%;
  list-style-type: disc;
  list-style-position: inside;
  @media ${props => props.theme.breakpoints.md} {
    width: 100%;
  }
`;
export const  ContentList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  & ${ContentListItem}:nth-child(3){
    margin-top: 40px;
  }
  & ${ContentListItem}:nth-child(4){
    margin-top: 40px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    justify-content: center;
  }
`;
export const ContentListItemParagraph = styled.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  margin-top: 20px;
  color: #000;
  font-weight: 400;
`;
export const ResumeLink = styled.span`
  margin-top: 30px;
  border: 1px solid rgb(135 126 126 / 50%);
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  transition: background-color 200ms, border 200ms;
  cursor: pointer;
  &:hover {
    background: #fff;
    color: #000;
    border: 1px solid #fff;
  }
`;
export const PastExperienceHead = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
export const ProcessList = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-between;
  @media ${(props) => props.theme.breakpoints.md} {
    flex-wrap: wrap;
  }
`;
export const ProcessListItem = styled.li`
  line-style: none;
  width: 20%;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 50%;
  }
`;
export const ProcessListItemNumber = styled.div`
  font-family: "Averta",sans-serif;
  color: #000;
  font-size: 26px;
  background-color: #FFFF;
  width: 80px;
  height: 80px;
  padding: 35px 20px 20px 20px;
  box-sizing: border-box;
  border-radius: 50%;
  margin-bottom: 20px;
`;
