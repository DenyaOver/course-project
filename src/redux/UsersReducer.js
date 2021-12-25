const FOLLOW = 'FOLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'

let initialState = {
  users: [
    // {id:1, photoUsers: 'https://yt3.ggpht.com/ytc/AKedOLRuW1jBQSK07y8tRlZsfUid2Hkz_Qpi6TnD5tQ7=s900-c-k-c0x00ffffff-no-rj',
    //  followed: false, fullName: "Deiana", status: "Hi how are you", Location: {city: 'Minsk', country: 'Belarus'}},
    // {id:3, photoUsers: 'https://yt3.ggpht.com/ytc/AKedOLRuW1jBQSK07y8tRlZsfUid2Hkz_Qpi6TnD5tQ7=s900-c-k-c0x00ffffff-no-rj',
    //  followed: false, fullName: "Dima", status: "Hi how are you", Location: {city: 'Minsk', country: 'Belarus'}},
    // {id:2, photoUsers: 'https://yt3.ggpht.com/ytc/AKedOLRuW1jBQSK07y8tRlZsfUid2Hkz_Qpi6TnD5tQ7=s900-c-k-c0x00ffffff-no-rj',
    //  followed: false, fullName: "Max", status: "Hi how are you", Location: {city: 'Minsk', country: 'Belarus'}},
    // {id:4, photoUsers: 'https://yt3.ggpht.com/ytc/AKedOLRuW1jBQSK07y8tRlZsfUid2Hkz_Qpi6TnD5tQ7=s900-c-k-c0x00ffffff-no-rj',
    //  followed: false, fullName: "Andrei", status: "Hi how are you", Location: {city: 'Minsk', country: 'Belarus'}},
    // {id:5, photoUsers: 'https://yt3.ggpht.com/ytc/AKedOLRuW1jBQSK07y8tRlZsfUid2Hkz_Qpi6TnD5tQ7=s900-c-k-c0x00ffffff-no-rj',
    //  followed: true, fullName: "Batu", status: "Hi how are you", Location: {city: 'Minsk', country: 'Belarus'}},
    ]
}

export const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return ({...state, 
                    users: state.users.map( u => {
                        if (u.id === action.userId){
                            return {...u, followed: true}
                        }
                        return u
                    })})
        case UNFOLLOW:
            return ({...state, 
                users: state.users.map( u => {
                    if (u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u
                })})
        case SET_USERS:
            return {...state, users: [...action.users]}
        default:
          return state;       
    }
}

export const followAC =(userId) => {
    return{
      type: FOLLOW, userId
    }
  }
  
export const unfollowAC =(userId) => {
    return{
      type: UNFOLLOW, userId
    }
  }

export const setUsersAC =(users) => {
    return{
      type: SET_USERS, users
    }
}