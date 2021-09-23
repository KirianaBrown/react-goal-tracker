import styled from "styled-components";
import contentImage from "../img/content.svg";

const Image = styled.img`
  margin-right: 2rem;
  width: 14rem;
  height: 14rem;

  @media only screen and (max-width: 500px) {
    width: 8rem;
    height: 8rem;
  }
`;

const Heading = styled.h3`
  color: #abacad;
  width: 60%;

  @media only screen and (max-width: 800px) {
    font-size: 1rem;
    margin-right: 0.5rem;
  }
  @media only screen and (max-width: 500px) {
    font-size: 0.6rem;
    margin-right: 0.5rem;
    width: 80%;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
  }
`;

const SubHeading = styled.p`
  color: rgb(21, 95, 21);
  font-size: 0.8rem;
`;

const ContentHeading = () => {
  return (
    <Div>
      <Image src={contentImage} alt="landing content for goals" />
      <Heading>
        <SubHeading>Take charge of your Goals </SubHeading>
        "The great danger for most of us lies not in setting our aim too high
        and falling short; but in setting our aim too low, and achieving our
        mark." –Michelangelo
      </Heading>
    </Div>
  );
};

export default ContentHeading;
