import GoalItem from "./GoalItem";
import "./Goals.css";

const Goals = (props) => {
  const deleteItem = (id) => {
    props.onDeleteItem(id);
  };

  return (
    <ul>
      {props.goals_data.map((el) => (
        <GoalItem key={el.id} id={el.id} onDelete={deleteItem}>
          {el.description}
        </GoalItem>
      ))}
    </ul>
  );
};

export default Goals;
