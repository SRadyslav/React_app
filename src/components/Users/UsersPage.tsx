import React from "react";
import { useSelector } from "react-redux";
import { getIsFetching } from "../../redux/users-selectors";
import Preloader from "../Common/Preloader/Preloader";
import { Users } from "./Users";


type PropsType = {
    pageTitle: string
}

//### todo: Add HOC withRedirect for UsersPage

export const UsersPage: React.FC<PropsType> = (props) => {
    const isFetching = useSelector(getIsFetching)

    return (<>
    <h2>{props.pageTitle}</h2>
        {isFetching ? <Preloader /> : null}
        <Users />
    </>
    )
}
