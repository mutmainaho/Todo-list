const addForm = document.querySelector('.add');
const list = document.querySelector('.todo');
const  search = document.querySelector('.search input')
var todo_list = []
const getTodo = () =>{
    const list = document.querySelectorAll('ul>li')
    for (var i=0; i<list.length; i+=1){
        todoName = list[i].innerText
        todo_list.push(todoName)
    }
}
const addTemplate = todo_list => {
    list.innerHTML = ""
    for (var i = 0; i < todo_list.length; i+=1){
        const todo = todo_list[i]
        if (todo_list[i]){
            const html = `
               <li id=${i} class="list-group-item d-flex justify-content-between align-items-center ">
                  <span class="todo-name">${todo}</span> 
                    <i class="far fa-trash-alt delete"></i>  
              </li>
            `;
            list.innerHTML += html;
        }
    }

};




addForm.addEventListener( 'submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();


   
    if(todo.length){ 
    todo_list.push(todo);  
    addTemplate(todo_list);
    }
    });
list. addEventListener( 'click', e => {
        if(e.target.classList.contains('delete')){
            todo_list.splice(e.target.parentElement.id,1)
            filterTodo.splice(e.target.parentElement.id,1)
            addTemplate(filterTodo)
        }
     });
search.addEventListener( 'keyup', () =>{
        const term = search.value.trim();
        filterTodo = todo_list.map((val)=>{if(val.includes(term)){
            return val } 
            return 0 
        } )
        addTemplate(filterTodo)
          
    });

getTodo()
var filterTodo = JSON.parse(JSON.stringify(todo_list))
addTemplate(todo_list)
    
    



