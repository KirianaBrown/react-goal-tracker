import { useState } from "react";
import NewGoal from "./Components/NewGoal/NewGoal";
import Goals from "./Components/Goals/Goals";

const DUMMY_DATA = [
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
  const [goalsData, setGoalsData] = useState(DUMMY_DATA);

  const onAddNewGoalHandler = (new_goal_item) => {
    const new_item = {
      id: Math.random(),
      description: new_goal_item,
    };

    setGoalsData((prevState) => {
      return [...prevState, new_item];
    });
  };

  const onDeleteGoalHandler = (goal_id) => {
    setGoalsData((prevState) => {
      const updatedGoals = prevState.filter((goal) => goal.id !== goal_id);
      return updatedGoals;
    });
  };

  return (
    <div className="app">
      <NewGoal onAddNewGoal={onAddNewGoalHandler} />
      <Goals goals_data={goalsData} onDeleteItem={onDeleteGoalHandler} />
    </div>
  );
};

export default App;
