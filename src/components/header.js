import React, {useState, useEffect} from "react";
import profile_img from "../images/profile.png";

const Header = (props) => {

    const [active, setActive] = useState("");

    useEffect(() => {
        setActive(props.active);
    }, [props.active])

    const onClickPage = (e) => {setActive(e.target.value);}

    let anchors = ["Home", "About me", "Projects", "Skills", "Experience", "Contact me"]

    return (
        <div className="bg-[#ac7ceb10] mx-10 h-14 rounded-[50px] mt-5 flex items-center shadow-lg fixed">
            <div class="w-10 ml-5">
                <img src={profile_img} alt="profile" className="profile w-8"/>
            </div>

            <div class="text-white space-x-6 ml-10 mr-10">
                {anchors.map((anchor) => {
                    return <button value={anchor} onClick = {(e) => onClickPage(e)} className={active === anchor ? "text-purple-500" : ""}> {anchor}</button>
                })}
            </div>
        </div>
    )

}

export default Header;