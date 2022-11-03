import React, {useState, useEffect} from "react";
import profile_img from "../images/profile.png";


const Header = (props) => {

    const [active, setActive] = useState("");

    useEffect(() => {
        setActive(props.active);
    }, [props.active])

    const onClickPage = (e) => {setActive(e.target.value);}

    let anchors = ["Home", "About", "Projects", "Skills", "Experience", "Contact"]

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        }
    });

    const isSticky = (e) => {
        const header = document.querySelector('.header-section');
        const scrollPercent = window.scrollY / window.outerHeight;
        /* console.log(scrollPercent); */
        scrollPercent <= 0.01 ? header.classList.add('bg-[#ac7ceb00]') : header.classList.remove('bg-[#ac7ceb00]');
        scrollPercent <= 0.01 ? header.classList.remove('bg-[#ac7ceb10]') : header.classList.add('bg-[#ac7ceb10]');

        const home = document.querySelector('.Home');
        scrollPercent < 0.7 && scrollPercent >= 0 ? home.classList.add('text-purple-500') : home.classList.remove('text-purple-500');
        scrollPercent < 0.7 && scrollPercent >= 0 ? home.classList.add('font-bold') : home.classList.remove('font-bold');

        const about = document.querySelector('.About');
        scrollPercent >= 0.7 ? about.classList.add('text-purple-500') : about.classList.remove('text-purple-500');
        scrollPercent >= 0.7 ? about.classList.add('font-bold') : about.classList.remove('font-bold');
    };

    /* {active === anchor ? "group text-purple-500 font-bold hover:text-purple-400 " : "group hover:text-white ".concat(anchor)} */

    return (
        <div className="header-section mx-10 h-14 rounded-[50px] mt-5 flex items-center shadow-lg fixed backdrop-blur-sm z-[10] transition-[0.3s] bg-[#ac7ceb10]">
            <div class="w-10 ml-5">
                <a href="#Home"><img src={profile_img} alt="profile" className="profile w-8"/></a>
            </div>

            <div class="text-[#c6c6c6] space-x-6 ml-10 mr-10">
                {anchors.map((anchor) => {
                    return <a href={"#".concat(anchor)}>
                            <button value={anchor} onClick = {(e) => onClickPage(e)} className={"group ".concat(anchor)}>
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