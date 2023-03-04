import React, { useEffect, useState, useRef } from "react";
import "./_RandomUser-2.scss"

const RandomUser2 = () => {

    const [comments, getComments] = useState([]);
    const [page, getPage] = useState(1);

    const radios = document.querySelectorAll('.radio');

    const handlePage = event => {
        radios.forEach((item)=>{
            if(item.value === event.target.value){
                getPage(parseInt(item.value))
            }
        })
    }    


    useEffect(()=>{

        fetch(`https://jsonplaceholder.typicode.com/posts/${page}/comments`)
            .then((response) => response.json())    
            .then((data) => {
                getComments(data)
            })
    }, [page]);

    if(!comments){
        
        return(
            <>
            <div>Loading...</div>
            <input type="radio" className="radio" onChange={handlePage} name="item-page" value="1"/>
            <input type="radio" className="radio" onChange={handlePage} name="item-page" value="2"/>
            <input type="radio" className="radio" onChange={handlePage} name="item-page" value="3"/>
        
            </>
        ) 
    }

    return(
        <div className="wrapper">
            <div className="items">
                <input type="radio" className="radio" onChange={handlePage} name="item-page" value="1"/>
                <input type="radio" className="radio" onChange={handlePage} name="item-page" value="2"/>
                <input type="radio" className="radio" onChange={handlePage} name="item-page" value="3"/>
                {comments.map(comment => (
                    <div className="comments" key={comment.id}>
                        <p>Name: {`${comment.name} ${comment.body} ${comment.email}`}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RandomUser2;