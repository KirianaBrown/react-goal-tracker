import { Fragment } from "react";
import NewGoal from "./Components/NewGoal/NewGoal";
import Goals from "./Components/Goals/Goals";
import GoalItem from "./Components/Goals/GoalItem";

const goals_data = [
  {
    id: 1,
    description: "Learn React!",
  },
  {
    id: 2,
    description: "Finish the Course",
  },
  {
    id: 3,
    description: "Build Portfolio",
  },
  {
    id: 4,
    description: "Learn Gatsby!",
  },
];

const App = () => {
  const onAddNewGoalHandler = (new_goal_item) => {
    console.log("New Goal Added");
    console.log(new_goal_item);
  };

  const onDeleteGoalHandler = (goal_item_id) => {
    console.log("Goal To be Deleted");
    console.log(goal_item_id);
  };

  return (
    <Fragment>
      <NewGoal onAddNewGoal={onAddNewGoalHandler} />
      <Goals goals_data={goals_data} onDeleteItem={onDeleteGoalHandler} />
    </Fragment>
  );
};

export default App;
