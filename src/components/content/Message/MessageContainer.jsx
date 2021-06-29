import { withAuthRedirect } from 'hoc/withAuthRedirect';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { SendMessageActionCreator, updateTextMessageActionCreator } from '../../../redux/Message-Reducer';
import Message from './Message';




let mapStateToProps = (state) =>{
    return{
        PageMessage: state.PageMessage,
        isAuth: state.authData.loged,
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
let authRedirectComponent = withAuthRedirect(Message);

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent);

export default MessageContainer;