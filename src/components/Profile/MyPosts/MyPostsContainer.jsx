import post from "./Myposts.module.css";
import {
  addPostActionCreater,
  UpdateNewPostTextActionCreater,
} from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text)=> {dispatch(UpdateNewPostTextActionCreater(text));},
    addPost: ()=> {dispatch(addPostActionCreater());}
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);


export default MyPostsContainer;
