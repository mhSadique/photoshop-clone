import React from 'react';


const Sidebar = ({option, active, setSelectedOptionIndex}) => {
    return (
        <button 
        className={`sidebar-item ${active ? 'active' : ''}`}
        onClick={setSelectedOptionIndex}
        
        >
            {option.name}
        </button>
    );
};

export default Sidebar;