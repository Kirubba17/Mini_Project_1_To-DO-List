const input = document.getElementById("inputfield");
const listContainer = document.getElementById("list-container")

function add(){
    if(input.value===""){
        alert("Please add Task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    input.value =" ";
}

listContainer.addEventListener("click" , function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
    }
})