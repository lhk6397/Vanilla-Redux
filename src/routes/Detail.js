import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Detail = () => {
  const toDos = useSelector((state) => state);

  const idd = useParams().id;
  const todoText = toDos.find((todo) => todo.id === parseInt(idd));

  return (
    <>
      <h1>{todoText?.text}</h1>
      <h5>Created at:{todoText?.id}</h5>
    </>
  );
};
export default Detail;
