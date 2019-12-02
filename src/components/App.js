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



    return (
        <div className="ToDoList">
            <Header headerTitle="To Do List Used By Hooks"/>

            <Form add={addToDoList}/>

            <ToDoList todoList={todoList}/>

            <Footer footerText="Top" />
        </div>
    );
}

export default App;
