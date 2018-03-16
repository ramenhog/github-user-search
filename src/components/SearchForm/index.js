import React from "react";
import { Field, reduxForm } from "redux-form";
import "./SearchForm.scss";

let SearchForm = props => {
  return (
    <form className="search-form" onSubmit={props.handleSubmit}>
      <Field
        name="search"
        type="text"
        component="input"
        className="search-form__text"
        placeholder="Search by username"
      />
      <button type="submit" className="search-form__submit">
        Submit
      </button>
    </form>
  );
};

SearchForm = reduxForm({
  form: "search"
})(SearchForm);

export default SearchForm;
