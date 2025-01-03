import React from "react";
import {ChapterButton} from "../components/public/chapter-button.tsx";
import "./main-page-styles.css"
import {SnowDiv} from "../components/snow/snow-divs.tsx";

export const MainPage: React.FC = () => {
    return (
        <div className='w-full h-full p-8'>
            <SnowDiv />
            <div className={'w-full  justify-center content-center'}>
                <div className='decorationDiv w-full rounded-2xl border-white'>
                    <span className={"justify-center text-center"}>LAYNEXX</span>
                </div>
            </div>
            <div className={'chapterDiv  mt-10 w-full mx-auto justify-center items-center flex flex-row gap-6'}>
                <ChapterButton color={"rgba(54,54,84,0.72)"}> Обо мне </ChapterButton>
                <ChapterButton color={"rgba(218,152,61,0.29)"}> Проекты </ChapterButton>
                <ChapterButton color={"rgba(188,188,188,0.35)"}> text </ChapterButton>
            </div>

        </div>
    )
}