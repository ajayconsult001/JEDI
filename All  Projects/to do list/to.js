// Declearing the inputs and list variables as global variables
const inputBox = document.getElementById("add");
const list_items = document.getElementById("list-items");

// Define add list functions
function createTodoList(){
    if(inputBox.value === ''){
    alert("you must write something!");
}else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    list_items.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
}
inputBox.value = "";
saveData();
}
list_items.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    },false);
    
    // save data input by user function using local storage
    function saveData(){
        localStorage.setItem("data",list_items.innerHTML);
    }
    // show list added by user
    function showTask(){
        list_items.innerHTML = localStorage.getItem("data")
    }
    
    showTask();//calling showTask function
    
    
