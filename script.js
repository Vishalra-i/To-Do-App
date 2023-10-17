const inputbox = document.getElementById('input-text')
const addlist = document.querySelector("button")
const listContainer = document.getElementById('list')

addlist.addEventListener(('click'),addtask)

function addtask(event){
    if(inputbox.value === ''){
        alert(`write`)
    }
    else{
        let span = document.createElement('span')
        let li = document.createElement('li')
        li.innerHTML = inputbox.value ;
        listContainer.appendChild(li)
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputbox.value = ''
    savedat()
}

listContainer.addEventListener(('click'),function (event) {
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle("checked")
        savedat()
    }else if(event.target.tagName === 'SPAN'){
        event.target.parentElement.remove()
        savedat()
    }
})

function savedat() {
    localStorage.setItem("data",listContainer.innerHTML)
}
function showlist() {
    listContainer.innerHTML = localStorage.getItem("data")
}
showlist()
