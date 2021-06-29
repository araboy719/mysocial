import { withAuthRedirect } from 'hoc/withAuthRedirect';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { SendMessageActionCreator, updateTextMessageActionCreator } from '../../../redux/Message-Reducer';
import Message from './Message';




let mapStateToProps = (state) => {
    return {
        PageMessage: state.PageMessage,
        isAuth: state.authData.loged,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendNewMessage: () => {
            dispatch(SendMessageActionCreator());
        },
        changeTextMessage: (text) => {
            dispatch(updateTextMessageActionCreator(text));
        }
    }
}



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Message);