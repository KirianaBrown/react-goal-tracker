import { AiOutlineAppstoreAdd } from "react-icons/ai";
import styled from "styled-components";

import NewTagForm from "./NewTagForm";
import Tags from "./Tags";

const Button = styled.button`
  border-radius: 10px;
  border: none;
  padding: 1rem;
  display: flex;
  align-items: center;
  background-color: transparent;
  color: slategray;
  cursor: pointer;
`;

const Sidebar = (props) => {
  const sidebarStyle = {
    borderRight: "1px solid #e9ecef",
  };

  const listStyle = {
    listStyleType: "none",
    paddingInlineStart: "1rem",
  };

  const headingStyle = {
    paddingLeft: "1rem",
    paddingBottom: "1rem",
    color: "#9e9fa0",
    borderBottom: "1px solid #d6d7da",
  };

  const actionsStyle = {
    borderTop: "1px solid #d6d7da",
    borderBottom: "1px solid #d6d7da",
  };

  return (
    <aside style={sidebarStyle}>
      <h6 style={headingStyle}>Categories</h6>
      <ul style={listStyle}>
        {props.tags.map((tag) => (
          <Tags key={tag.id} title={tag.title} color={tag.color} />
        ))}
      </ul>
      <div style={actionsStyle}>
        <Button type="text">
          <AiOutlineAppstoreAdd /> New Category
        </Button>
        <NewTagForm />
      </div>
    </aside>
  );
};

export default Sidebar;
