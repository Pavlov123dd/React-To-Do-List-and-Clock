import React from 'react';
import './style.sass'
export default function ToDoTheme({mode, setMode}) {
    return (
        <div className='theme-label'>
            <label >
                Light mode: <input type="checkbox"
                                   defaultChecked={mode === 'light'}
                                   onChange={e => setMode(e.target.checked ? 'light' : 'light dark')}/>
            </label>
        </div>

    );
}

