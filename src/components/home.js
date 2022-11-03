/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Little_box_hello from './little_box_hello'
import github_img from "../images/github.png"
import linkedin_img from "../images/linkedin.png"
import { TypeAnimation } from 'react-type-animation';


const Home = () => {
    return (
        <div className="bg-gradient-to-b from-[#080b14] via-[#0d1022] to-[#15152b] flex items-center flex-col h-screen text-[110%]">
            <div className="text-white mt-auto mb-auto flex flex-col items-start text-left">
                <Little_box_hello text="Hi! My name is"/>
                <TypeAnimation
                sequence={[
                    'Tom', // Types 'One'
                    1000, // Waits 1s
                    'Brossard', // Deletes 'One' and types 'Two'
                    1000, // Waits 2s
                    'Tom Brossard', // Types 'Three' without deleting 'Two'
                    10000, // Waits 10s
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '4em', fontWeight: 'bold', marginTop: '10px'}}
                />

                <p className="text-[#c6c6c6] text-[2em]">EPITA student - Future Computer Engineer</p>
                <a className="text-[#aaa9c5] text-[1.1em] mt-8 pr-[30%]">I'm a 19 years old french student in the engineering school <a class="link font-bold" href="https://www.epita.fr">EPITA</a> and I study computer science. I'm open to any opportunity.</a>

                <div className="flex space-x-4 mt-8">
                    <a href="https://github.com/tombrossard0"><img src={github_img} alt="github_img" className="profile w-8"/></a>
                    <img src={linkedin_img} alt="github_img" className="profile w-8"/>
                </div>
            </div>

            <div className="z-[2]">
                <a href="#About"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="220" fill="white" class="bi bi-arrow-down-circle-fill animate-bounce" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                </svg></a>
            </div>
        </div>
    )
}

export default Home;