import React from "react";
import {TextFrame} from "../components/public/text-frame";
import {SnowDiv} from "../components/snow/snow-divs";



export const AboutMePage = () => {
    return(
        <div className="w-full flex flex-row  h-full justify-between">


            <div className={'w-full p-4 '}>
                <div className="mx-auto flex flex-col gap-4  justify-center w-full">
                    <div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start'}}
                         className={'flex flex-col gap-4'}
                    >
                        <TextFrame text={'i\'m frontend&backend junior programmer from Russia. Love physic and math (but now i a little burn out). Interested in modern web-design, games.'}  title={'Who i am?'}/>
                        <TextFrame>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt={"qwe"}/>

                        </TextFrame>
                    </div>



                </div>
                <SnowDiv/>


            </div>
        </div>


    )
}
