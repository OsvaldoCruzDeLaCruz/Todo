import { Todo } from "./todo.class";

export class TodoList {
    constructor() {
        this.cargarLocalStorage();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id) {

        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStorage()
    }


    marcarCompletado(id) {
        for (const todo of this.todos) {
            if (todo.id == id) {

                todo.completado = !todo.completado;
                break;
            }

        }
        this.guardarLocalStorage()
    }

    eliminarCompletados() {

        this.todos = this.todos.filter(todo => !todo.completado);
        console.log(this.todos);
        this.guardarLocalStorage()

    }


    guardarLocalStorage() {
        localStorage.setItem('todo', JSON.stringify(this.todos));

    }
    cargarLocalStorage() {
        this.todos = (localStorage.getItem('todo')) ? JSON.parse(localStorage.getItem('todo')) : [];
        //el map es un metodo de los arreglos. El map barre los elementos del arreglo
        // y este lo retorna un nuevo arreglo con cada uno de esos objeto atravez 
        // de la funcion indicada
        this.todos = this.todos.map(obj => Todo.fromJASON(obj));    

    }
}