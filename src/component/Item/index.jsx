import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo,updateTodo } from '../../redux/actions/todos';

import "./index.css";

export default function Item(props) {
    const dispatch = useDispatch()
    const [mouse, setMouse] = useState(false)

    const {id, name, done, isShow} = props // 这是数组，不是对象 这个对象是list传过来的 不是说数据是从reducer里面取吗
    // 也可以从父组件传，因为副组件中是用了store里的数据了，无需重复提取

    // 鼠标移入移出的回调
    const handleMouse = (flag) => {
        setMouse(flag)
    }

    // 勾选，取消勾选某一个todo的回调
    const handleClick = (id,e) => {
        dispatch(updateTodo({id, done: e.target.checked}))
    }

    // 删除一个todo的回调
    const handleDelete = (id) => {
        dispatch( deleteTodo({id}) )        //这里的参数就是data
    }

    return (
        <Fragment>
            {isShow && <li style={{background: mouse ? '#ddd' : '#fff'}} onMouseEnter={() => handleMouse(true)} onMouseLeave={() => handleMouse(false)} >
                <label>
                    <input type="checkbox" checked={done} onChange={(e) => handleClick(id,e)} />
                    <span>{name}</span>
                </label>
                <button onClick={() => handleDelete(id)} style={{display: mouse ? 'block' : 'none'}}  className="btn btn-danger">删除</button>
            </li>}
        </Fragment>
    )
}
