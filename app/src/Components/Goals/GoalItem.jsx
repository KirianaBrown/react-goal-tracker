import styled from "styled-components";

const ListItem = styled.li`
  margin: 0.5rem 0rem;
  color: slategray;
  border-radius: 10px;
  padding: 1rem 1rem;
  background-color: white;
  width: 60%;
  cursor: pointer;
  font-size: 0.8rem;
`;

const GoalItem = (props) => {
  const onClickDeleteHandler = () => {
    props.onDelete(props.id);
  };

  return <ListItem onClick={onClickDeleteHandler}>{props.children}</ListItem>;
};

export default GoalItem;
