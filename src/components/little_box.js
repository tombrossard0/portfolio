import React from "react";


const Little_box = (props) => {
    return (
        <div className="bg-[#7a4ae227] rounded-xl shadow-lg text-[#6E00FF] p-2 inline-flex pr-3">
            <p className="font-bold">{props.text}</p>
        </div>
    )
}

export default Little_box;