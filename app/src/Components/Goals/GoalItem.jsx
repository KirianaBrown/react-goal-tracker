import styled from "styled-components";

const ListItem = styled.li`
  margin: 0.5rem 0rem;
  color: slategray;
  border-radius: 10px;
  padding: 0.75rem;
  /* border: 1px solid #e9ecef; */
  background-color: hsla(209, 16%, 80%, 70%);
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
