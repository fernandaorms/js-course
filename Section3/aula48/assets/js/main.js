function toDoList() {
   // Consts
   const input = document.querySelector('input.input-tarefa');
   const btnAdd = document.querySelector('button.btn-tarefa');
   const list = document.querySelector('.tarefas ul');
   const error = document.querySelector('.error span');
   

   // Functions
   function clearInput() {
      input.value = '';
      input.focus();
   }

   function showError() {
      error.innerHTML = 'Erro, digite uma tarefa!';
   }

   function clearError() {
      error.innerHTML = '';
   }

   function createListItem(value) {
      let li = newElement('li');
      let text = newElement('span', value);
      let btn = newElement('button', 'X', 'btn-remove');

      li.appendChild(text);
      li.appendChild(btn);

      list.appendChild(li);
   }

   // Call to addTask()
   btnAdd.addEventListener('click', addTask);

   document.addEventListener('keypress', function(e){
      if(e.target == input && e.key == 'Enter') addTask();
   });


   // Add a new Task
   function addTask() {
      if(!input.value) {
         showError();
         return;
      }

      // Clear error
      clearError();

      // Create Elements
      createListItem(input.value);      

      clearInput();
      saveList();
   }

   
   // Remove a Task
   document.addEventListener('click', function(e) {
      if(e.target.classList.contains('btn-remove')) {
         list.removeChild(e.target.parentNode);
         clearInput();
         saveList();
      }
     
   });  


   // Create a new element, add innerHTMl and CSS class
   function newElement(type, value='', clasS='') {
      let el =  document.createElement(type);

      if(value) el.innerHTML = value;
      if(clasS) el.classList.add(clasS);
      
      return el;
   }


   // Save the List
   function saveList() {
      const liElements = list.querySelectorAll('li span');
      const toDoList = [];

      for (let el of liElements) {
         toDoList.push(el.innerText);
      }

      const toDoJSON = JSON.stringify(toDoList);

      localStorage.setItem('toDo' , toDoJSON);
   }


   function addSavedTasks() {
      const tasks = localStorage.getItem('toDo');
      const toDoList = JSON.parse(tasks);
      
      for(let el of toDoList) {
         createListItem(el);
      }
   }

   addSavedTasks();
}

window.onload =  toDoList;
