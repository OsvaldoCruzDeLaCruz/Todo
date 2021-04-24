import './styles.css';
// Por defecto al no decirle un archivo de donde importar, por defecto buscara el index.js
// en la carpeta classes
import { Todo, TodoList} from './classes';
import { crearTodoHTML } from './js/componentes';

export const todosList = new TodoList();


todosList.todos.forEach(todo => crearTodoHTML(todo));
console.log(todosList.todos)








