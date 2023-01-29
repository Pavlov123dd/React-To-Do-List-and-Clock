import React from 'react';
import './style.sass'
export default function Form({submitForm,setTittle}) {
    return (
        <form onSubmit={submitForm} >
            <label>
                Tittle: <input type='text' onChange={e => setTittle(e.target.value)}/>
            </label>
            <button>Create todo</button>
        </form>
    );
}
