import React from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import "./index.css";
import { addTodo } from "../../redux/actions/todos";
const Header = (props) => {
  // console.log(props);
  const dispatch = useDispatch()

  const handleAdd = (e) => {
    const {key, target} = e
    if(key !== 'Enter') return
    if(target.value.trim() === '') {
      alert('输入不能为空！')
      return
    }

    const todoObj = {
      id: nanoid(),
      name: target.value,
      done: false,
      isShow: true
    }

    dispatch( addTodo(todoObj) )
    target.value = ''
  }
  
  return (
    <div className="todo-header">
       <h1 className="title">TodoList</h1>
       <input
        type="text"
        onKeyUp={handleAdd}
        placeholder="请输入您的待办名称，按回车确认"
      />
    </div>
  )
};

export default Header
