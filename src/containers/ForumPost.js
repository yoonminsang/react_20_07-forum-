import ForumPost from "../routes/ForumPost";
import { connect } from "react-redux";
function mapStateToProps(state) {
  if (state.user !== null) {
    return { user_id: state.user.id, displayName: state.user.displayName };
  }
  return { user_id: null };
}
export default connect(mapStateToProps, null)(ForumPost);
