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

const All = styled.button`
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  color: hsl(120, 23%, 41%);
  font-size: 0.6rem;
  margin-left: -0.3rem;
`;

const Sidebar = (props) => {
  const onAddNewTagHandler = (tag) => {
    if (tag.length > 0) {
      props.onAddNewTag(tag);
    }
  };

  const onSelectedAllHandler = () => {
    props.onSelectedAll();
  };

  return (
    <Aside>
      <Heading>Categories</Heading>
      <List>
        <All onClick={onSelectedAllHandler}>All</All>
        {props.tags.map((tag) => (
          <Tags
            key={tag.id}
            title={tag.title}
            color={tag.color}
            onDeleteTagHandler={props.onDeleteTagHandler}
            onSelectedTagHandler={props.onSelectedTagHandler}
          />
        ))}
      </List>
      <NewTagForm onAddNewTag={onAddNewTagHandler} />
    </Aside>
  );
};

export default Sidebar;
