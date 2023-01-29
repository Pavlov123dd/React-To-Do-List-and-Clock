import React from 'react';

function ToDoItem({item, removeItem, changeCompleted}) {
    return (
        <li onClick={e => changeCompleted(e, item)} className={item.completed ? 'completed' : 'in-progress'}>{item.title}
            <button  onClick={e => removeItem(e, item.id)}>Remove</button>
        </li>
    );
}

export default ToDoItem;
