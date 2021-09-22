import "./NewTagForm.css";

const NewTagForm = (props) => {
  return (
    <form className="newTagForm">
      <input
        type="text"
        className="form-input_category"
        placeholder="New Category"
      />
      <button type="submit" className="btn-add_category">
        Add
      </button>
    </form>
  );
};

export default NewTagForm;
