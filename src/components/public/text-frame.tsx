import React from 'react';
import './text-frame-styles.css'

interface TextFrameProps {
    className?: string;
    title?: string;
    text?: string;
    width?: number;
    height?: number;
    textLeftMargin?: number;
    children?: React.ReactNode;
}

export const TextFrame: React.FC<TextFrameProps> = ({title, text, width = 300, height = 400, children}) => {
    return (
        <div className="">
            <div
                style={{width: `${width}px`, height: `${height}px`}}
                className="textFrame flex flex-col gap-2"

            >
                <span className={'frame-title text-center text-3xl'}>{title}</span>
                <div className={'w-full bg-[#ab52ae] h-[1px]'}></div>
                <span className={'maintext mx-auto flex text-sm justify-center items-center text-left'}>{text}</span>
                {children}







            </div>
        </div>
    );
};
