import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import Form from './Form'
import ToDoList from './ToDoList'

const App = () => {
    const [toDoList, setToDoList] = useState([]);

    const addToDoList = (Title, Content) => {
        setToDoList(toDoList.concat({"title": Title, "content": Content}));
    }

    const deleteToDoList = (index) => {
        setToDoList(toDoList.filter(item => toDoList[index] !== item));
    }


    return (
        <div className="toDo-app">
            <Header headerTitle="To Do List Used By Hooks"/>

            <div className="toDo-app-body container">
                <div className="toDo-main">
                    <Form add={addToDoList}/>
                    <ToDoList list={toDoList} delete={deleteToDoList}/>
                </div>
            </div>
        </div>
    );
}

export default App;
