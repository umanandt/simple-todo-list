import React, { useEffect, useRef, useState } from "react";
import classes from "./List.module.css";

//import listContext from "../store/use-context";

const List = (props) => {
  const colorElement = useRef([]);
  const editElement = useRef([React.createRef(), React.createRef()]);
  const [colorChange, setColorChange] = useState();
  const [editTrue, setEditTrue] = useState(false);
  const [editValue, setEditValue] = useState();

  const selectItem = (e) => {
  /* colorElement.current[index].style.backgroundColor = !colorChange
      ? "yellow"
      : "";*/
      e.currentTarget.style.backgroundColor = 'yellow';
      
  };

  useEffect(() => {
    console.log(colorChange);
  }, [colorChange]);

  const deleteItem = (index) => {
    if (colorElement.current[index].style.backgroundColor === "yellow") {
      let taskList = props.todos;
      taskList.splice(index, 1);
      props.removeTodo(taskList);
      setColorChange(true);
    }
  };

  //editElement.current.style.visibility = "hidden";
  const editItems = (index) => {
    setEditTrue((prevValue) => !prevValue);
  };

  const takeEditValue = (event) => {
    setEditValue(event.target.value);
  };

  const doneEditItems = (index) => {
    let editList = props.todos;
    editList.splice(index, 1, editValue);
    props.removeTodo(editList);
    setEditTrue((prevValue) => !prevValue);
  };

  return (
    <div
      style={{
        // flexWrap: "wrap",
        //flex: "1 1 30%",
        //alignItems: "center",
        backgroundColor: "white",
      }}
    >
      {props.todos.map((item, index) => (
        <div
          className={classes.cardBrother}
          key={index}
        >
          <div
            className={classes.liStyle}
            key={index}
          >
            <div
              className={classes.btnCheck}
              key={index}
              ref={(element) => {
                colorElement.current[index] = element;
              }}
              onClick={selectItem}
              style={{
                width: "3.5 rem",
                height: "1.5 rem",
                backgroundColor: "black",
              }}
            >
              <i className="fa-solid fa-check fa-1x"></i>
            </div>

            <div
              className={classes.allList}
            >
              {editTrue ? (
                <div
                  className={classes.doneTodo}
                  key={index}
                  ref={(editBox) => (editElement.current[index] = editBox)}
                >
                  <input
                    className={classes.editInput}
                    type="text"
                    placeholder={item}
                    onChange={takeEditValue}
                  />{" "}
                  <button
                    type="button"
                    className={classes.doneButton}
                    onClick={() => doneEditItems(index)}
                  >
                    Done
                  </button>
                </div>
              ) : (
                <div className={classes.todo}>
                  <h5
                    key={index}
                    ref={(editBox) => (editElement.current[index] = editBox)}
                  >
                    {item}
                  </h5>
                  <button
                    type="button"
                    className={classes.editButton}
                    onClick={() => editItems(index)}
                  >
                    {" "}
                    Edit{" "}
                  </button>
                </div>
              )}
            </div>

            <div
              onClick={() => deleteItem(index)}
              className={classes.btnClose}
              aria-label="Close"
              style={{ width: "3.5 rem", height: "1.5 rem" }}
            >
              <i className="fa-solid fa-square-xmark fa-1x"></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
