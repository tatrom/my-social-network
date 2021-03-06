import React, {ComponentType} from "react";
import {Preloader} from "../Components/common/Preloader/Preloader";

export function withSuspense(Component: ComponentType) {
    return (props: any) => {
        return  <React.Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </React.Suspense>
    }
}