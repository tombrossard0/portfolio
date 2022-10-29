import React, {useState, useEffect} from "react";
import profile_img from "../images/profile.png";


const Header = (props) => {

    const [active, setActive] = useState("");

    useEffect(() => {
        setActive(props.active);
    }, [props.active])

    const onClickPage = (e) => {setActive(e.target.value);}

    let anchors = ["Home", "About me", "Projects", "Skills", "Experience", "Contact me"]

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        }
    });

    const isSticky = (e) => {
        const header = document.querySelector('.header-section');
        const scrollTop = window.scrollY;
        scrollTop >= 250 && scrollTop <= 10 ? header.classList.add('font-bold') : header.classList.remove('font-bold');
    };

    return (
        <div className="header-section bg-[#ac7ceb10] mx-10 h-14 rounded-[50px] mt-5 flex items-center shadow-lg fixed backdrop-blur-sm z-[10]">
            <div class="w-10 ml-5">
                <a href="#Home"><img src={profile_img} alt="profile" className="profile w-8"/></a>
            </div>

            <div class="text-[#c6c6c6] space-x-6 ml-10 mr-10">
                {anchors.map((anchor) => {
                    return <a href={"#".concat(anchor)}>
                            <button value={anchor} onClick = {(e) => onClickPage(e)} className={active === anchor ? "group text-purple-500 font-bold hover:text-purple-400" : "group hover:text-white"}>
                                {anchor}
                                <div className="w-[0%] transition-[0.3s] group-hover:w-[100%] bg-purple-400 h-[2px]"></div>
                            </button>
                        </a>
                })}
            </div>
        </div>
    )

}

export default Header;