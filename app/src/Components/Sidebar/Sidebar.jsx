import styled from "styled-components";

import NewTagForm from "./NewTagForm";
import Tags from "./Tags";

const Aside = styled.aside`
  padding-left: 1rem;
  padding-bottom: 1rem;
  color: #9e9fa0;
  border-bottom: 1px solid #d6d7da;
  border-right: 1px solid #d6d7da;
`;

const Heading = styled.h6`
  padding-left: 1rem;
  padding-bottom: 1rem;
  color: #9e9fa0;
  border-bottom: 1px solid #d6d7da;
`;

const List = styled.ul`
  list-style-type: none;
  padding-inline-start: 1rem;
`;

const Sidebar = (props) => {
  const onAddNewTagHandler = (tag) => {
    if (tag.length > 0) {
      props.onAddNewTag(tag);
    }
  };

  return (
    <Aside>
      <Heading>Categories</Heading>
      <List>
        {props.tags.map((tag) => (
          <Tags
            key={tag.id}
            title={tag.title}
            color={tag.color}
            onDeleteTagHandler={props.onDeleteTagHandler}
          />
        ))}
      </List>
      <NewTagForm onAddNewTag={onAddNewTagHandler} />
    </Aside>
  );
};

export default Sidebar;
