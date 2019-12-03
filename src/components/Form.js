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
        <div>
            <form>
                <ul className="todo-form">
                    <li className="todo-form-title"> 
                        <label>
                            <span>Title:</span>
                            <input type="text"
                                onChange={handleTodoTitleInputChange}
                                value={todoTitle}
                            />
                        </label>
                    </li>
                    <li className="todo-form-detail">
                        <label>
                            <span>Detail:</span>
                            <textarea type="text"
                                onChange={handleTodoContentInputChange}
                                value={todoContent}
                            />
                        </label>
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