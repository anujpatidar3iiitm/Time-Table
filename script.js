var button=document.getElementById("enter");
var input=document.getElementById("userinput");
var ul=document.querySelector("ul");

function inputLength(){
    return input.value.length;
}

function deleteElement(){
    var del=this.parentElement;
    del.remove();
}

function createListElement(){
    var button=document.createElement("button");
    button.innerHTML="Delete";
    var li=document.createElement("li");
    button.className="toDo";
    li.appendChild(document.createTextNode(input.value+" "));
    button.addEventListener("click",deleteElement);
    li.appendChild(button);
    ul.appendChild(li); 
    input.value="";
}

function addListAfterClick(){
        if(inputLength()>0){
           createListElement();
        }
}

function addListAfterKeypress(event){
    if(inputLength()>0 && event.keyCode==13){
        createListElement();
    }
}

button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);

var toDo = document.getElementsByClassName("toDo");
for (var i = 0; i <toDo.length; i++) {
  toDo[i].addEventListener("click",deleteElement);
}


