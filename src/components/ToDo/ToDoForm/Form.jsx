import React from 'react';
import './style.sass'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Form({submitForm, setTittle}) {
    return (

        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={submitForm}
        >

            <TextField id="standard-basic" label="Add Task" variant="standard" onChange={e => setTittle(e.target.value)} className={"input-title"} />
            <Button variant="contained" style={{background: "#289E72"}} type="submit">Contained</Button>

        </Box>
    );
}
