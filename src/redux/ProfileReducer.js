const UPDATE = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
  postData: [
    {id:1, title: "Hi how are you", LikeCount: 10},
    {id:2, title: "It's my first time", LikeCount: 5}],
newPostText: 'it-kamasutra'
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: 
          let newPost = {
            id: 5,
            title: state.newPostText,
            LikeCount: 0
          };
          return( {
            ...state,
            postData: [...state.postData, newPost],
            newPostText: ''
          })
        case UPDATE:
          return( {
            ...state,
            newPostText: action.newText})
        default:
          return state;
        
    }
}

export const addPostActionCreater =() => {
    return{
      type: ADD_POST
    }
  }
  
export const UpdateNewPostTextActionCreater =(text) => {
    return{
      type: UPDATE,
      newText: text
    }
  }
