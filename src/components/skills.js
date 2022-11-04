import React from "react";
import Little_box from './little_box'


const Skills = (props) => {
    return (
        <div className="bg-[#090E16] p-4 text-white py-16 text-left pl-[20%]">
            <Little_box text="🧑‍💻 Skills · Experience"/>
            <p className="text-[#c6c6c6] text-[3.5em] font-bold pt-3">Knowledge</p>
            <p className="text-[#a2a2a2] text-[1.5em] pt-3">Some of my Knowledge...</p>
        </div>
    )
}

export default Skills;