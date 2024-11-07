let gameseq =[];
let userseq =[];

let start = false;
let level =0;

let btns = ["red", "orange", "green" , "blue"];


let h2 =document.querySelector("h2");

document.addEventListener("keypress" ,function(){
  if(start == false){
    console.log("started");
    start = true;
  }
   

  levelup();
   
 })
 
function levelup(){
  userseq =[];
 level++;
 h2.innerText = `Level ${level}`;

 let randidx = Math.floor(Math.random()*3);
 let randcolor = btns[randidx];
 let rabdbtn = document.querySelector(`.${randcolor}`);
 gameseq.push(randcolor);
 console.log(gameseq)
 btnflash(rabdbtn);


}


function btnflash(btn){
 btn.classList.add("flash");
 setTimeout ( function() {
  btn.classList.remove("flash");
 } , 250)
 }


function userflash(btn){
 btn.classList.add("userflash");
 setTimeout ( function() {
  btn.classList.remove("userflash");
 } , 250)
 }


function btnpress(){
 let btn = this;
 userflash(btn);
 //-----------------
 let usercolor = btn.getAttribute("id");
 userseq.push(usercolor)
 console.log(userseq)
 checkans(userseq.length-1);
}

 let allbtn = document.querySelectorAll('.btn');

 for(btn of allbtn){
  btn.addEventListener("click", btnpress);
 }

 function checkans(idx){
  // console.log(`cur level : ${level}`)
 
   if(userseq[idx] == gameseq[idx]){
   if(userseq.length ==gameseq.length){
   setTimeout(levelup , 1000);
   }
   } else{
    h2.innerHTML = `game over! Your score was <b>${level}</b> <br> Press any key to restart`;
    document.querySelector("body").style.backgroundColor="red";
      hscore();
    setTimeout(function (){
      document.querySelector("body").style.backgroundColor="white";
    }, 250)
    reset();
   }
    
 }

 let highscore = 0;
 let high= document.createElement("h1");
 function hscore(){
  let currsore = level;

    if(highscore <=currsore){
      highscore = currsore;
      high.innerText= `Highest Score ${highscore}`;
      
      document.querySelector("body").append(high);
    }
 }
 function reset(){
  start = false;
  currsore = 0;
  level = 0;
  gameseq = [];
  p.remove();

 }
 

 let li = document.createElement("li");
 li.innerText =inp.value;
 ul.appendChild(li);