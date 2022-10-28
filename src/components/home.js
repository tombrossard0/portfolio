import React from "react";
import Little_box from './little_box'
import profile_img from "../images/profile.png";
import github_img from "../images/github.png"
import linkedin_img from "../images/linkedin.png"
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    return (
        <div className="bg-gradient-to-b from-[#080b14] via-[#0d1022] to-[#15152b] flex items-center flex-col h-screen">
            <div className="text-white mt-auto mb-auto flex flex-col items-start mr-[20%]">
                <Little_box/>
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
                style={{ fontSize: '4em', fontWeight: 'bold' }}
                />
                <h3 className="text-[#999999] text-[2em]">EPITA student - Future Computer Engineer</h3>
                <div className="flex space-x-4 mt-8">
                    <img src={github_img} alt="github_img" className="profile w-8"/>
                    <img src={linkedin_img} alt="github_img" className="profile w-8"/>
                </div>
            </div>
        </div>
    )
}

export default Home;