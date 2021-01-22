import React from "react";
import {useSelector} from 'react-redux'
import Item from "../Item";

import "./index.css";

export default function List (props) {

  let {todos} = useSelector(state => state)
  // console.log(todos);

  return (
    <ul className="todo-main">
      {todos.map(todo => {
          // return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
          return <Item key={todo.id} {...todo} />
      })}
    </ul>
  );
}
