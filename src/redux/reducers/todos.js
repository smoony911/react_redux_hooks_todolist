// const initState = {
//   todos: [
//     { id: "001", name: "吃饭", done: true, isShow: true },
//     { id: "002", name: "睡觉", done: true, isShow: true },
//     { id: "003", name: "打代码", done: false, isShow: true },
//     { id: "004", name: "逛街", done: false, isShow: true }
//   ]
// };
// export default (state = initState, action) => {
//   return state;
// };

const initState = {
  todos: [
    { id: "001", name: "吃饭", done: true, isShow: true },
    { id: "002", name: "睡觉", done: true, isShow: true },
    { id: "003", name: "打代码", done: false, isShow: true },
    { id: "004", name: "逛街", done: false, isShow: true },
  ]
};

export default function reducer(state = initState, action) {
    // return state
    const {type, data} = action;
    const {todos} = state
    let newTodos
    switch (type) {
      // 添加一个todo，接收的参数是todo对象
      case 'addTodo':
        newTodos = [data, ...todos]
        return {todos: newTodos}

      // 更新一个todo对象
      case 'updateTodo':
        newTodos = todos.map(todo => {
          if(todo.id === data.id) return {...todo, done: data.done}   // ****
          else return todo
        })
        // console.log(newTodos);
        return {todos: newTodos}
        
      // 删除一个todo对象
      case 'deleteTodo':
        newTodos = todos.filter(todo => data.id !== todo.id)
        // console.log(newTodos);
        return {todos: newTodos}

      // 全选
      case 'checkAllTodo':
        // console.log(666);
        newTodos = todos.map(todo => {
          return {...todo, done: data.done}
        })
        return {todos: newTodos}

      // 清除所有已完成的todo对象
      case 'clearAllDone':
        newTodos = todos.filter(todo => {
          return !todo.done
        })
        return {todos: newTodos}

      // 筛选显示所有的todo对象
      case 'showAllTodo':
        newTodos = todos.map(todo => {
          todo.isShow = true
          return todo
        })
        return {todos: newTodos}

      // 筛选显示已完成的todo对象
      case 'showDoneTodo':
        newTodos = todos.map(todo => {
          todo.isShow = true
          if(!todo.done) {
            todo.isShow = false
          }
          return todo
        })
        return {todos: newTodos}

      // 筛选显示未完成的todo对象
      case 'showNoneTodo':
        newTodos = todos.map(todo => {
          todo.isShow = true
          if(todo.done) {
            todo.isShow = false
          }
          return todo
        })
        return {todos: newTodos}
     
      default:
        return {...state}
    }
}
