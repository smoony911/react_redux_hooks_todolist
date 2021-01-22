import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import {checkAllTodo,clearAllDone,showAllTodo,showDoneTodo,showNoneTodo} from '../../redux/actions/todos'

import "./index.css";

export default function Footer(props) {

  const {todos} = useSelector(state => state)
  const dispatch = useDispatch()
  // 已完成的个数
  const doneCount = () => todos.filter(todo => todo.done).length

  return (
    <div className="todo-footer">
      <label>
        <input type="checkbox" onChange={(e) => dispatch(checkAllTodo({done: e.target.checked}))} checked={doneCount() === todos.length && todos.length !== 0} />
        </label>
        <span>
          <span> 已完成{doneCount()} </span> / 全部{todos.length}
        </span>
        <button className="btn btn-danger" onClick={() => dispatch(clearAllDone())} > 清除已完成任务</button>
        <button className="btn btn-alive" onClick={() => dispatch(showNoneTodo())}> 未完成 </button>
        <button className="btn btn-done" onClick={() => dispatch(showDoneTodo())}> 已完成 </button>
        <button className="btn btn-all" onClick={() => dispatch(showAllTodo())}> 全部 </button>
    </div>
  );
}
