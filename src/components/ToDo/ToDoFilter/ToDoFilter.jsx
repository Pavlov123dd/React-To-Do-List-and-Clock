import React,{Fragment} from 'react';
import './style.sass'
function ToDoFilter({filterItems,selectedFilter}) {
    return (
        <div className='filter-container'>
            <h3>Filter:</h3>
            <select value={selectedFilter} onChange={filterItems}>
                <option value='all'>All</option>
                <option value='completed'>Completed</option>
                <option value='progress'>In progress</option>
            </select>
        </div>

    );
}

export default ToDoFilter;
