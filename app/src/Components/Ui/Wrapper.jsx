import styled from "styled-components";

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding-left: 2rem;
`;

const Wrapper = (props) => {
  return <WrapperContainer>{props.children}</WrapperContainer>;
};

export default Wrapper;
