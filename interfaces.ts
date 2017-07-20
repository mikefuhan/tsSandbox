interface Todo{
  title: string;
  content: string;
}

let myTodo: Todo;
myTodo = {title:'trash',content:'take out trash'};

function getTodo(todo:Todo){
  console.log(todo.title + ': ' + todo.content);
}

getTodo(myTodo);
