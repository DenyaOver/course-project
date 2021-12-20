import post from "./Myposts.module.css";
import Post from "./Post/Post";
import React from 'react';
import {addPostActionCreater, UpdateNewPostTextActionCreater} from '../../../redux/ProfileReducer'

const MyPosts = (props) => {

  let postsElements = props.postData.map((p)=> <Post message={p.title} LikeCount = {p.LikeCount} />)

  let newPostElement = React.createRef();

  let addpost = () => {
    props.dispatch(addPostActionCreater());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(UpdateNewPostTextActionCreater(text));

  }

  return (
    <div>
      Myposts
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        <button onClick={addpost}>Add Post</button></div>
      <div>
        {postsElements}
      </div>
    </div>
  );
};
export default MyPosts;
