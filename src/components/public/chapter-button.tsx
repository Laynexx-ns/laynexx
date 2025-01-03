import React from "react";
import "./chapter-button-styles.css";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    color: string;
}

export const ChapterButton: React.FC<CardProps> = ({ children, className, onClick }) => {
    return (
        <button
            className={`card ${className} `}
            onClick={onClick}
            style={{cursor: "pointer"}}
        >
            {children}
        </button>
    );
};
