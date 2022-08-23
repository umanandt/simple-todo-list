import React, { useEffect, useState } from "react";

import classes from "./Todos.module.css";
import List from "./List";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [newTodos, setNewTodos] = useState();
  const [renderr, setRenderr] = useState(false);

  const inputChangeHandler = (event) => {
    setNewTodos(event.target.value);
  };

  const formHandler = (event) => {
    event.preventDefault();
    setTodos((prevTodos) => [...prevTodos, newTodos]);
  };

  // const deleteHandler = (vId) => {
  // const allTodos = [...todos];
  // allTodos.splice(vId, 1);
  // setTodos(allTodos);
  // };

  const removeTodo = (getTodos) => {
    setTodos(getTodos);
    setRenderr(true);
  };

  useEffect(() => {
    if (renderr) {
      setRenderr(false);
    }
  }, [renderr]);

  return (
    <div className={classes.container}>
      <div className={classes.banner}>
        <div className={classes.heading}>
          <h3> Make Your To-do List </h3>
        </div>
        <div className={classes.imgg}></div>
      </div>

      <form onSubmit={formHandler} className={classes.form}>
        <div className="mb-3">
          <input
            type="text"
            className={classes.input}
            placeholder="Add Task"
            onChange={inputChangeHandler}
          />
          <button type="submit" className={classes.button}>
            Add Todo
          </button>
        </div>
      </form>

      {/*  <div className={classes.div}>
      {todos.map((item, index) => (
        <ul className={classes.ul} key={index}>
          <li> {item}</li>
          <button type="button" onClick={() => deleteHandler(index)}>
            <i className="fa-solid fa-square-xmark fa-2x i"></i>
          </button>
        </ul>
      ))}
    </div>*/}
      <div className={classes.todos} >
        <List todos={todos} removeTodo={removeTodo} />
      </div>
    </div>
  );
};

export default Todos;
