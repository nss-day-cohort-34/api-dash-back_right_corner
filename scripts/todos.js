const todoContainer = document.querySelector("#todos_container")

const newTodoHTML = (todo) => {
    return `
    <section class = "todo">
    <h1 class ="todo_title">${todo.title}</h1>
    <input type ="checkbox" ${todoIsChecked(todo)} id = "switch">Completed</input>
    </section>
    `
};

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(data => data.json())
  .then(todos => {
      for (const todo of todos) {
          if(todos.indexOf(todo) <= 29) {
              todoContainer.innerHTML += newTodoHTML(todo);
          } 
      }
  })

  const todoIsChecked = (todo) => {
      if (todo.completed === true) {
        return "checked"
  } else { 
      return "unchecked"
  }
}
  