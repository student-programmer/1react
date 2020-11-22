import React from "react";
const StoreContext = React.createContext('light');

export const Provider = (props) =>{
    return <StoreContext.Provider value = {props.store}>
        {props.children}
    </StoreContext.Provider>
}
export default StoreContext;