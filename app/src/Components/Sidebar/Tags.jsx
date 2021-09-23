import styled from "styled-components";

const ListItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
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

const DeleteButton = styled.button`
  font-size: 0.6rem;
  margin-bottom: 0.25rem;
  border: none;
  background-color: transparent;
  color: hsl(6, 93%, 81%);
  margin-right: 2rem;
  cursor: pointer;
`;

const Tags = (props) => {
  const onDeleteTag = () => {
    props.onDeleteTagHandler(props.title);
  };

  return (
    <ListItem>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ListItemDot color={props.color}></ListItemDot>
        <Title>{props.title}</Title>
      </div>
      <DeleteButton onClick={onDeleteTag}>x</DeleteButton>
    </ListItem>
  );
};

export default Tags;
