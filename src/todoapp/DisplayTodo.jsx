const DisplayTodo = ({ allTodos, setAllTodos, setText }) => {

  function deleteTodo(id) {
    let filteredTools = allTodos.filter((ele) => {
      return ele.id !== id;
    })
    setAllTodos(filteredTools);
  }

  function editTodo(id){
    console.log(id, "edit it");

    let filteredTools = allTodos.filter((ele) => {
      return ele.id !== id;
    })
    setAllTodos(filteredTools);

    let val = allTodos.find((ele) => {
      return ele.id === id;
    });
    console.log(val);
    setText(val.text);
  }

  return (
    <div>
      <ul>
        {allTodos.map((ele) => {
          return (
            <li key={ele.id}>
              {ele.text}
              <button onClick={()=> editTodo(ele.id)}> Edit </button>
              <button onClick={() => deleteTodo(ele.id)}> Delete </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}; 

export default DisplayTodo;
