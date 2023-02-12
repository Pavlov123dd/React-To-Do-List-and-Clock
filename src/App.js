import React, {useState} from 'react';
import Clock from "./components/Clock/clock";
import ToDoList from "./components/ToDo/ToDoList";
import './App.css'
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import ThemeContext from "./context/ThemeContext";
import Container from '@mui/material/Container';



function App(props) {
    const [theme, setTheme] = useState('light');


    return (

        <ThemeContext.Provider value={{theme, setTheme}}>
            <Container maxWidth="sm">
                <Clock/>
                <ThemeSwitcher />
                <ToDoList />
            </Container>
        </ThemeContext.Provider>


    );
}

export default App;