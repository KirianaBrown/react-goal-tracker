import NewGoal from "./NewGoal/NewGoal";
import Goals from "./Goals/Goals";
import Wrapper from "./Ui/Wrapper";
import ContentHeading from "./ContentHeading";

const Content = (props) => {
  let filtered;

  if (props.selectedTag === "All" || props.selectedTag === "") {
    filtered = props.goals_data;
  } else {
    filtered = props.goals_data.filter(
      (goal) => goal.tag === props.selectedTag
    );
  }

  return (
    <Wrapper>
      <ContentHeading />
      <NewGoal onAddNewGoal={props.onAddNewGoal} tags={props.tags} />
      <Goals goals_data={filtered} onDeleteItem={props.onDeleteItem} />
    </Wrapper>
  );
};

export default Content;
