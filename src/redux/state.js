import { dialogsReducer } from "./DialogsReducer";
import { profileReducer } from "./ProfileReducer";

let store = {

     _state: {
        profilePage: {
            postData: [
                {id:1, title: "Hi how are you", LikeCount: 10},
                {id:2, title: "It's my first time", LikeCount: 5}],
            newPostText: 'it-kamasutra'
        },
        messagesPage: {
            messagesData: [
                {id:1, title: "Hi"},
                {id:2, title: "How are you"},
                {id:3, title: "Fuck you"}],
            dialogData: [
                {id: 1, name: "Drey"},
                {id: 2, name: "Dima"},
                {id: 3, name: "Maks"},
                {id: 4, name: "Valery"}],
            newMessagesBody: ""
        },
        sidebar: {
            
        }
      },
    getState(){
          return this._state;
    },
    _callsubscriber() {
    },

    subscribe(observer) {
        this._callsubscriber = observer;
    },
    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)

        this._callsubscriber(this._state);
    }    
}

export default store