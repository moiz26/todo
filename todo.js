let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(event){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");
    ul.appendChild(item);
    item.appendChild(delbtn);

    console.log(inp.value);
    inp.value = "";
});

ul.addEventListener("click",function(event){
    if(event.target.tagName === "BUTTON"){
        let litem = event.target.parentNode;
        litem.remove();
    }
});