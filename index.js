const input = document.querySelector('.input');
const button = document.querySelector('.button');
const todoList = document.querySelector('.todo-list');
const arrow = document.querySelector('.arrow');

input.onkeyup = ()=>{
    let userData = input.value;
    if(userData.trim()!=0){
    button.classList.add("active")
    }else{
    button.classList.remove("active")
    }
}

showTasks();

button.onclick = () => {
    let userData = input.value;
    let getLocalStorageData = localStorage.getItem('todoList');
    if (getLocalStorageData == null){
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorageData);
    }
    listArr.push(userData);
    localStorage.setItem('todoList', JSON.stringify(listArr));
    showTasks();
}

function showTasks(){
    let getLocalStorageData = localStorage.getItem('todoList');
    if (getLocalStorageData == null){
        listArr = [];
    } else {
        listObj = JSON.parse(getLocalStorageData);
    };
    let tasks = '';
    listObj.forEach((element, index) => {
        tasks += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><button class = "delete">X</button></span></li>`;
      });
    todoList.innerHTML = tasks;
    input.value = "";
}

let flagReverse = true;
arrow.onclick = () => {
    let getLocalStorageData = localStorage.getItem('todoList');
    listArr = JSON.parse(getLocalStorageData);
        if(flagReverse===true){
            arrow.setAttribute("src","./images/arrowDownBlack.svg")
            listArr.sort((a, b) => a > b ? 1 : -1);
            flagReverse=false;
        }else{
            arrow.setAttribute("src","./images/arrowUpBlack.svg");
            listArr.sort((a, b) => a > b ? -1 : 1);
            flagReverse=true;
        }
    flag = false;
    localStorage.setItem('todoList', JSON.stringify(listArr));
    showTasks();
    };

function deleteTask(index){
    let getLocalStorageData = localStorage.getItem('todoList');
    listObj = JSON.parse(getLocalStorageData);
    listObj.splice(index,1);
    localStorage.setItem("todoList", JSON.stringify(listObj));
    showTasks();
}