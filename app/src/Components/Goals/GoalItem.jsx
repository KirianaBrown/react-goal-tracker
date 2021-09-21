import "./GoalItem.css";

const GoalItem = (props) => {
  const onClickDeleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={onClickDeleteHandler}>
      {props.children}
    </li>
  );
};

export default GoalItem;
