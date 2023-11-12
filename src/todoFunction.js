import { signal, computed, effect, batch } from "@preact/signals-react";


export function todoState() {
  const todos = signal([
    { text: "Buy groceries" },
    { text: "Walk the dog" },
  ]);

  const addTodo = () => {
    todos.value = [...todos.value, { text: newItem.value, completed: false }];
    newItem.value = ""; // Reset input value on add
  }
  
  const completedCount = computed(() => {
    return todos.value.filter(todo => todo.completed).length;
  });
  
  const newItem = signal("");

  // effect(() => {
  //   console.log('Hello', todos)
  //   console.log('sssssssssss', completedCount.value);
  // });
  
  const removeTodo = (index) => {
    todos.value.splice(index, 1)
    todos.value = [...todos.value];
  }

  const onChangeTodo = event => (newItem.value = event.target.value);

  return {
    todos,
    newItem,
    completedCount,
    addTodo,
    removeTodo,
    onChangeTodo
  }
}


// export const todoState = () => {
//   const [todos, setTodos] = useState([
//     { text: "Buy groceries" },
//     { text: "Walk the dog" },
//   ]);

//   const addTodo = () => {
//     setTodos([...todos.value, { text: newItem.value, completed: false }]);
//     newItem.value = ""; // Reset input value on add
//   }
  
//   const completedCount = computed(() => {
//     return todos.value.filter(todo => todo.completed).length;
//   });
  
//   const newItem = signal("");

//   // effect(() => {
//   //   console.log('Hello', todos)
//   //   console.log('sssssssssss', completedCount.value);
//   // });
  
//   const removeTodo = (index) => {
//     todos.value.splice(index, 1)
//     todos.value = [...todos.value];
//   }

//   const onChangeTodo = event => (newItem.value = event.target.value);

//   return {
//     todos,
//     newItem,
//     completedCount,
//     addTodo,
//     removeTodo,
//     onChangeTodo
//   }
// }
