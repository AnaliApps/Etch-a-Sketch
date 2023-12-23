let btn = document.createElement("button");
btn.setAttribute("class","btn")
btn.textContent = "SetGrid"
let btnrefreshPage = document.createElement("button");
btnrefreshPage.setAttribute("class","btn");
btnrefreshPage.textContent = "RefreshPage";
let btnDv = document.createElement("div")
btnDv.setAttribute("id","btn")
let body = document.querySelector("body");
let container = document.createElement("div");
container.setAttribute("class","container")
let red = Math.floor(Math.random()* 255);
let green = Math.floor(Math.random()* 255);
let blue = Math.floor(Math.random()* 255);
function createDivs(n){
    let h = 500/n;
    let w = 500/n;
    console.log(n)
    for(let i=0;i<n;i++){
        let row = document.createElement("div");
        row.className = "rowDivs";
        for(let j=0;j<n;j++){
            let cell = document.createElement("div");
            cell.className = "colDivs";
            cell.style.height = `${h}px`;
            cell.style.width = `${w}px`;
            cell.style.backgroundColor = "blue";
            cell.addEventListener("mouseover",()=>{
                cell.style.backgroundColor = `rgb(${red},${green},${blue})`;
            });
            cell.addEventListener("mouseout",()=>{
                cell.style.backgroundColor = "blue";
            });
            cell.addEventListener("click",draw(cell));
            console.log(`creating div ${i}`);
            console.log(`${j}`);
            row.appendChild(cell);
        }
        container.appendChild(row)
    }
    
    body.appendChild(container);
}

function run(){
    container.innerHTML = "";
    let num = parseInt(prompt("Enter grid number you want: "));
    if(num > 100){
        num = parseInt(prompt("Enter grid number you want: "));
        return
    }
    createDivs(num);
    
}

function refreshPage(){
    window.location.reload();
}

function draw(t){
    t.style.backgroundColor = "purple";
    console.log("clicked")
}
btnDv.appendChild(btn);
btnDv.appendChild(btnrefreshPage)
body.appendChild(btnDv);
btn.addEventListener("click",run);
btnrefreshPage.addEventListener("click",refreshPage);