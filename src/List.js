function List(props){
  const { todos, removeTodo } = props
    return (
        <ul>
        {todos.value.map((v, index) => {
          return (
            <li key={v.text+index}>
              <label>
                <input
                  type="checkbox"
                  checked={v.completed}
                  onChange={() => {
                    v.completed = !v.completed
                    todos.value = [...todos.value];
                  }}
                />
                {v.completed ? <s>{v.text}</s> : v.text}
              </label>
              {' '}
              <button onClick={() => removeTodo(index)}>❌</button>
            </li>
          );
        })}
      </ul>
    )
}
export default List