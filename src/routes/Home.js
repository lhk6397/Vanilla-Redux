import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToDo from "../components/ToDo";
import { add } from "../store";

const Home = () => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(toDos);
    dispatch(add(text));
    setText("");
  };
  const toDos = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <h1>To Do</h1>
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
};
export default Home;
