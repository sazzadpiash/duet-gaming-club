import React from 'react';
import './Exercise.css';

const Exercise = (props) => {
    const {exercise, btnClicked} = props;
    const {img, name, time} = exercise;
    return (
        <div  className='exercise-box'>
            <img className='exercise-img' src={img} alt=""></img>
            <h4 className='e-title'>{name}</h4>
            <p className='e-time'>Time Required:  {time}s</p>
            <button className='e-btn' onClick={()=>btnClicked(time)}>Add to List</button>
        </div>
    );
};

export default Exercise;