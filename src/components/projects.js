import React from "react";
import Little_box from './little_box'


const Projects = (props) => {
    return (
        <div className="bg-[#090E16] p-4 text-white py-16">
            <Little_box text="🔗 My projects"/>
            <p className="text-[#c6c6c6] text-[2em]">Table of Projects</p>
            <p className="text-[#c6c6c6] text-[2em]">Last Projects</p>
        </div>
    )
}

export default Projects;