import s from './Dialogs.module.css'
import { UpdateNewMessageBodyCreater, sendMessageCreater } from '../../redux/DialogsReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        DialogsPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body)=> {dispatch(UpdateNewMessageBodyCreater(body));},
        SendMessage: ()=> {dispatch(sendMessageCreater());}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer