import React from "react";
import Little_box from './little_box'


const Experience = (props) => {
    return (
        <div className="bg-[#090E16] p-4 text-white py-16 text-left pl-[20%]">
            <Little_box text="💼 Experience"/>
            <p className="text-[#c6c6c6] text-[3.5em] font-bold pt-3">Professional</p>
            <p className="text-[#c6c6c6] text-[3.5em] font-bold pt-3">Academic</p>
        </div>
    )
}

export default Experience;