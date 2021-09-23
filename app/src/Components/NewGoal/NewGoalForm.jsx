import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  padding: 0.5rem;
  align-items: center;
`;

const Select = styled.select`
  padding: 0.5rem;
  width: 60%;
  border: none;
  border-radius: 10px;
  margin-left: 1rem;
  outline: none;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 10px;
  outline: none;
  border: none;
  width: 40%;
  cursor: pointer;
  background-color: rgb(21, 96, 61);
  color: #e9ecef;
`;

const Input = styled.input`
  width: 90%;
  padding: 0.5rem;
  border-radius: 5px;
  outline: none;
  border: 1px solid ${(props) => (props.inValid ? "red" : "transparent")};
  &:focus {
    outline: none;
  }
`;

const Div = styled.div`
  width: 100%;
`;

const NewGoalForm = (props) => {
  const [newGoal, setNewGoal] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [newTag, setNewTag] = useState("Home");

  const onInputChangeHandler = (e) => {
    // setNewGoal(e.target.value);
    if (
      e.target.value === "" ||
      e.target.value.match(/^[1-9]\d*\.?\d*$/) ||
      e.target.value.trim().length === 0
    ) {
      setNewGoal("");
      setIsValid(false);
    } else {
      setNewGoal(e.target.value);
      setIsValid(true);
    }
  };

  const onSelectChangeHandler = (e) => {
    setNewTag(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (newGoal.length > 0) {
      const newGoalItem = {
        title: newGoal,
        tag: newTag,
      };
      props.onGetNewGoal(newGoalItem);
      setNewGoal("");
    }
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <Div>
        <Input
          type="text"
          onChange={onInputChangeHandler}
          value={newGoal}
          placeholder="Your goal"
          inValid={!isValid}
        />
      </Div>
      <Div>
        <Select onChange={onSelectChangeHandler}>
          {props.tags.map((tag) => (
            <option key={tag.id}>{tag.title}</option>
          ))}
        </Select>
      </Div>
      <Button type="submit">Add Goal</Button>
    </Form>
  );
};

export default NewGoalForm;
