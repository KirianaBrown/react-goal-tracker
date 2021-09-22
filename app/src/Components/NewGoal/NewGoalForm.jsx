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
  border: transparent;
`;

const Div = styled.div`
  width: 100%;
`;

const NewGoalForm = (props) => {
  const [newGoal, setNewGoal] = useState("");

  const onInputChangeHandler = (e) => {
    setNewGoal(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (newGoal.length > 0) {
      props.onGetNewGoal(newGoal);
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
        />
      </Div>
      <Div>
        <Select>
          <option>Home</option>
          <option>Home</option>
          <option>Home</option>
          <option>Home</option>
        </Select>
      </Div>
      <Button type="submit">Add Goal</Button>
    </Form>
  );
};

export default NewGoalForm;
