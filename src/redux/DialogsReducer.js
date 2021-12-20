const UPDATE_MESSAGE = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-NEW-MESSAGE-BODY';

let initialState = {
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
}

export const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            let body = state.newMessagesBody;
            state.newMessagesBody = '';
            state.messagesData.push({id:4, title: body});
            return state;
        case UPDATE_MESSAGE:
            state.newMessagesBody = action.payload;
            return state;
        default:
            return state;
    }
}

export const sendMessageCreater =() => {
    return{
      type: SEND_MESSAGE
    }
  }
  
export const UpdateNewMessageBodyCreater =(text) => {
    return{
      type: UPDATE_MESSAGE,
      payload: text
    }
  }
