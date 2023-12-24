let btn = document.createElement("button");
btn.setAttribute("class","btn");
btn.textContent = "SetGrid";
let btnClearPage = document.createElement("button");
btnClearPage.setAttribute("class","btn");
btnClearPage.textContent = "Clear";
let btnDv = document.createElement("div")
btnDv.setAttribute("id","btn")
let btnRefresh = document.createElement("button");
btnRefresh.setAttribute("class","btn");
btnRefresh.textContent = "Refresh";
let body = document.querySelector("body");
let container = document.createElement("div");
// container.style.height = "auto";
console.log(window.innerHeight)
container.setAttribute("class","container")
let red = Math.floor(Math.random()* 255);
let green = Math.floor(Math.random()* 255);
let blue = Math.floor(Math.random()* 255);
function createDivs(n){
    let h = 635/n;
    let w = 960/n;
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
                cell.style.backgroundColor = "black";
            });
            // cell.addEventListener("click",draw(cell));
            console.log(`creating div ${i}`);
            console.log(`${j}`);
            row.appendChild(cell);
        }
        container.appendChild(row)
    }
    
    body.appendChild(container);
}

function run(){
    let num = parseInt(prompt("Enter grid number you want: "));
    while(num > 100){
        num = parseInt(prompt("Enter grid number you want: "));
    }
    createDivs(num);
    
}

function clear(){
    container.innerHTML = "";
}
function refresh(){
    window.location.reload();
}

btnDv.appendChild(btn);
btnDv.appendChild(btnClearPage)
btnDv.appendChild(btnRefresh);
body.appendChild(btnDv);
btn.addEventListener("click",run);
btnClearPage.addEventListener("click",clear);
btnRefresh.addEventListener("click",refresh)