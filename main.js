const addInput = document.querySelector("#isim");
const addButton = document.querySelector("#btn");
const addListElement = document.querySelector(".list");

let yapilacakListesi = [];

const getList = () =>{
    yapilacakListesi = JSON.parse(localStorage.getItem("toList"));  
    renderList()  
}
window.addEventListener("load", () => getList())

const addList = () =>{
    const addText = addInput.value;
    if(addInput.value.length < 1){
        return window.alert("boş geçilemez")            
        
    }
    const splitText = addText.trim();
    console.log(splitText)
    if(splitText.length < 1){
        window.alert("boş geçilemez");
        return 
    }
    yapilacakListesi.push(addText);
    localStorage.setItem("toList", JSON.stringify(yapilacakListesi))
    renderList();
}

const deleteListItem = (id) =>{
    const removeList = yapilacakListesi.filter((item,index)=>index !== id);
    yapilacakListesi = removeList;
    localStorage.setItem("toList", JSON.stringify(removeList))
    renderList();
}

const renderList = () =>{
    addListElement.innerHTML = "";
    yapilacakListesi.map((item,index)=>{
        const newDiv = document.createElement("div");
        newDiv.className = "divDOM"
        const newDeleteButton = document.createElement("button");
        newDeleteButton.className = "buttonDOM"

        newDeleteButton.innerHTML="Sil";
        newDeleteButton.addEventListener("click", ()=>deleteListItem(index));

        newDiv.innerHTML = item;
        newDiv.appendChild(newDeleteButton)
        addListElement.appendChild(newDiv)
        addInput.value =""    
        }
    )
}   

addButton.addEventListener("click", addList) 