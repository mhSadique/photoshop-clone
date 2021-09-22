import React from 'react';


const Slider = ({handleChange, min, max, value}) => {
    return (
        <div className="slider-container">
            <input 
            type="range" 
            min={min}
            max={max}
            value={value}
            onChange={handleChange}
            />
        </div>
    );
};

export default Slider;