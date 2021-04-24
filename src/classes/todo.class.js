export class Todo{

    //con { } como parametro para el metodo. Es para la desestructuracion de un objeto 
    // tambien podria ser del ovjeto con un obj.tarea, obj.id ...etc
    static fromJASON({tarea,id,completado,creado}){
        const temObj = new Todo(tarea);
        temObj.id = id;
        temObj.completado = completado;
        temObj.creado = creado;
        
        return temObj;  
    }

    constructor(tarea){
        this.tarea = tarea;
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }
}
