import React, {useState, useEffect, useCallback} from 'react';
import {useLocalStorage} from "../../hooks/common";
import './style.sass';
import {getList, deleteItem, updateItem, addItem} from '../../services/todoService';
import ToDoItem from "./ToDoItem/ToDoItem";
import Form from "./ToDoForm/Form";
import ToDoFilter from "./ToDoFilter/ToDoFilter";
import ToDoTheme from "./ToDoTheme/ToDoTheme";


export default function ToDoList(props) {
    const [list, setList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [title, setTittle] = useState('');
    const [selectedFilter, setSelectedFilter] = useLocalStorage('selectedFilter', 'all');
    const [mode, setMode] = useLocalStorage('mode', 'light');


    useEffect(() => {

        getList()
            .then((data) => {
                setList(data)
            })
    }, []);

    useEffect(() => {
        setFilteredList(list);
        filterList(selectedFilter);
    }, [list]);


    const removeItem = useCallback(async (e, id) => {
            e.stopPropagation();
            e.target.disabled = true;
            await deleteItem(id)
            e.target.disabled = false;
            setList(prevState => prevState.filter((item) => item.id !== id))
        }, []
    );

    const changeCompleted = useCallback(async (e, item) => {
            e.target.disabled = true;
            let updated = await updateItem(item.id, {completed: !item.completed});
            e.target.disabled = false;
            setList(prevState => prevState.map(el => {
                if (el.id === item.id) el = updated;
                return el
            }))
        }, []
    );

    const submitForm = useCallback(async e => {
            e.preventDefault();
            let addedItem = await addItem({title: title, completed: false});
            setList(prevState => [...prevState, addedItem])
            e.target.reset();
        }, [title]
    );


    const filterItems = e => {
        let value = e.target.value
        filterList(value)
    };

    const filterList = value => {
        setSelectedFilter(value);
        switch (value) {
            case 'completed':
                setFilteredList(list.filter(item => item.completed))
                break
            case 'progress':
                setFilteredList(list.filter(item => !item.completed))
                break
            case 'all':
                setFilteredList(list)
                break
        }
    };


    return (
        <div className={mode}>
            <h1>To Do List</h1>
            <ToDoTheme mode={mode} setMode={setMode}/>
            <Form submitForm={submitForm}
                  setTittle={setTittle}/>
            <ToDoFilter filterItems={filterItems}
                        selectedFilter={selectedFilter}/>

            {list.length > 0 ?
                (
                    <ul className='list'>
                        {filteredList.map(item => (
                            <ToDoItem item={item}
                                      key={item.id}

                                      changeCompleted={changeCompleted}
                                      removeItem={removeItem}/>
                        ))}
                    </ul>
                ) : null}
        </div>

    );
};