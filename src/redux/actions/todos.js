export const addTodo = data => ({type: 'addTodo', data})
export const updateTodo = data => ({type: 'updateTodo', data})
export const deleteTodo = data => ({type: 'deleteTodo', data})
export const checkAllTodo = data => ({type: 'checkAllTodo', data})
export const clearAllDone = data => ({type: 'clearAllDone', data})
export const showAllTodo = data => ({type: 'showAllTodo', data})
export const showDoneTodo = data => ({type: 'showDoneTodo', data})
export const showNoneTodo = data => ({type: 'showNoneTodo', data})