import React, {useContext} from 'react';
import themeContext from "../../context/ThemeContext";
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
export default function ThemeSwitcher() {
    const {theme, setTheme} = useContext(themeContext)

    return (

            <Container maxWidth="sm">
                <label>
                Light mode: <Checkbox onChange={e => setTheme(e.target.checked ? 'light' : 'light dark')}
                                      defaultChecked={theme === 'light'}/>
                </label>
            </Container>

    );
}

