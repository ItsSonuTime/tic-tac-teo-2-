let msg = document.querySelector(".msgcontainer");
let strbtn = document.querySelector("#newgame");
let rtbtn  = document.querySelector("#btn"); 
let boxes = document.querySelectorAll("#box");

let turnO = true;
const WinPatterns = [

    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]  
]


rtbtn.addEventListener('click',  ()=>{
    turnO = true;
    enableboxes ();
})

boxes.forEach((box) =>{
    box.addEventListener('click', ()=>{
        if(turnO){
            box.innerText = "O"
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
          
        box.disabled = true;
        checkWinner();
    })

}

)
strbtn.addEventListener('click', ()=>{
    turnO = true;
    enableboxes()
})

rtbtn.addEventListener('click',()=>{
    turnO = true;
    enableboxes()
})
const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableboxes = () =>{
 for( let box of boxes){
 box.disabled = false;
 box.innerText = "";
 }

}

const showWinner = (Winner) =>{
    msg.innerText = `congratulations , Winner is ${Winner}`;
    disableboxes();
}

const checkWinner = () =>{
    for( let Pattern of WinPatterns){
      let pos1val = boxes[Pattern[0]].innerText;
      let pos2val = boxes[Pattern[1]].innerText;
      let pos3val = boxes[Pattern[2]].innerText;
      if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val === pos2val && pos2val=== pos3val){
           showWinner(pos1val);
        }
      }
        
    }
}

