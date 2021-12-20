import MyPosts from './MyPosts/MyPosts';
import content from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
    <div>
      <ProfileInfo />
        <MyPosts postData = {props.state.postData}
                 newPostText = {props.state.newPostText}
                 dispatch = {props.dispatch} />
    </div>
    );
}
  
export default Profile