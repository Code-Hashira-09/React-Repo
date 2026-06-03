import React from 'react'
import heroImg from '../assets/hero.png'
const Cards = (props) => {
    return (
        <div>
            <div className="card">
                <div className="card-illustration">
                    <img src={heroImg} alt="Abstract graphic" />
                </div>
                <h1 className="card-title">{props.name}</h1>
                <h2>Age : {props.age}</h2>
                <p className="card-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <button id="btn-view-more" className='btn'>View More</button>
            </div>
        </div>
    )
}

export default Cards