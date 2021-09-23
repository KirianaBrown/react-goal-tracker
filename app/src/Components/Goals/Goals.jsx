import GoalItem from "./GoalItem";
// import "./Goals.css";

import styled from "styled-components";

const List = styled.ul`
  list-style-type: none;
  width: 80%;
  margin-left: 6rem;
  padding-inline-start: 0;

  @media only screen and (max-width: 500px) {
    width: 100%;
    margin-left: 1rem;
  }
`;

const Goals = (props) => {
  const deleteItem = (id) => {
    props.onDeleteItem(id);
  };

  return (
    <List>
      {props.goals_data.map((el) => (
        <GoalItem
          key={el.id}
          id={el.id}
          onDelete={deleteItem}
          color={el.color}
          tag={el.tag}
          description={el.description}
        />
      ))}
    </List>
  );
};

export default Goals;
