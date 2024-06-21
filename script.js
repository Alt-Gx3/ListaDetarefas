const inputBox = document.getElementById("input-box")
const listConst = document.getElementById("listContainer")

function addTask(){
    if (inputBox.value == ''){
        alert("tarefa sem nome")
    }else{
        let liCheck = document.createElement("li")
        liCheck.innerHTML = inputBox.value
        listConst.appendChild(liCheck)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        liCheck.appendChild(span)
    }
    inputBox.value = ""
    saveData()
}

listConst.addEventListener("click", function(e){
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("check")
        saveData();
    }
    else if (e.target.tagName == "SPAN"){
        e.target.parentElement.remove()
        saveData();
    }
}, false)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    listConst.innerHTML = localStorage.getItem("data")
}

showTask()