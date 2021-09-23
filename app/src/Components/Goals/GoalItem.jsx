import styled from "styled-components";

const ListItem = styled.li`
  margin: 0.5rem 0rem;
  color: slategray;
  border-radius: 10px;
  padding: 1rem 1rem;
  background-color: white;
  width: 70%;
  cursor: pointer;
  font-size: 0.8rem;
  border-left: 10px solid ${(props) => props.color};

  @media only screen and (max-width: 500px) {
    padding: 0.5rem 0.5rem;
    margin-left: 0.5rem;
  }
`;

const Description = styled.h4`
  padding: 0rem;
  margin: 0rem;
  font-size: 1rem;

  @media only screen and (max-width: 500px) {
    font-size: 0.7rem;
  }
`;

const Tag = styled.h6`
  padding: 0rem;
  margin: 0rem;
  margin-top: 0.5rem;
  font-size: 0.6rem;
  color: #aeb0b3;
  font-style: italic;
`;

const GoalItem = (props) => {
  const onClickDeleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <ListItem onClick={onClickDeleteHandler} color={props.color}>
      <Description>{props.description}</Description>
      <Tag>{props.tag}</Tag>
    </ListItem>
  );
};

export default GoalItem;
