const Tags = (props) => {
  const tagStyle = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  };

  const listStyle = {
    backgroundColor: `${props.color}`,
    opacity: ".8",
    height: ".5rem",
    width: ".5rem",
    borderRadius: "50%",
  };

  const titleStyle = {
    // color: "salmon",
    color: "#9e9fa0",
    fontSize: ".6rem",
    marginLeft: ".5rem",
  };

  return (
    <li className="tag-item" style={tagStyle}>
      <div className="tag-item-dot" style={listStyle}></div>
      <p className="tag-item-title" style={titleStyle}>
        {props.title}
      </p>
    </li>
  );
};

export default Tags;
