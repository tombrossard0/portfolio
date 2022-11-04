import React from "react";
import Little_box from './little_box'
import Project_card from './project_card'
import Project_recent_card from './project_recent_card'


const Projects = (props) => {
    return (
        <div className="bg-[#090E16] p-4 text-white py-16 text-left pl-[20%] pr-[20%]">
            <Little_box text="🔗 My projects"/>

            <p className="text-[#c6c6c6] text-[3.5em] font-bold pt-3">Last Projects</p>
            <p className="text-[#a2a2a2] text-[1.5em] pt-3">My most recents projects I worked on...</p>
            <div className="Table_of_Projects py-16 grid grid-cols-3 gap-10 pb-[10em]">
                <Project_recent_card/>
                <Project_recent_card/>
                <Project_recent_card/>
            </div>

            <p className="text-[#c6c6c6] text-[3.5em] font-bold pt-3">Table of Projects</p>
            <p className="text-[#a2a2a2] text-[1.5em] pt-3">All of my best projects...</p>
            <div className="Table_of_Projects py-16 grid grid-cols-4 gap-10">
                <Project_card/>
                <Project_card/>
                <Project_card/>
                <Project_card/>
                <Project_card/>
                <Project_card/>
                <Project_card/>
            </div>
        </div>
    )
}

export default Projects;