import React from "react";
import Little_box from './little_box'
import project_img from "../images/img_project.png"


const Project_recent_card = (props) => {
    return (
        <div className="border-[#6a3aaa] border-[1.5px] rounded-2xl shadow-xl inline-flex max-w-xl h-[26em] p-8">
            <div className="">
                <img class="rounded-xl" src={project_img}/>

                <div className="flex pt-5 pb-5 justify-between">
                    <p className="font-bold text-[1.5em]">Project #1</p>
                    <div className="space-x-4">
                        <Little_box text="ReactJs"/>
                        <Little_box text="Online"/>
                    </div>
                </div>
                <div className="flex justify-between">
                    <p className="text-[#7f7f7f] text-[1.2em]">Quick description</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#00FE81" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>                    
                </div>
            </div>
        </div>
    )
}

export default Project_recent_card;