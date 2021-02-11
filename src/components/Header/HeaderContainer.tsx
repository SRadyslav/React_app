import React from 'react';
import Header, { PropsType } from './Header';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth-reducer';
import { AppStateType } from '../../redux/redux-store';

class HeaderContainer extends React.Component<PropsType> {
    render(){
    return (
        <Header {...this.props} />
    );
    }
}

let mapStateToProps = (state: AppStateType) =>({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps,{logout}) (HeaderContainer);