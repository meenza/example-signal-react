import { todoState } from "./todoFunction";
import List from '../src/List.js'
const {
  newItem,
  completedCount,
  addTodo,
  onChangeTodo,
  removeTodo,
  todos
} = todoState()

function App() {
  return (
    <>
      <input value={newItem} onChange={onChangeTodo} />
      <button onClick={addTodo}>Add</button>
      <List todos={todos} removeTodo={removeTodo}/>
      <p>Completed count: {completedCount}</p>
    </>
  );
}

export default App;
