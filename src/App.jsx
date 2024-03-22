import { useState } from "react";
import Task from "./Task";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const addItem = () => {
    const item = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: input,
      completed: false,
    };
    setTodoList(item.taskName !== "" ? [...todoList, item] : todoList);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === id) {
          return { ...item, completed: true };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <h1>Todolist</h1>
        <input onChange={handleInput} placeholder="Enter a new todo" />
        <button onClick={addItem}>AddTask</button>
      </div>
      <div className="list">
        {todoList.map((item) => {
          return (
            <Task
              taskName={item.taskName}
              id={item.id}
              completed={item.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
