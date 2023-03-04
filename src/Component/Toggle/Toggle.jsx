import React, {useState, useEffect } from "react";
import "./_Toggle.scss";

const ToggleComponent = () => {

    // const [title, setTitle] = useState('');

    const [isToggled, setIsToggled] = useState(false);

    // useEffect(()=>{
    //     document.querySelector('.invisible-title').style.display = 'block';
    // })

    useEffect(() => {

    }, [isToggled]);


    // return(
    //     <div className="wrapper">
    //         <button onClick={()=>{
    //             setTitle(document.querySelector('.invisible-title').classList.toggle('.invisible-title'));
    //         }} className="toggle-title">Toggle Fetch Component</button>
    //         <div className="invisible-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, provident?</div>
    //     </div>  
    // )

    return (
        <div className="wrapper">
            <div className="toggle-container">
                <button onClick={() => setIsToggled(!isToggled)}>
                    Toggle Fetch Component
                </button>

                {isToggled ? <p>Lorem ipsum dolor sit amet.</p> : ""}
            </div>
        </div>
    );
}

export default ToggleComponent;