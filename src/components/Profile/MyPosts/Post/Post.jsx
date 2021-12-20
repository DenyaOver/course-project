import post from './Post.module.css';


const Post = (props) => {
    return (<div>
          <div>
            {props.message}
          </div>
          <div>
            <span>Like: {props.LikeCount}</span>
            </div>
            </div>
    );
}
export default Post