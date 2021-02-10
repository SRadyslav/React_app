import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';




let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessageActionCreator: (newMessageText) => {
            dispatch(actions.sendMessageActionCreator(newMessageText));
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);;