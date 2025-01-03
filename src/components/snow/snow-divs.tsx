import "./snow-style.scss"
import React from "react";

export const SnowDiv = ({children}: {children?: React.ReactNode}) =>{
    return (
        <div className={'snow'}>
            {children}
        </div>
    )
}