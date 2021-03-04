import React from "react";
import {RootStateType} from "./Redux/redux-store";

const StoreContext = React.createContext({} as RootStateType)

type ProviderType = {
    store: RootStateType
    children: React.ReactNode
}
export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContext