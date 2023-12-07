import { useEffect, useReducer, useRef } from "react";
import todoReducer from "../../reducers/todoReducer";

const TodosPage = () => {
  const todoInputRef = useRef();
  //console.log(todoInputRef);
 
  const [todoState, todoDispatch] = useReducer(todoReducer);
 
  console.log(todoState);
  //console.log(todoDispatch);
 
  useEffect(() => {
    todoDispatch({
      type: "LIST_TODOS",
    });
  }, []);
  const handleAddtodo = () => {
    console.log(todoInputRef.current.value);
    const todoItem = {
      id: new Date().toISOString(),
      title: todoInputRef.current.value,
      isCompleted: false,
    };
    console.log(todoItem);
    todoDispatch({
      type:"ADD_TODOS",
      payload:todoItem,
  })
  };
 
  return (
    <div>
      <title>TodosPage</title>
      <h1>Todos App! | useRef and useReducer Hooks</h1>
      <input type="text" placeholder="Enter Todo" ref={todoInputRef} />
      <button onClick={handleAddtodo}>Add TODO</button>
      <hr />
      <div>
        <h2>Listing Todos</h2>
        {todoState?.length === 0 && (
          <div className="alert alert-warning">
            No Todos found. You can add one.
          </div>
        )}
        <ul>
          {todoState?.map((todo) => {
            return <li key = {todo.id}>{todo.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
 
export default TodosPage;