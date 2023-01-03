import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteToDo } from "../store";

const ToDo = ({ id, text }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <Link to={`/${id}`}>
        {text} <button onClick={() => dispatch(deleteToDo(id))}>DEL</button>
      </Link>
    </li>
  );
};

export default ToDo;
