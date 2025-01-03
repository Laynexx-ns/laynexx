import React from "react";
import "./chapter-button-styles.css";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export const ChapterButton: React.FC<CardProps> = ({ children, className, onClick }) => {
    return (
        <button
            className={`${className} card rounded-xl text-xl transition-all duration-800 hover:text-3xl `}
            onClick={onClick}
        >
            {children}
        </button>

    );
};
