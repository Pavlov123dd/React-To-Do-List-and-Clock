import React from 'react';
import Clock from "./components/Clock/clock";
import ToDoList from "./components/ToDo/ToDoList";
import './App.css'
import {useLocalStorage} from "./hooks/common";

function App(props) {

    return (
        <div className='all-container'>
            <Clock/>
            <ToDoList/>
        </div>

    );
}

export default App;