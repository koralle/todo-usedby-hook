import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import Form from './Form'
import Footer from './Footer'
import ToDoList from './ToDoList'

const App = () => {
    const [todoList, setTodoList] = useState([]);

    const addToDoList = (Title, Content) => {
        setTodoList(todoList.concat({"title": Title, "content": Content}));
    }

    const deleteToDoList = (index) => {
        setTodoList(todoList.filter(item => todoList[index] !== item));
    }


    return (
        <div className="todo-app">
            <Header headerTitle="To Do List Used By Hooks"/>

            <div className="todo-app-body">
                <Form add={addToDoList}/>
                <ToDoList list={todoList} delete={deleteToDoList}/>
            </div>

            <Footer footerText="Top" />
        </div>
    );
}

export default App;
