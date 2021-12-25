import s from './Users.module.css';

let Users = (props) => {
    if (props.users.length === 0){
    props.setUsers(
        [
            {id:1, photoUsers: 'https://yt3.ggpht.com/ytc/AKedOLRuW1jBQSK07y8tRlZsfUid2Hkz_Qpi6TnD5tQ7=s900-c-k-c0x00ffffff-no-rj',
            followed: false, fullName: "Diana", status: "Hi how are you", Location: {city: 'Minsk', country: 'Belarus'}},
            {id:2, photoUsers: 'https://yt3.ggpht.com/ytc/AKedOLRuW1jBQSK07y8tRlZsfUid2Hkz_Qpi6TnD5tQ7=s900-c-k-c0x00ffffff-no-rj',
            followed: false, fullName: "Diana", status: "Hi how are you", Location: {city: 'Minsk', country: 'Russia'}}]
    )}
    return(
        props.users.map(u => <div key = {u.id} className={s.main}>
                <span> 
                    <div className={s}>
                        <img src={u.photoUsers} />
                    </div>
                    <div>
                        {u.followed? <button onClick={()=> {props.unfollow(u.id)}} >Unfollow</button> : <button onClick={()=> {props.follow(u.id)}} >Follow</button>}
                    </div>
                </span>
                <span className={s.title}>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.Location.country}</div>
                        <div>{u.Location.city}</div>
                    </span>
                </span>
            </div>)
    )
}

export default Users