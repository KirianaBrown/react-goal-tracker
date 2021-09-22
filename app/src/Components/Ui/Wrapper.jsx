import styled from "styled-components";

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  background: linear-gradient(to right top, #fdfeff, #e5e5e6);
`;

const Wrapper = (props) => {
  return <WrapperContainer>{props.children}</WrapperContainer>;
};

export default Wrapper;
