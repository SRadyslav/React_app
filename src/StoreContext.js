import React from "react";
const StoreContext = React.createContext(null);

export const Provider = (props) => {
    return (
        <StoreContext.Provider value={props.value} >
            {props.children}
        </StoreContext.Provider>
    )
}


export default StoreContext;