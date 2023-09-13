const createTodoButton = document.querySelector(".todo .add-new-todo button");
const createTodoInput = document.querySelector(".todo .add-new-todo input");
const todosList = document.querySelector(".todo .todos-list");
  
//  shows todos data
const showdata = () =>{
    let contant ="";
    todos.forEach((item,index) => {
        
        contant +=` <div class="flex mt-4 items-center justify-between gap-4">
        <h1 class="w-full px-2 py-2 text-white text-[16px] bg-black rounded-md shadow-sm"> <i
            class="fas fa-check-double"></i> ${item}</h1>
           <i onclick="deletetod('${item}')" class="p-3  text-white  bg-red-500 rounded-md cursor-pointer fas fa-trash"></i>
      </div>`;
    });
    todosList.innerHTML=contant;
};

showdata();

//  add validation
createTodoButton.onclick =() =>{
    const todo =createTodoInput.value;  
if (todo) {
    todos.push(todo);
    createTodoInput.value="";  

} else {
 alert("Todo must be fillUp");
}
showdata();
};


// delete Button 
const deletetod = (item) =>{
      const updateTodos = todos.filter((data) => data != item);
      todos =updateTodos;
      showdata();
};