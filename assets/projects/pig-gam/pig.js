// selecting Element
const player0=document.querySelector('.player--0');
const player1=document.querySelector('.player--1');
const seleEl0=document.querySelector('#score--0');
const seleEl1=document.querySelector('#score--1');
const seledice=document.querySelector('.dice');
const current0El=document.getElementById('current--0')
const current1El=document.getElementById('current--1')
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');


// start condition
seleEl0.textContent=0;
seleEl1.textContent=0;

seledice.classList.add('hidden');
let score ,currentscore,activeplayer,play;


const init=()=>{
    
 score=[0,0];
 currentscore=0;
 activeplayer=0;
 play=true;
    seledice.classList.add('hidden');
    seleEl0.textContent=0;
    seleEl1.textContent=0;
    current0El.textContent=0;
    current1El.textContent=0;
    player0.classList.remove('player--winer')
    player1.classList.remove('player--winer')
    player0.classList.add('player--active')
}
init()

const switchplayer=()=>{
    currentscore=0
    document.getElementById(`current--${activeplayer}`).textContent=currentscore;
    activeplayer= activeplayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}

btnRoll.addEventListener('click',()=>{
if(play){
 // 1. genrate the random dice roll
 const dice=Math.trunc(Math.random()*6)+1;
 console.log(dice);
 
     //2. Display dice
     seledice.classList.remove('hidden');
     seledice.src=`dice-${dice}.png`
 
     //3. Check For rolled one :if true, switch to next player
     if(dice!==1){
         currentscore +=dice;
 document.getElementById(`current--${activeplayer}`).textContent=currentscore;  
     }else{
         // swicht to next player
         switchplayer();
     }
}
   
});

btnHold.addEventListener('click',()=>{
    if(play){
// add current score to the active player
score[activeplayer]+=currentscore;
console.log(score[activeplayer]);


    document.getElementById(`score--${activeplayer}`).textContent=score[activeplayer];
    // check if the player is >=100
    if(score[activeplayer] >= 20){
play=false;
        document.querySelector(`.player--${activeplayer}`).classList.add('player--winer');
        document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
    }else{
    // switch to the next player 
    switchplayer();
    }
    // finesh the game 
    }
    


})

// reset all 
btnNew.addEventListener('click',()=>{
    // hidddiec
   init()
});