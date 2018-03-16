import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../state/actions/profile";
import { searchRequested } from "../../state/actions/search";
import UserProfile from "./UserProfile";

const mapStateToProps = state => {
  const { profile } = state;
  return {
    profile
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ ...actions, searchRequested }, dispatch);
};

const UserProfileContainer = connect(mapStateToProps, mapDispatchToProps)(
  UserProfile
);

export default UserProfileContainer;
