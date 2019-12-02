import React, {useState} from 'react';
import './Form.css'

const Form = (props) => {
    const [todoTitle, setTodoTitle] = useState("");
    const [todoContent, setTodoContent] = useState("");

    const handleTodoTitleInputChange = (e) => {
        setTodoTitle(e.target.value);
    }

    const handleTodoContentInputChange = (e) => {
        setTodoContent(e.target.value);
    }

    const resetInputField = () => {
        setTodoTitle("");
        setTodoContent("");
    }

    const callAddToDoList = (e) => {
        e.preventDefault();
        props.add(todoTitle,todoContent);
        resetInputField();
    }

    return (
        <div className="todo-form">

            <p> Please input your task.</p>
            <form>
                <ul>
                    <li className="todo-form-title"> 
                        <label>Title:</label>
                        <input type="text"
                            onChange={handleTodoTitleInputChange}
                            value={todoTitle}
                        />
                    </li>
                    <li className="todo-form-detail">
                        <label>Detail:</label>
                        <textarea type="text"
                            onChange={handleTodoContentInputChange}
                            value={todoContent}
                        />
                    </li>
                    <li className="todo-form-add">
                        <button type="submit" onClick={callAddToDoList}>
                            ADD
                        </button>
                    </li>
                </ul>


            </form>
        </div>
    );
}

export default Form;