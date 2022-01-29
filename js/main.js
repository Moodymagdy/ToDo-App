let taskInput = document.getElementById ('taskInput');
let taskAddBtn = document.getElementById ('taskAddBtn');
let noTask = document.getElementById ('noTask');
let allTasks = document.getElementById ('allTasks');
let invlidMessage = document.getElementById ('invalidMessage');
let closeInvalidMessage = document.getElementById ('closeInvalidMessage');


let closeInvalidMessageFunc = () =>{
    invlidMessage.classList.add ('none');
}
closeInvalidMessage.addEventListener('click' , closeInvalidMessageFunc);

let addTask = () =>{
     taskData = taskInput.value; 
     if ( taskData.trim() == '' || taskInput.value.length < 3){
        invlidMessage.classList.remove('none');
     } else{
        noTask.classList.add('none');
        allTasks.innerHTML += `
        <div class=" task alert pb-4 alert-info">
        ${taskData}
        <button class=" delete btn btn-danger float-end"> Remove </button>
        </div> `;
        taskInput.value="";
        allTasks.addEventListener('click' , function(e){
           if (e.target.classList.contains('task')){
              e.target.classList.toggle('checked');
           }

        })


        
     }
     
     
}
taskAddBtn.addEventListener ('click' , addTask);
document.addEventListener('click' , function(e){
   if (e.target.classList.contains('delete')){
      e.target.parentElement.remove();
      if (allTasks.children.length == 0){
         noTask.classList.remove ('none')
      }
   }
});





 taskAddBtn.addEventListener('click' , addTask)