
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import candy1 from './candy1.png';
import './candy.css';

const Candy = ()=>{
    const [candy, setCandy] = useState([])

    const getCandy = ()=>{
        const x = window.innerWidth * Math.random();
        const y = window.innerHeight * Math.random();
        setCandy(items =>[...items, {x, y}])
    }

    const img = candies.map((candy, i) => (
        <img src={candy1} alt="img" key={i} className="candy-img" style={{ top: `${candy.y}px`, left: `${candy.x}px` }}/>
    ));

    return(
        <div className="candy">
            <div className="candy-card">
                <p>You got: {candies.length} candies</p>
                <button onClick={getCandy}>More</button>
                <br></br>
                <Link to="/">Go Back</Link>
            </div>
        </div>
    )

}

export default Candy

