import styled from "styled-components";

const ListItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ListItemDot = styled.div`
  background-color: ${(props) => props.color};
  opacity: 0.8;
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 50%;
`;

const Title = styled.p`
  color: #9e9fa0;
  font-size: 0.6rem;
  margin-left: 0.5rem;
`;

const Tags = (props) => {
  return (
    <ListItem>
      <ListItemDot color={props.color}></ListItemDot>
      <Title>{props.title}</Title>
    </ListItem>
  );
};

export default Tags;
