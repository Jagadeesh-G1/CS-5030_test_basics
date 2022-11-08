class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        // Your code here
        todo = { "title": "T1","description": "D1","done": false }
        this.todos.todo.push(todo);
        return this.todos;
    }

    delete_todo(){
   
    this.todos.todo.slice();
    const rock= this.todos.todo[this.todos.todo.length-1];
    return rock;
    }
    

    update_todo(id, todo){
        // Your code here
        this.todo_data.todo[id] = todo;
        const rock = this.todos.todo[1];
        return rock;
    }
    
}


module.exports= todoservice;