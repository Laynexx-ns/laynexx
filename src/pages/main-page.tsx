import React from "react";
import {ChapterButton} from "../components/public/chapter-button.tsx";

export const MainPage: React.FC = () => {
    return (
        <div className='w-full h-full'>
            <div className={'chapterDiv w-full mx-auto justify-center items-center flex flex-row gap-4'}>
                <ChapterButton color={"rgba(54,54,84,0.72)"}> Обо мне </ChapterButton>
                <ChapterButton color={"rgba(218,152,61,0.29)"}> Проекты </ChapterButton>
                <ChapterButton color={"rgba(188,188,188,0.35)"}> text </ChapterButton>
            </div>

        </div>
    )
}