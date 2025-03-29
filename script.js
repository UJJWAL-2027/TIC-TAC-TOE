let boxes = document.querySelectorAll('.box'); //boxes will be array
let resetbtn = document.querySelector('#reset-game');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let newGameBtn = document.querySelector("#new"); 


let turn0 = true;   

const winningPattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6]];

//as we will iterate in each box , we will use forEach loop (for arrays elements) 
boxes.forEach((BOX)=>{ 
  BOX.addEventListener("click",()=>{
    if(turn0){
        BOX.textContent = "O";
        turn0=false;  //IMP TAAKI AGLE PLAYER KI CHANCE AAYE 
    }
    else{
        BOX.textContent = "X";
        turn0= true;
    }
    BOX.disabled= true;//so that single box has singe entry

   checkWinner();
  });
});




const reset=()=>{
  turn0=true; //whatever the initial value given 
  enableboxes();
  msgContainer.classList.add('hide');
};


const enableboxes=()=>{
 for(let turn of boxes){
  turn.disabled = false; //enables the turn 
  turn.textContent = "";
 }
};      



const disableBoxes= () =>{
  for(let turn of boxes) {
    turn.disabled = true;
  }
}; 

const showWinner = (winner) => {
  msg.textContent  = `Congratulations , the winner ${winner}`  ; 
  msgContainer.classList.remove("hide"); //IMP NOW WE WANT OUR MESSAGE TO GET DISPLAYED.
  disableBoxes(); 
 };


const checkWinner = ()=>{   
 for(let pattern of winningPattern){   //for of loop iterates in valiues of array

    //  console.log(pattern[0], pattern[1],pattern[2]);  //pattern[0] refers to the first element of each sub-array 
    //  // yaani wo index i.e position hi bata rha hai
    //  console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]); //boxes[pattern[0]] sirf usko represent karega VALUE NHI dega

  let pos1Val = boxes[pattern[0]].textContent;   //on console.log this gives value;
  let pos2Val = boxes[pattern[1]].textContent;
  let pos3Val = boxes[pattern[2]].textContent;    // cannot directly write pattern[1].textContent because pattern[1] is just a number (an index), not an element.

  if( pos1Val !="" && pos2Val !="" && pos3Val !=""){
    if(pos1Val == pos2Val && pos2Val== pos3Val ){
       showWinner(pos1Val);
    }
  }  
 }
};


resetbtn.addEventListener('click',reset);
newGameBtn.addEventListener('click',reset);   //NEW GAME will work after  WINNER is declared. (as hided) 