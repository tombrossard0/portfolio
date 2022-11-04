import React from "react";
import Little_box from './little_box'
import project_img from "../images/img_project.png"


const Project_card = (props) => {
    return (
        <div className="border-[#6a3aaa] border-[1.5px] rounded-2xl shadow-xl inline-flex max-w-sm h-[30em] p-8">
            <div className="">
                <p className="font-bold text-[2em] pb-3">Project #1</p>
                <p className="">Application of Tom. Developed with React. My first project and my first test with ReactJs.</p>
                <div className="flex space-x-4 pt-11 pb-6">
                    <Little_box text="ReactJs"/>
                    <Little_box text="Online"/>
                </div>
                <img class="rounded-xl" src={project_img}/>
            </div>
        </div>
    )
}

export default Project_card;