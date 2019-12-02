import React from 'react';
import './ToDoList.css'

const ToDoList = (props) => {

    const callDeteteToDoList = (itemTitle) => {
        props.delete(itemTitle);
    }

    const todoListItems = props.todoList.map(
        (item) => {
            return (
                <li key={item.title}>
                    <div className="todoItem">
                        <div>
                            <h1>Title: {item.title}</h1>
                            <p>Content: {item.content}</p>
                        </div>
                        <button type="submit">
                            Delete
                        </button>
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