import NewGoal from "./NewGoal/NewGoal";
import Goals from "./Goals/Goals";
import Wrapper from "./Ui/Wrapper";
import ContentHeading from "./ContentHeading";

const Content = (props) => {
  return (
    <Wrapper>
      <ContentHeading />
      <NewGoal onAddNewGoal={props.onAddNewGoal} />
      <Goals goals_data={props.goals_data} onDeleteItem={props.onDeleteItem} />
    </Wrapper>
  );
};

export default Content;
