import NewGoalForm from "./NewGoalForm";
import styled from "styled-components";

const Div = styled.div`
  width: 80%;
  padding: 1rem 2rem;
  border-radius: 15px;
  border: 1px solid #e9ecef;
  box-shadow: 5px 2px 10px #d2d5d8;

  /* width: 60%;
  padding: 1rem 2rem;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3); */
`;

const NewGoal = (props) => {
  const onGetNewGoalHandler = (new_goal_item) => {
    props.onAddNewGoal(new_goal_item);
  };

  return (
    <Div>
      <NewGoalForm onGetNewGoal={onGetNewGoalHandler} />
    </Div>
  );
};

export default NewGoal;
