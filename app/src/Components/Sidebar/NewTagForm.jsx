import styled from "styled-components";

const Form = styled.form`
  display: flex;
  padding: 1rem;
`;

const Input = styled.input`
  border: #e9ecef 1px solid;
  background-color: #e9ecef;
  width: 70%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 0.25rem;
  padding-left: 0.5rem;
  outline: none;
  font-size: 0.6rem;
  color: #156015;
`;

const Button = styled.button`
  background-color: #e9ecef;
  color: #156015;
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 0.5rem 0.75rem;
  font-size: 0.6rem;
  cursor: pointer;
  border-left: 1px solid rgba(21, 96, 21, 0.445);
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
