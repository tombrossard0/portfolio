import React from "react";
import github_img from "../images/github_contact.svg"
import discord_img from "../images/discord_contact.svg"
import linkedin_img from "../images/linkedin_contact.svg"
import mail_img from "../images/mail_contact.svg"


const Contacts = (props) => {
    return (
        <div className="bg-white p-4 flex flex-col py-[5%] space-y-12 text-gray-700 font-bold">
            <span className="text-[2.4em]">How to contact me?</span>
            <div className="flex justify-center space-x-6 text-[25px]">
                <div className="bg-white p-5 rounded-[20px] drop-shadow-2xl flex mr-[10px] transition-[1s] w-[100px] hover:w-[290px]"><img src={github_img} class="w-[60px]"></img>
                    <div className="overflow-hidden mt-2 ml-[20px]"><span class="">tombrossard0</span></div>
                </div>

                <div className="bg-white p-5 rounded-[20px] drop-shadow-2xl flex mr-[10px] transition-[1s] w-[100px] hover:w-[290px]"><img src={discord_img} class="w-[60px]"></img>
                    <div className="overflow-hidden mt-2 ml-[20px]"><span class="">my discord</span></div>
                </div>

                <div className="bg-white p-5 rounded-[20px] drop-shadow-2xl flex mr-[10px] transition-[1s] w-[100px] hover:w-[290px]"><img src={linkedin_img} class="w-[60px]"></img>
                    <div className="overflow-hidden mt-2 ml-[20px]"><span class="">my linkedin</span></div>
                </div>

                <div className="bg-white p-5 rounded-[20px] drop-shadow-2xl flex mr-[10px] transition-[1s] w-[100px] hover:w-[290px]"><img src={mail_img} class="w-[60px]"></img>
                    <div className="overflow-hidden mt-2 ml-[20px]"><span class="">my email</span></div>
                </div>
            </div>

        </div>
    )
}

export default Contacts;