import styled from "styled-components";
import { useState } from "react";

const Form = styled.form`
  display: flex;
  padding: 1rem;
`;

const Input = styled.input`
  border: none;
  background: transparent;
  width: 70%;
  border-bottom: 2px solid #e9ecef;
  outline: none;
  font-size: 0.5rem;
  color: #156015;
  font-style: italic;
  ::placeholder {
    color: #bdbfc0;
  }
`;

const Button = styled.button`
  background: transparent;
  color: #156015;
  border: none;
  padding: 0.5rem 0.75rem;
  font-size: 0.6rem;
  cursor: pointer;
`;

const NewTagForm = (props) => {
  const [newTag, setNewTag] = useState("");

  const setNewTagHandler = (e) => {
    if (
      e.target.value === "" ||
      e.target.value.match(/^[1-9]\d*\.?\d*$/) ||
      e.target.value.trim().length === 0
    ) {
      setNewTag("");
    } else {
      setNewTag(e.target.value);
    }
  };

  const addNewTagHandler = (e) => {
    e.preventDefault();
    props.onAddNewTag(newTag);

    setNewTag("");
  };

  return (
    <Form onSubmit={addNewTagHandler}>
      <Input
        type="text"
        placeholder="New Category"
        onChange={setNewTagHandler}
        value={newTag}
      />
      <Button type="submit">Add</Button>
    </Form>
  );
};

export default NewTagForm;
