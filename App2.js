const list = document.querySelector('#book-list ul');
const forms = document.forms;

// delete books
list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

// add books
const addForm = forms['add-book'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();

  //hide books 
  const hideBox = document.querySelector('#hide')
  const addForm =  document.form ['add-books']
  hideBox.addEventListener('submit', function(e){
    if(hideBox.checked){
    list.style.display = "none";
    } else {
        list.style.display = "initial";
    }
  });

  const searchBar = document.forms['search-books'].querySelector('input');
  searchBar.addEventListener('keyup',function(e)){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent; 
        if(title.toLowerCase).indexOf(term)) !=-1){
            book.style.display = 'block';
        }else{
            book.style.display = 'none';
        }
        }
    })
  })

  // create elements
  const value = addForm.querySelector('input[type="text"]').value;
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  // add text content
  bookName.textContent = value;
  deleteBtn.textContent = 'delete';

  // add classes
  bookName.classList.add('name');
  deleteBtn.classList.add('delete');

  // append to DOM
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});