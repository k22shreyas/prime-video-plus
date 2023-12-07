function todoReducer(state = [], action) {
  debugger;
  console.log(action);
  console.log(state);
 
  switch (action.type) {
    case "LIST_TODOS":
      return state;
 
    case "ADD_TODOS":
      return [...state, action.payload];
 
    default:
      return state;
  }
}
 
export default todoReducer;