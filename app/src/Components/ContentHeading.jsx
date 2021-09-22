import styled from "styled-components";
import contentImage from "../img/content.svg";

const Image = styled.img`
  margin-right: 2rem;
  width: 14rem;
  height: 14rem;
`;

const Heading = styled.h3`
  color: #abacad;
  width: 60%;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const ContentHeading = () => {
  return (
    <Div>
      <Image src={contentImage} alt="landing content for goals" />
      <Heading>
        "The great danger for most of us lies not in setting our aim too high
        and falling short; but in setting our aim too low, and achieving our
        mark." –Michelangelo
      </Heading>
    </Div>
  );
};

export default ContentHeading;
