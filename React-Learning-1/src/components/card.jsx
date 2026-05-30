import React from 'react'

const userName = prompt("your name");
export const Card = () => {
    return (
        <>
            <div className="card">
                <h1>{userName}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, architecto.</p>
            </div>
        </>
    )
}

export default Card;