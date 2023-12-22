let btn = document.querySelector(".btn");
let body = document.querySelector("body");

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
                cell.style.backgroundColor = "purple";
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
