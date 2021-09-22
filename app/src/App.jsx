import { useState, Fragment } from "react";
import Header from "./Components/Ui/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Content from "./Components/Content";

const DUMMY_DATA = [
  {
    id: 1,
    description: "Learn React!",
    category: "Home",
  },
  {
    id: 2,
    description: "Finish the Course",
    category: "Development",
  },
  {
    id: 3,
    description: "Build Portfolio",
    category: "Personal",
  },
  {
    id: 4,
    description: "Learn Gatsby!",
    category: "Development",
  },
];

const TAG_COLORS = [
  "hsl(260, 100%, 71%)",
  "hsl(10, 100%, 71%)",
  "hsl(160, 100%, 71%)",
  "hsl(100, 100%, 71%)",
  "hsl(220, 100%, 71%)",
  "hsl(25, 100%, 71%)",
  "hsl(280, 100%, 71%)",
  "hsl(90, 100%, 71%)",
  "hsl(320, 100%, 71%)",
  "hsl(160, 100%, 71%)",
  "hsl(350, 100%, 71%)",
  "hsl(205, 100%, 71%)",
  "hsl(40, 100%, 71%)",
  "hsl(180, 100%, 71%)",
  "hsl(130, 100%, 71%)",
];

const DUMMY_TAGS = [
  {
    id: Math.random(),
    title: "Home",
    color: TAG_COLORS[0],
  },
  {
    id: Math.random(),
    title: "Work",
    color: TAG_COLORS[1],
  },
  {
    id: Math.random(),
    title: "Personal",
    color: TAG_COLORS[2],
  },
  {
    id: Math.random(),
    title: "Development",
    color: TAG_COLORS[3],
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
