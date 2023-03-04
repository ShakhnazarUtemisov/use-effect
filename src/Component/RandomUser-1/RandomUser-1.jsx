import React, { useEffect, useState } from "react";

const RandomUser1 = () => {

    const [info, getInfo] = useState(null);

    useEffect(()=>{
        fetch("https://randomuser.me/api/?results=1")
            .then((response) => response.json())    
            .then((data) => {
                getInfo(data.results[0])
            })
    }, []);

    if(!info){
        return <div>Loading...</div>
    }

    return(
        <div className="wrapper">
            <div className="items">
                <img src={info.picture.large} alt="" />
                <p>Name: {`${info.name.title} ${info.name.first} ${info.name.last}`}</p>
            </div>
        </div>
    )
}

export default RandomUser1;