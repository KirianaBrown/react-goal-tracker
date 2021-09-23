import NewGoalForm from "./NewGoalForm";
import styled from "styled-components";

const Div = styled.div`
  width: 80%;
  padding: 1rem 2rem;
  border-radius: 15px;
  border: 1px solid #e9ecef;
  box-shadow: 5px 2px 10px #d2d5d8;
`;

const NewGoal = (props) => {
  const onGetNewGoalHandler = (new_goal_item) => {
    props.onAddNewGoal(new_goal_item);
  };

  return (
    <Div>
      <NewGoalForm onGetNewGoal={onGetNewGoalHandler} tags={props.tags} />
    </Div>
  );
};

export default NewGoal;
