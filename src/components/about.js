import React from "react";
import profile_img from "../images/profile.png"
import Little_box from './little_box'


const About = (props) => {
    return (
        <div className="bg-white columns-2 px-[600px] py-16">
            <img src={profile_img} alt="profile" className="profile w-[400px]"/>
            <div className="">
                <Little_box text="🧐 Who am I ?"/>
                <p className="text-[#2a2a2a] text-[2em] pt-5 text-left">EPITA student - Future Computer Engineer</p>
                <p class="text-left pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida facilisis urna et scelerisque. Nulla dignissim ac eros ut lobortis. Donec eleifend quis nisi in fringilla. Integer rhoncus, leo vulputate dictum elementum, odio velit condimentum massa, a eleifend orci tellus sed ligula. Duis convallis volutpat augue, id volutpat augue porttitor eu. Donec risus mi, semper non dictum finibus, efficitur nec nunc. Sed iaculis odio nec efficitur posuere. Aliquam porta lectus orci, vel cursus sem laoreet sit amet. Ut viverra nulla at scelerisque aliquam. Duis venenatis arcu nunc, sit amet luctus augue egestas sit amet. Sed eget est est. Proin quis lectus eget magna volutpat consequat at luctus ex. Quisque posuere iaculis vestibulum. Phasellus non interdum nibh. Ut nisi orci, cursus nec euismod at, pharetra quis massa.</p>
            </div>
        </div>
    )
}

export default About;