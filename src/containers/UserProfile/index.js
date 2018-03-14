import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../state/actions/user";
import UserProfile from "./UserProfile";

const mapStateToProps = state => {
  const { user } = state;
  return {
    user
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

const UserProfileContainer = connect(mapStateToProps, mapDispatchToProps)(
  UserProfile
);

export default UserProfileContainer;
