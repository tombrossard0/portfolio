import React, {useState, useEffect} from "react";
import profile_img from "../images/profile.png";

const Header = (props) => {

    const [active, setActive] = useState("");

    useEffect(() => {
        setActive(props.active);
    }, [props.active])

    const onClickPage = (e) => {setActive(e.target.value);}

    return (
        <div className="bg-[#7a4ae210] w-100 h-16 rounded-2xl mx-12 mt-5 flex items-center shadow-lg">
            <div class="w-10 ml-5">
                <img src={profile_img} alt="profile" className="profile w-10"/>
            </div>

            <div class="text-white space-x-6 ml-auto mr-10">
                <button value="Home" onClick={(e) => onClickPage(e)} className={active === "Home" ? "text-purple-500" : ""}>Home</button>
                <button value="About me" onClick={(e) => onClickPage(e)} className={active === "About me" ? "text-purple-500" : ""}>About me</button>
                <button value="Projects" onClick={(e) => onClickPage(e)} className={active === "Projects" ? "text-purple-500" : ""}>Projects</button>
                <button value="Skills" onClick={(e) => onClickPage(e)} className={active === "Skills" ? "text-purple-500" : ""}>Skills</button>
                <button value="Experiences" onClick={(e) => onClickPage(e)} className={active === "Experiences" ? "text-purple-500" : ""}>Experiences</button>
                <button value="Contact me" onClick={(e) => onClickPage(e)} className={active === "Contact me" ? "text-purple-500" : ""}>Contact me</button>
            </div>
        </div>
    )

}

export default Header;