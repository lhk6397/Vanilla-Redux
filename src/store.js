import { configureStore, createSlice } from "@reduxjs/toolkit";

// export const addToDo = createAction("ADD");
// export const deleteToDo = createAction("DELETE");

// const ADD = "ADD";
// const DELETE = "DELETE";
// export const addToDo = (text) => {
//   return {
//     type: ADD,
//     id: Date.now(),
//     text,
//   };
// };

// export const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id: parseInt(id),
//   };
// };

JSON.parse(localStorage.getItem("toDos")) ||
  localStorage.setItem("toDos", JSON.stringify([]));

// const reducer = (state = JSON.parse(localStorage.getItem("toDos")), action) => {
//   switch (action.type) {
//     case addToDo.type:
//       console.log(action);
//       const addItem = [{ text: action.payload, id: Date.now() }, ...state];
//       localStorage.setItem("toDos", JSON.stringify(addItem));
//       return addItem;
//     case deleteToDo.type:
//       console.log(action);
//       const delItem = state.filter((toDo) => toDo.id !== action.payload);
//       localStorage.setItem("toDos", JSON.stringify(delItem));
//       return delItem;
//     default:
//       return state;
//   }
// };

// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() }); // mutate 할 수도 있음. 단, 아무것도 return 하지 않아야 함. <- toolkit에서만 가능
//   },
//   [deleteToDo]: (state, action) =>
//     state.filter((toDo) => toDo.id !== action.payload), // 새로운 state를 return 할 수도 있음. <- 기존 방식
// });

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

// const store = createStore(reducer);

export const { add, remove } = toDos.actions;

export default configureStore({ reducer: toDos.reducer });
