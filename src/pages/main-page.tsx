import React from "react";
import {ChapterButton} from "../components/public/chapter-button.tsx";

export const MainPage: React.FC = () => {
    return (
        <div>
            <div className={'chapterDiv w-full mx-auto justify-center items-center flex flex-row gap-4'}>
                <ChapterButton> text </ChapterButton>
                <ChapterButton> text </ChapterButton>
                <ChapterButton> text </ChapterButton>
            </div>

        </div>
    )
}