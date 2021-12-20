import post from "./Myposts.module.css";
import Post from "./Post/Post";
import React from 'react';
import {addPostActionCreater, UpdateNewPostTextActionCreater} from '../../../redux/ProfileReducer'
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  
  let state = props.store.getState();


  let addpost = () => {
    props.store.dispatch(addPostActionCreater());
  }

  let onPostChange = (text) => {
    props.store.dispatch(UpdateNewPostTextActionCreater(text));
  }

  return (<MyPosts updateNewPostText = {onPostChange} 
                   addPost = {addpost} 
                   postData = {state.profilePage.postData}
                   newPostText = {state.profilePage.newPostText} />)
};
export default MyPostsContainer;
