let btn = document.querySelector(".btn");
let body = document.querySelector("body");
let red = Math.floor(Math.random()* 255);
let green = Math.floor(Math.random()* 255);
let blue = Math.floor(Math.random()* 255);
console.log(red);
function createDivs(n){
    console.log(n)
    for(let i=0;i<n;i++){
        let row = document.createElement("div");
        row.className = "rowDivs";
        for(let j=0;j<n;j++){
            let cell = document.createElement("div");
            cell.className = "colDivs";
            cell.style.height = "16px";
            cell.style.width = "16px";
            cell.style.backgroundColor = "blue";
            cell.addEventListener("mouseover",()=>{
                cell.style.backgroundColor = `rgb(${red},${green},${blue})`;
            });
            cell.addEventListener("mouseout",()=>{
                cell.style.backgroundColor = "blue";
            });
            console.log(`creating div ${i}`);
            console.log(`${j}`);
            row.appendChild(cell);
        }
        body.appendChild(row)
    }
}

function run(){
    body.innerHTML = "";
    let num = parseInt(prompt("Enter grid number you want: "));
    if(num > 100){
        num = parseInt(prompt("Enter grid number you want: "));
        return
    }
    createDivs(num);
}

btn.addEventListener("click",run);
