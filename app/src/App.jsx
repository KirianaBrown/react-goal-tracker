import { useState, Fragment } from "react";
import Header from "./Components/Ui/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Content from "./Components/Content";

const TAG_COLORS = [
  "hsl(120, 64%, 22%)",
  "hsl(120, 64%, 42%)",
  "hsl(120, 64%, 62%)",
  "hsl(120, 64%, 82%)",
  "hsl(120, 64%, 12%)",
  "hsl(100, 84%, 42%)",
  "hsl(100, 84%, 62%)",
  "hsl(100, 84%, 22%)",
  "hsl(100, 84%, 12%)",
  "hsl(100, 84%, 82%)",
];

const DUMMY_DATA = [
  {
    id: 1,
    description: "Learn React!",
    tag: "Home",
    color: TAG_COLORS[0],
  },
  {
    id: 2,
    description: "Finish the Course",
    tag: "Development",
    color: TAG_COLORS[3],
  },
  {
    id: 3,
    description: "Build Portfolio",
    tag: "Personal",
    color: TAG_COLORS[2],
  },
  {
    id: 4,
    description: "Learn Gatsby!",
    tag: "Development",
    color: TAG_COLORS[3],
  },
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

  const onAddNewGoalHandler = (newGoalItem) => {
    const index = DUMMY_TAGS.findIndex((tag) => tag.title === newGoalItem.tag);
    const tagColor = DUMMY_TAGS[index].color;

    const new_item = {
      id: Math.random(),
      description: newGoalItem.title,
      tag: newGoalItem.tag,
      color: tagColor,
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

  // TAGS
  const onAddNewTag = (new_tag) => {
    // index into array of colors to get color for tag (next)
    const index = Object.keys(tags).length;

    // create a new TAG object
    const newTagColor = TAG_COLORS[index];

    // create new object
    const newTag = {
      id: Math.random(),
      title: new_tag,
      color: newTagColor,
    };

    setTags((prevState) => {
      return [...prevState, newTag];
    });
  };

  return (
    <Fragment>
      <Header />
      <div className="container">
        <Sidebar tags={tags} onAddNewTag={onAddNewTag} />
        <Content
          onAddNewGoal={onAddNewGoalHandler}
          goals_data={goalsData}
          onDeleteItem={onDeleteGoalHandler}
          tags={tags}
        />
      </div>
    </Fragment>
  );
};

export default App;
