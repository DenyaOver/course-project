import s from './Users.module.css';
import userPhoto from '../../../src/assets/images/unnamed.jpg'

let Users = (props) => {
    
    let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i=1; i<=pagesCount; i++){
        pages.push(i);
    }

return (
    <div>
    <div>
    {pages.map(p => { return(
        <span className={props.currentPage === p && s.selectedPage}
        onClick={(e)=> {props.onPageChanged(p); }}>{p}</span>
        )})}
    </div>
        {
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
}</div>
)
}

export default Users
