import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Single } from "../views/single";

const CardCharacter = (props) => {

    const [url, setUrl] = useState(props.url);
    const [char, setChar] = useState({});
    const { store, actions } = useContext(Context);
    const [uid, setUid] = useState();

    // el objeto personaje de esta card se llama char
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {setChar(data.result.properties);
                                setUid(data.result.uid)})
        .catch(err => console.error(err));
    },[url]);

    const handleChange = (ev) => {
        console.log(ev)
        // si no esta activo
            // actions.addFavorite(char.name)
        // si SI está
    };
    
    if (char !== {}){
        return (
            <div className="card">
                <img src="https://www.denofgeek.com/wp-content/uploads/2022/09/Jedi-Lead-Image.jpg?fit=1200%2C675" className="card-img-top" alt="alt"/>
                <div className="card-body">
                    <h4>{char.name}</h4>
                    <p className="card-text"><b>Gender:</b> {char.gender}</p>
                    <p className="card-text"><b>Eyes-color:</b> {char.eye_color}</p>
                    <p className="card-text"><b>Hair-clor:</b> {char.hair_color}</p>
                    <div>
                        <Link className='btn btn-outline-primary learnMoreButton' to={`/single/people${uid}`} >Learn more!</Link>
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

export default CardCharacter;