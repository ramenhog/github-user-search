import React from "react";
import { Field, reduxForm } from "redux-form";
import "./SearchForm.scss";

let SearchForm = props => {
  const { handleSubmit } = props;
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <Field
        name="search"
        type="text"
        component="input"
        className="search-form__text"
        placeholder="Search by username"
      />
      <button
        type="submit"
        className={`button search-form__submit ${
          props.isButtonHidden ? "visually-hidden" : ""
        }`}
      >
        Submit
      </button>
    </form>
  );
};

SearchForm = reduxForm({
  form: "search"
})(SearchForm);

export default SearchForm;
