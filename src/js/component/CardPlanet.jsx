import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CardPlanet = (props) => {

    const [url, setUrl] = useState(props.url);
    const [planet, setPlanet] = useState({});
    const [uid, setUid] = useState();

    // el objeto planet se llama planet
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {setPlanet(data.result.properties);
                        setUid(data.result.uid)})
        .catch(err => console.error(err));
    },[url]);

    const handleChange = (ev) => {
        console.log(ev)
        // si no esta activo
            // actions.addFavorite(char.name)
        // si SI está
    };
    
    if (planet !== {}){
        return (
            <div className="card">
                <img src="https://media.timeout.com/images/105903888/750/422/image.jpg" className="card-img-top" alt="alt"/>
                <div className="card-body">
                    <h4>{planet.name}</h4>
                    <p className="card-text"><b>Population:</b> {planet.population}</p>
                    <p className="card-text"><b>Terrain:</b> {planet.terrain}</p>
                    <div>
                        <Link className='btn btn-outline-primary learnMoreButton' to={`/single/planet${uid}`} planet={planet}>Learn more!</Link>
                        <input type="checkbox" className='btn btn-outline-primary btn-check likeButton' id='btn-check-2' checked autoComplete="off" onChange={handleChange}/>
                        <label className="btn btn-primary" htmlFor="btn-check-2"><i className="fa-regular fa-heart"></i></label>
                    </div>
                </div>
            </div>
        )
    }else{
        return(<p>loading...</p>)
    }
};

export default CardPlanet;