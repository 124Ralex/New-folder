const list = document.querySelector('#Task-list ul');
const forms = document.forms;

// delete Task
list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

// add Tasks
const addForm = forms['add-Task'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();

  // create elements
  const value = addForm.querySelector('input[type="text"]').value;
  const li = document.createElement('li');
  const TaskName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  // add text content
  TaskName.textContent = value;
  deleteBtn.textContent = 'delete';

  // add classes
  TaskName.classList.add('name');
  deleteBtn.classList.add('delete');

  // append to DOM
  li.appendChild(TaskName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});

// hide Task
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
  if(hideBox.checked){
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});
const searchBar = document.forms['search-Task'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
const term = e.target.value.toLowerCase();
const Task = list.getElementsByTagName('li');
Array.from(Task).forEach(function(Task){
const title = Task.firstElementChild.textContent;
if(title.toLowerCase().indexOf(term)!=-1){
  Task.style.display = "block";
  
}else {
  Task.style.display= "none";
}
})
});