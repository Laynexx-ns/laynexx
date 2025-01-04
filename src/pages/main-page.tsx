import React from "react";
import "./main-page-styles.css"
import {SnowDiv} from "../components/snow/snow-divs.tsx";

import ds from "../assets/smicons/discord.svg"
import tg from "../assets/smicons/tg.svg"
import gh from "../assets/smicons/gh.svg"
import {TextFrame} from "../components/public/text-frame.tsx";
import gif1 from "../assets/gifs/kohaku-tsukihime.gif"
import astolfo from "../assets/gifs/astolfo.gif"

export const MainPage: React.FC = () => {
    return (
        <div className={'w-full h-full'}>




            <div className={'w-full h-full z-10'}>
                <div className={'w-full items-center justify-center'}>
                    <div className='decorationDiv w-full  rounded-2xl border-white'>
                        <span className={"text-center"}>LAYNEXX</span>

                    </div>

                </div>
                <div className={'chapterDiv  mt-10 w-full mx-auto justify-center items-center flex flex-row gap-6'}>
                    <TextFrame height={300} title={'ABOUT ME'}
                               text={'i\'m frontend&backend junior programmer from Russia. Love physic and math (but now i a little burn out). Interested in modern web-design, games, japan culture, anime. Learning TypeScript and GO'}

                    >
                        <div className={'w-full flex flex-row justify-between'}>
                            <img className={'flex justify-center size-20 z-0 '} src={gif1} alt={'qwe'}/>
                            <img className={'flex justify-center size-20 z-0 '} src={astolfo} alt={'qwe'}/>
                        </div>


                    </TextFrame>

                </div>


                <div className={'mt-4 w-full flex justify-center'}>
                    <TextFrame height={150} title={'STACK'}>
                        <div className={'w-full mx-auto justify-center flex flex-row gap-6'}>
                            <button><img src={gh} alt={'gh'}/></button>
                            <button><img src={tg} alt={'tg'}/></button>
                            <button><img src={ds} alt={'ds'}/></button>
                        </div>
                    </TextFrame>

                </div>
                <div className={'mt-4 w-full flex justify-center'}>
                    <TextFrame height={150} title={'SOCIALS'}>
                        <div className={'w-full mx-auto justify-center flex flex-row gap-6'}>
                            <button><img src={gh} alt={'gh'}/></button>
                            <button><img src={tg} alt={'tg'}/></button>
                            <button><img src={ds} alt={'ds'}/></button>
                        </div>
                    </TextFrame>

                </div>


                <SnowDiv/>


            </div>
        </div>
    )
}