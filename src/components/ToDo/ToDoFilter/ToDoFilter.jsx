import React,{Fragment} from 'react';
import './style.sass';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
function ToDoFilter({filterItems,selectedFilter}) {


    return (
        /*<div className='filter-container'>
            <h3>Filter:</h3>
            <select value={selectedFilter} onChange={filterItems}>
                <option value='all'>All</option>
                <option value='completed'>Completed</option>
                <option value='progress'>In progress</option>
            </select>

        </div>*/

            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Filter</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Filter"
                        value={selectedFilter}
                        onChange={filterItems}
                    >
                        <MenuItem value='all'>All</MenuItem>
                        <MenuItem value='completed'>Completed</MenuItem>
                        <MenuItem value='progress'>In progress</MenuItem>
                    </Select>
                </FormControl>
            </Box>

    );
}

export default ToDoFilter;
