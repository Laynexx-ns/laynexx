import React from "react";
import {ChapterButton} from "../components/public/chapter-button.tsx";
import "./main-page-styles.css"
import {SnowDiv} from "../components/snow/snow-divs.tsx";
import {Link} from "react-router-dom";

export const MainPage: React.FC = () => {
    return (
        <div className='w-full h-full  '>

            <div className={'w-full '}>
                <div className='decorationDiv w-full rounded-2xl border-white'>
                    <span className={"text-center"}>LAYNEXX</span>
                </div>
            </div>
            <div className={'chapterDiv  mt-10 w-full mx-auto justify-center items-center flex flex-row gap-6'}>
                <Link to={"/about-me"}>
                    <ChapterButton color={"rgba(54,54,84,0.72)"}> Обо мне </ChapterButton>
                </Link>

                <ChapterButton color={"rgba(218,152,61,0.29)"}> Проекты </ChapterButton>
                <ChapterButton color={"rgba(188,188,188,0.35)"}> text </ChapterButton>
            </div>
            <SnowDiv />

        </div>
    )
}