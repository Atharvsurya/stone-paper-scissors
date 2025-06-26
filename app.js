let scoreself=0;
let scorecomp=0;
const choices = document.querySelectorAll(".images img");
let lastCompChoice = null;

function getSmartRandomChoice() {
  const options = ["rock", "paper", "scissors"];
  let choice;
  do {
    comp = options[Math.floor(Math.random() * 3)];
  } while (comp === lastCompChoice);
  lastCompChoice = comp;
  return comp;
}
const play =(self)=>{
    comp=getSmartRandomChoice();
    if(self===comp){
        document.getElementById("result").innerHTML = "It was a draw";
        document.getElementById("result").style.backgroundColor = "black";
    }
    else if((self === "rock" && comp === "scissors") ||
    (self === "paper" && comp === "rock") ||
    (self === "scissors" && comp === "paper")){
        scoreself++;
        document.getElementById("result").innerHTML = "You Win!! Your "+self+" beats "+comp;
        document.getElementById("selfscore").innerHTML =scoreself;
        document.getElementById("result").style.backgroundColor = "green";
    }
    else{
        scorecomp++;
        document.getElementById("result").innerHTML = "You lose!! "+comp+" beats your "+self;
        document.getElementById("compscore").innerHTML =scorecomp;
        document.getElementById("result").style.backgroundColor = "red";
    }
};

choices.forEach((element) => {
      element.addEventListener("click", () => {
        const userChoice = element.getAttribute("id");
        play(userChoice);
      });
    });