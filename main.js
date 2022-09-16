let list = document.getElementById("list")
document.getElementById("add").addEventListener("click", ()=>{
    let listItem = document.createElement("p");
    listItem.innerHTML = document.getElementById("todo").value
    list.append(listItem)
    document.getElementById("todo").value = ""
    listItem.addEventListener("click", ()=>listItem.remove())
})
