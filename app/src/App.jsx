import { useState, useEffect, Fragment } from "react";
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
];

const DUMMY_TAGS = [
  {
    id: Math.random(),
    title: "All",
    color: TAG_COLORS[0],
  },
];

const App = () => {
  // const [goalsData, setGoalsData] = useState(DUMMY_DATA);
  // const [tags, setTags] = useState(DUMMY_TAGS);
  const [selectedTag, setSelectedTag] = useState("");

  const [tags, setTags] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("tags");
    const initialValue = JSON.parse(saved);
    return initialValue || DUMMY_TAGS;
  });

  const [goalsData, setGoalsData] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("goals");
    const initialValue = JSON.parse(saved);
    return initialValue || DUMMY_DATA;
  });

  useEffect(() => {
    localStorage.setItem("tags", JSON.stringify(tags));
  }, [tags]);

  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goalsData));
  }, [goalsData]);

  const onAddNewGoalHandler = (newGoalItem) => {
    const index = tags.findIndex((tag) => tag.title === newGoalItem.tag);
    const tagColor = tags[index].color;

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

  const onDeleteTagHandler = (tagName) => {
    setTags((prevState) => {
      const updatedTags = prevState.filter((tag) => tag.title !== tagName);
      return updatedTags;
    });
  };

  const onSelectedTagHandler = (tagName) => {
    console.log(`Selected Tag: ${tagName}`);
    if (tagName) {
      setSelectedTag(tagName);
    }
  };

  const onSelectedAll = () => {
    console.log("all has been clicked");
    setSelectedTag("All");
  };

  return (
    <Fragment>
      <Header />
      <div className="container">
        <Sidebar
          tags={tags}
          onAddNewTag={onAddNewTag}
          onDeleteTagHandler={onDeleteTagHandler}
          onSelectedTagHandler={onSelectedTagHandler}
          onSelectedAll={onSelectedAll}
        />
        <Content
          onAddNewGoal={onAddNewGoalHandler}
          goals_data={goalsData}
          onDeleteItem={onDeleteGoalHandler}
          tags={tags}
          selectedTag={selectedTag}
        />
      </div>
    </Fragment>
  );
};

export default App;
