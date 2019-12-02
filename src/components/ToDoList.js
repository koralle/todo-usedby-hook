import React from 'react';
import './ToDoList.css'

const ToDoList = (props) => {

    const todoListItems = props.todoList.map(
        (item) => {
            return (
                <li key={item.title}>
                    <div className="todoItem">
                        <h1>Title: {item.title}</h1>
                        <p>Content: {item.content}</p>
                    </div>
                </li>
            );
        }
    );

    return (
        <div class="todo-list">
            <h1>Your Tasks</h1>
            <ul className="todoItemList">
                {todoListItems}
            </ul>
        </div>
    );
}

export default ToDoList;