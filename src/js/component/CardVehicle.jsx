import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CardVehicle = (props) => {

    const [url, setUrl] = useState(props.url);
    const [vehicle, setVehicle] = useState({});
    const [uid, setUid] = useState();
    

    // el objeto planet se llama planet
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {setVehicle(data.result.properties);
                        setUid(data.result.uid)})
        .catch(err => console.error(err));
    },[url]);

    const handleChange = (ev) => {
        console.log(ev)
        // si no esta activo
            // actions.addFavorite(char.name)
        // si SI está
    };
    
    if (vehicle !== {}){
        return (
            <div className="card">
                <img src="https://cdna.artstation.com/p/assets/images/images/015/790/190/large/tim-murray-flsp-41.jpg?1549753601" className="card-img-top" alt="alt"/>
                <div className="card-body">
                    <h4>{vehicle.name}</h4>
                    <p className="card-text"><b>Vehicle class:</b> {vehicle.vehicle_class}</p>
                    <p className="card-text"><b>Passengers:</b> {vehicle.passengers}</p>
                    <p className='card-text'><b>Manufacturer:</b> {vehicle.manufacturer}</p>
                    <div>
                        <Link className='btn btn-outline-primary learnMoreButton' to={`/single/vehicle${uid}`}>Learn more!</Link>
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

export default CardVehicle;