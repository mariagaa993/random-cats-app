import React, { useEffect, useState } from 'react';
import './random.scss';
import axios from 'axios';

const Random = _ => {
    const [img, setImg] = useState([]);

    useEffect(() => {
        changeImg();
    }, []); // solo cargar al principio

    const changeImg = _ => {
        axios.get("https://api.thecatapi.com/v1/images/search")
        .then(res => {
            setImg(res.data[0].url);
        })
        .catch(err => alert(`Error! ${err}`));
    }
    
    return (
        <div className="container">
            <h1>Random Cats</h1>
            <div className="container-img">
                <figure>
                    <img src={img} alt="Gatito-Random"/>
                </figure>
            </div>
            <button onClick={changeImg}>New Cat</button>
        </div>
    );
};

export default Random;