import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../state/actions/search";
import SearchResults from "./SearchResults";

const mapStateToProps = state => {
  const { search } = state;
  return {
    search
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

const SearchResultsContainer = connect(mapStateToProps, mapDispatchToProps)(
  SearchResults
);

export default SearchResultsContainer;
