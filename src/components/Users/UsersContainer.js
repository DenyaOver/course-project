import { followAC, unfollowAC,setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from '../../redux/UsersReducer';
import Users from './Users';
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {dispatch(followAC(id))},
        unfollow: (id) => {dispatch(unfollowAC(id))},
        setUsers: (users) => {dispatch(setUsersAC(users))},
        setCurrentPage: (currentPage) => {dispatch(setCurrentPageAC(currentPage))},
        setTotalUsersCount: (TotalCount) => {dispatch(setTotalUsersCountAC(TotalCount))}
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer