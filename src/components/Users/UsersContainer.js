import { followAC, unfollowAC,setUsersAC } from '../../redux/UsersReducer';
import Users from './Users';
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {dispatch(followAC(id))},
        unfollow: (id) => {dispatch(unfollowAC(id))},
        setUsers: (users) => {dispatch(setUsersAC(users))}
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer