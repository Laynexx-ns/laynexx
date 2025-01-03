import React from "react";
import "./chapter-button-styles.css";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    color: string;
}

export const ChapterButton: React.FC<CardProps> = ({ children, className, onClick, color}) => {
    return (
        <button
            className={`${className} card rounded-xl text-[30px] transition-all duration-300 hover:text-[48px]`}

            onClick={onClick}
            style={{"--chapter-radial" : color,} as React.CSSProperties}
        >
            {children}
        </button>

    );
};
