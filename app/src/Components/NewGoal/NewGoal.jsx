import NewGoalForm from "./NewGoalForm";

import "./NewGoal.css";

const NewGoal = (props) => {
  const onGetNewGoalHandler = (new_goal_item) => {
    props.onAddNewGoal(new_goal_item);
  };

  return (
    <div className="new-goal">
      <NewGoalForm onGetNewGoal={onGetNewGoalHandler} />
    </div>
  );
};

export default NewGoal;
