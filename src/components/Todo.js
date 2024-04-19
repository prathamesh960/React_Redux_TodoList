import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";
import "./todo.css";


export default function Todo() {
    const [inputData, setInputData] = useState('');
    const list = useSelector((state) => state.todo.list);
    const dispatch = useDispatch();

    return (
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <figcaption>Add your List Here</figcaption>
                </figure>
                <div className="addItems">
                    <input
                        type="text"
                        placeholder="Add Items.."
                        value={inputData}
                        onChange={(event) => setInputData(event.target.value)}
                    />
                    <i
                        className="fa fa-plus add-btn"
                        onClick={() => {
                            dispatch(addTodo(inputData));
                            setInputData('');
                        }}
                    ></i>
                </div>
                <div className="showItems">
                    {list.map((elem) => (
                        <div className="eachItem" key={elem.id}>
                            <h3>{elem.data}</h3>
                            <div className="todo-btn">
                                <i
                                    className="fa fa-trash-alt add-btn"
                                    title="Delete Item"
                                    onClick={() => dispatch(deleteTodo(elem.id))}
                                ></i>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="showItems">
                    <button
                        className="btn effect04"
                        data-sm-link-text="remove All"
                        onClick={() => dispatch(removeTodo())}
                    >
                        <span>Remove ALL</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
