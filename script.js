const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');
let items ;


//load items
loadItems();

eventListeners();

function eventListeners(){
    form.addEventListener('submit', addNewItem);
    taskList.addEventListener('click',deleteItem);
    btnDeleteAll.addEventListener('click', deleteAllItems);
}

function addNewItem(e){
    if(input.value === ''){
        alert('add new item');
    }

    //create item

    createItem(input.value);

  



   input.value = '';
    e.preventDefault();

}
A
function deleteItem(e){


        if(e.target.className === 'fas fa-times'){
            if(confirm('are you sure')) {
            e.target.parentElement.parentElement.remove();
        }

    }
   

    e.preventDefault();
}

function deleteAllItems(e){

    if(confirm('Are You Sure ? ')){
        taskList.childNodes.forEach(function(item){
            if(item.nodeType === 1){
    
                item.remove();
            }
        });

    }
 

    e.preventDefault();
}

function loadItems(){

    items = getItemsFromLS();

    items.forEach(function(item){
        createItem(item);
    })

}

//get items from local stroge

function getItemsFromLS(){
    if(localStroge.getItem('items') == null){
        items = [];

    }
    else {
        items = JSON.parse(localStorage.getItem('items'));
    }

    return items;

}

// set items to local stroge
function setItemToLS(text){
    items = getItemsFromLS();
    items.push(text);
    localStroge.setItem('items' ,JSON.stringify (items));

}



function createItem (text) {

    const li =  document.createElement('li');
    li.className ='list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(text));
 
     const a = document.createElement('a');
     a.classList = 'delete-item- float-right';
     a.setAttribute('href', '#');
     a.innerHTML = '<i class="fas fa-times"></i>';
 
     li.appendChild(a);
 
     taskList.appendChild(li);

}
