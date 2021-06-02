import { connect } from 'react-redux';
import { SendMessageActionCreator, updateTextMessageActionCreator } from '../../../redux/Message-Reducer';
import Message from './Message';

let mapStateToProps = (state) =>{
    return{
        PageMessage: state.PageMessage
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        sendNewMessage: () => {
            dispatch(SendMessageActionCreator());
        },
        changeTextMessage: (text) => {
            dispatch(updateTextMessageActionCreator(text));
        }
    }
}
const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);

export default MessageContainer;