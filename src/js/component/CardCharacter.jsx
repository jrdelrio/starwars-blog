import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CardCharacter = (props) => {

    const [url, setUrl] = useState(props.url);
    const [char, setChar] = useState({});

    // el objeto personaje de esta card se llama char
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setChar(data.result.properties))
        .catch(err => console.error(err));
    },[url]);
    
    if (char !== {}){
        return (
            <div className="card">
                <img src="https://www.denofgeek.com/wp-content/uploads/2022/09/Jedi-Lead-Image.jpg?fit=1200%2C675" className="card-img-top" alt="alt"/>
                <div className="card-body">
                    <h4>{char.name}</h4>
                    <p className="card-text">Gender: {char.gender}</p>
                    <p className="card-text">Eyes-color: {char.eye_color}</p>
                    <p className="card-text">Hair-color: {char.hair_color}</p>
                    <div>
                        <Link className='btn btn-outline-primary learnMoreButton' to='/single/:theid' char={props}>Learn more!</Link>
                        <button className='btn btn-outline-primary likeButton'><i className="fa-regular fa-heart"></i></button>
                    </div>
                </div>
            </div>
        )
    }else{
        return(<p>loading...</p>)
    }
};

export default CardCharacter;