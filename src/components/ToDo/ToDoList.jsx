import React, {useState, useEffect, useCallback, useContext} from 'react';
import {useLocalStorage} from "../../hooks/common";
import './style.sass';
import {getList, deleteItem, updateItem, addItem} from '../../services/todoService';
import ToDoItem from "./ToDoItem/ToDoItem";
import Form from "./ToDoForm/Form";
import ToDoFilter from "./ToDoFilter/ToDoFilter";
import ThemeContext from "../../context/ThemeContext";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';

export default function ToDoList( ) {
    const [list, setList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [title, setTittle] = useState('');
    const [selectedFilter, setSelectedFilter] = useLocalStorage('selectedFilter', 'all');
    const {theme} = useContext(ThemeContext)
    const [isLoad, setLoad]=useState(true)

    useEffect(()=>{(async ()=>{

        setList( await getList())

    })()},[])

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
         <Container maxWidth="sm" className={theme}>
        <Typography variant="h4" gutterBottom>
            To Do List
        </Typography>


        <Form submitForm={submitForm}
              setTittle={setTittle}/>
        <ToDoFilter filterItems={filterItems}
                    selectedFilter={selectedFilter}/>

        {list.length > 0 ?
            (
                <List className='list' >
                    {filteredList.map(item => (
                        <ToDoItem item={item}
                                  key={item.id}

                                  changeCompleted={changeCompleted}
                                  removeItem={removeItem}/>
                    ))}
                </List>
            ) : null}

    </Container>

    );
};