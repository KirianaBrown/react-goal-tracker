import { useState, Fragment } from "react";
import Header from "./Components/Ui/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Content from "./Components/Content";

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

const DUMMY_TAGS = [
  {
    id: Math.random(),
    title: "Home",
    color: "purple",
  },
  {
    id: Math.random(),
    title: "Work",
    color: "orange",
  },
  {
    id: Math.random(),
    title: "Personal",
    color: "green",
  },
  {
    id: Math.random(),
    title: "Development",
    color: "blue",
  },
];

const App = () => {
  const [goalsData, setGoalsData] = useState(DUMMY_DATA);
  const [tags, setTags] = useState(DUMMY_TAGS);

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
    <Fragment>
      <Header />
      <div className="container">
        <Sidebar tags={tags} />
        <Content
          onAddNewGoal={onAddNewGoalHandler}
          goals_data={goalsData}
          onDeleteItem={onDeleteGoalHandler}
        />
      </div>
    </Fragment>
  );
};

export default App;
