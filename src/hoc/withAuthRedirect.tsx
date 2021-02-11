import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { AppStateType } from "../redux/redux-store";



export function withAuthRedirect<WCP> (WrappedComponent: React.ComponentType<WCP>) {/// WCP --- Wrapped Component Props
    const RedirectComponent: React.FC<MapPropsType & DispatchPropsType> = (props) => {
        let {isAuth, ...restProps} = props
        if(!isAuth) return <Redirect to="/login" />;
        return <WrappedComponent {...restProps as unknown as WCP}  />;
    }
    let mapStateToPropsForRedirect = (state: AppStateType) => ({
        isAuth: state.auth.isAuth,
    })

    
    let ConnectedAuthRedirectComponent = connect<MapPropsType, DispatchPropsType, WCP, AppStateType>(mapStateToPropsForRedirect, {})(RedirectComponent)

    return ConnectedAuthRedirectComponent;
}

type MapPropsType = {isAuth: boolean}
type DispatchPropsType = {}