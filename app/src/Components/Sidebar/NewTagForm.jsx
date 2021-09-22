import styled from "styled-components";

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
  return (
    <Form>
      <Input type="text" placeholder="New Category" />
      <Button type="submit">Add</Button>
    </Form>
  );
};

export default NewTagForm;
