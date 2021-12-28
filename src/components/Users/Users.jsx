import s from './Users.module.css';
import * as axios from 'axios'
import userPhoto from '../../../src/assets/images/unnamed.jpg'

let Users = (props) => {
    if (props.users.length === 0){
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)
        })}
    return(
        props.users.map(u => <div key = {u.id} className={s.main}>
                <span> 
                    <div className={s}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt= "icon" />
                    </div>
                    <div>
                        {u.followed? <button onClick={()=> {props.unfollow(u.id)}} >Unfollow</button> : <button onClick={()=> {props.follow(u.id)}} >Follow</button>}
                    </div>
                </span>
                <span className={s.title}>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.Location.country"}</div>
                        <div>{"u.Location.city"}</div>
                    </span>
                </span>
            </div>)
    )
}

export default Users