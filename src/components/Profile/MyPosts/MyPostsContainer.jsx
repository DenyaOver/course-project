import post from "./Myposts.module.css";
import React from "react";
import {
  addPostActionCreater,
  UpdateNewPostTextActionCreater,
} from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
          let state = store.getState();

          let addpost = () => {
            store.dispatch(addPostActionCreater());
          };
        
          let onPostChange = (text) => {
            store.dispatch(UpdateNewPostTextActionCreater(text));
          };
        return <MyPosts
          updateNewPostText={onPostChange}
          addPost={addpost}
          postData={state.profilePage.postData}
          newPostText={state.profilePage.newPostText}
        />;
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
