import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CardPlanet = (props) => {

    const [url, setUrl] = useState(props.url);
    const [planet, setPlanet] = useState({});

    // el objeto planet se llama planet
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setPlanet(data.result.properties))
        .catch(err => console.error(err));
    },[url]);
    
    if (planet !== {}){
        return (
            <div className="card">
                <img src="https://media.timeout.com/images/105903888/750/422/image.jpg" className="card-img-top" alt="alt"/>
                <div className="card-body">
                    <h4>{planet.name}</h4>
                    <p className="card-text">Population: {planet.population}</p>
                    <p className="card-text">Terrain: {planet.terrain}</p>
                    <div>
                        <Link className='btn btn-outline-primary learnMoreButton' to='...'>Learn more!</Link>
                        <button className='btn btn-outline-primary likeButton'><i className="fa-regular fa-heart"></i></button>
                    </div>
                </div>
            </div>
        )
    }else{
        return(<p>loading...</p>)
    }
};

export default CardPlanet;