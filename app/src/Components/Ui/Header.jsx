import { GiAcorn } from "react-icons/gi";
import styled from "styled-components";

const Heading = styled.header`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #e9ecef;
`;

const Title = styled.p`
  color: hsl(120, 64%, 23%);
  text-transform: uppercase;
  font-size: 0.6rem;
  margin-left: 1rem;
`;

const logoFill = {
  fill: "rgb(21, 95, 21)",
};

const Header = () => {
  return (
    <Heading>
      <GiAcorn style={logoFill} />
      <Title className="title">GOAL Tracker</Title>
    </Heading>
  );
};

export default Header;
