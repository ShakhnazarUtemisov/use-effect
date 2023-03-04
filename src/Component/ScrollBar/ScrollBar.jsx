import React from "react";
import "./_ScrollBar.scss";

const ScrollBar = () => {

    window.addEventListener('scroll', setScrollPercent);

    function setScrollPercent(){
        const progress = document.querySelector('.progress');
        const container = document.querySelector('.container');
        const docHeight = document.body.scrollHeight - window.innerHeight;

        let top = window.pageYOffset || document.documentElement.scrollTop;
        let perc = Math.ceil(top*100/docHeight);
        container.setAttribute('data-scroll', perc);
        progress.style.strokeDashoffset = 264 - (perc/100*264);
    }




    return(
        <div className="scroll-bar">
            <div className="container" data-scroll="0">
                <svg className="scroll-progress" width="90" height="90" viewport="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle className="bg" r="42" cx="45" cy="45" fill="transparent" strokeDasharray="264" strokeDashoffset="0" />   
                    <circle className="progress" r="42" cx="45" cy="45" fill="transparent" strokeDasharray="264" strokeDashoffset="264" />
                </svg>
            </div>
        </div>
    )
} 

export default ScrollBar;