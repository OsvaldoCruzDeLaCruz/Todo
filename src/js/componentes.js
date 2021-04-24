import { Todo, TodoList } from "../classes";
import { todosList } from "../index";

//Referencias en html
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar  = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchortagsFiltros = document.querySelectorAll('.filtro');

export const crearTodoHTML = (todo) => {
    const htmlTodo = `
    <li class="${todo.completado ? "completed" : ""} " data-id="${todo.id}">
    <div class="view">
    <input class="toggle" type="checkbox" ${todo.completado ? "checked" : ""}>
    <label>${todo.tarea}</label>
    <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
    </li>`;
    
    const div = document.createElement('div');
    
    div.innerHTML = htmlTodo;
    
    divTodoList.append(div.firstElementChild);
    
    return div.firstElementChild;
    
}
//eventos
txtInput.addEventListener('keyup', (event) =>{
    if(event.keyCode === 13 && txtInput.value.length > 0 ){
        const nuevoTodo = new Todo(txtInput.value) ;
        todosList.nuevoTodo(nuevoTodo);
        console.log(todosList);
        crearTodoHTML(nuevoTodo);
        txtInput.value = "";
    }
});

divTodoList.addEventListener('click',(event)=>{
    
    const nombreElemento= event.target.localName;
    const todoElemento = event.target.parentElement.parentElement; 
    const todoId = todoElemento.getAttribute('data-id');
    
    if(nombreElemento.includes('input')){//dio click en el check
        todosList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed')
        
    }   
    

    // Tambien se puede asi, en lugar de usar el includes
    // else if(nombreElemento == 'button'){
    // O con el include else if(nombreElemento.includes('button')){

    if(nombreElemento.includes('button')){
        todosList.eliminarTodo(todoId);    

        //Del divTodoList.remueveElHijo(todoElemento)
        //Porque el padre es el div y el hijo es el li o en este caso todoElemento
        divTodoList.removeChild(todoElemento);
    }

    

});
btnBorrar.addEventListener('click',()=>{
    todosList.eliminarCompletados();
     for(let i = divTodoList.children.length-1; i>=0; i--){

        const elemento = divTodoList.children[i];

        if(elemento.classList.contains('completed')){
            // Tambien se puede usar sin le contais
            // El constais regresa un booleano
            // Tambien se pude usar si el nombre de la clase es igual a completed
            // if(elemento.classList == "completed"){
                
            
            divTodoList.removeChild(elemento);
        }

        
     }
});

ulFiltros.addEventListener('click', (event)=>{
    const filtro = event.target.text;
    if(!filtro ){
        return ;
    }
    anchortagsFiltros.forEach(elemento => elemento.classList.remove('selected'));
    event.target.classList.add('selected');
    for(const elemento of divTodoList.children){
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch(filtro){

            case 'Pendientes':
            if(completado){
                elemento.classList.add('hidden');
            }
            break;
            case 'Completados':
            if(!completado){
                elemento.classList.add('hidden');
            }
            break;
        }
    }

});
            
        


