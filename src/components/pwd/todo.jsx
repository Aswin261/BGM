import React, { useState, useEffect } from "react";
import axios from "axios";
import "./todo.css";
function Todo() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/todo")
      .then((res) => {
        setItem(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [item]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4000/todo/${id}`)
      .then((res) => {
        const updatedItems = item.filter((item) => item.id !== id);
        setItem(updatedItems);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleUpdate = (id, updatedTodoName) => {
    axios
      .put(`http://localhost:4000/todo/${id}`, {
        Todo_name: updatedTodoName,
      })
      .then((res) => {
        const updatedItems = item.map((item) =>
          item.id === id ? { ...item, Todo_name: updatedTodoName } : item
        );
        setItem(updatedItems);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <div class="flex">
        {item.map((data) => (
          <div class="card m-2 w-3 ">
            <div class="card-body">
              <h5 class="card-title">
                <b>Task:</b> {data.Todo_name}
              </h5>
              <h6 class="card-text">Category:{data.Category}</h6>
              <i
                class="fa-solid fa-trash"
                onClick={() => handleDelete(data.id)}
              ></i>
              <i
                style={{ marginLeft: "30px" }}
                class="fa-solid fa-pen-to-square"
                onClick={() => {
                  const updatedTodoName = prompt(
                    "Please enter the updated task name",
                    data.Todo_name
                  );
                  if (updatedTodoName !== null) {
                    handleUpdate(data.id, updatedTodoName);
                  }
                }}
              ></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
