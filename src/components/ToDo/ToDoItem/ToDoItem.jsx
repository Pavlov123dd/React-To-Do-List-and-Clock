import React, {Fragment} from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import { teal } from '@mui/material/colors';
const color = teal[500];
function ToDoItem({item, removeItem, changeCompleted}) {
    return (
        <Fragment>
                <ListItem disablePadding style={{borderRadius: "3px"}} onClick={e => changeCompleted(e, item)} className={item.completed ? 'completed' : 'in-progress'} >
                        <ListItemText primary={item.title} />
                        <Button variant="contained" style={{background: "#289E72"}}  onClick={e => removeItem(e, item.id)  }>Remove</Button>
                </ListItem>
        </Fragment>

    );
}

export default ToDoItem;
