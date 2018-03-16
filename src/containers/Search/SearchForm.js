import React from "react";
import { Field, reduxForm } from "redux-form";

let SearchForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name="search" type="text" component="input" />
      <button type="submit">Submit</button>
    </form>
  );
};

SearchForm = reduxForm({
  form: "search"
})(SearchForm);

export default SearchForm;
