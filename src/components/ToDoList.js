import React from 'react';
import './ToDoList.css'

const ToDoList = (props) => {

    const callDeleteToDoList = (index) => {
        props.delete(index);
    }

    const todoListItems = props.list.map(
        (item, i) => {
            return (
                <li key={i}>
                    <div>
                        <h1>Title: {item.title}</h1>
                        <p>Content: {item.content}</p>
                    </div>
                    <button onClick={() => props.delete(i)}>
                        Delete
                    </button>
                </li>
            );
        }
    );

    return (
        <div>
            <h1>Your Tasks</h1>
            <ul>
                {todoListItems}
            </ul>
        </div>
    );
}

export default ToDoList;