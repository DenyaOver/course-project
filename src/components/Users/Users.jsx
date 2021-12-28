import s from './Users.module.css';
import * as axios from 'axios'
import userPhoto from '../../../src/assets/images/unnamed.jpg'
import React from 'react';

class Users extends React.Component {   
    
    constructor (props){
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
            this.props.setUsers(response.data.items)
            });
    }

    render() {
        return (
        this.props.users.map(u => <div key = {u.id} className={s.main}>
                <span> 
                    <div className={s}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt= "icon" />
                    </div>
                    <div>
                        {u.followed? <button onClick={()=> {this.props.unfollow(u.id)}} >Unfollow</button> : <button onClick={()=> {this.props.follow(u.id)}} >Follow</button>}
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
        );
    }
}

export default Users