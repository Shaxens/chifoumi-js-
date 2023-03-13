let user_count = 0;
let computer_count = 0;
  
  function getUserChoice(choice) {
    let userChoice = choice.innerHTML;
    return [userChoice, computerChoice()];
  }


  function computerChoice() {
    let chifoumi = ["Pierre", "Feuille", "Ciseaux"];
    
    let randomIndex = Math.floor(Math.random() * 3);
    return chifoumi[randomIndex];
  }


  function result(choice) {
    let result = getUserChoice(choice);

    userWin = `Le joueur gagne`
    computerWin = `L'ordinateur gagne`
    equality = `Egalité`

    console.log(result)
    if (result[0] === "Pierre" && result[1] === "Ciseaux") {
      document.querySelector("#result").innerHTML =  userWin;
      user_count++;
    } else if (result[0] === "Pierre" && result[1] === "Feuille") {
      document.querySelector("#result").innerHTML =  computerWin;
      computer_count++;
    } else if (result[0] === "Feuille" && result[1] === "Ciseaux") {
      document.querySelector("#result").innerHTML =  computerWin;
      computer_count++;
    } else if (result[0] === "Feuille" && result[1] === "Pierre") {
      document.querySelector("#result").innerHTML =  userWin;
      user_count++;
    } else if (result[0] === "Ciseaux" && result[1] === "Feuille") {
      document.querySelector("#result").innerHTML =  userWin;
      user_count++;
    } else if (result[0] === "Ciseaux" && result[1] === "Pierre") {
      document.querySelector("#result").innerHTML =  computerWin;
      computer_count++;
    } else {
      document.querySelector("#result").innerHTML =  equality;
    }

    if (document.querySelectorAll(".grayscale")) {
      const elements = document.querySelectorAll(".grayscale");
      elements.forEach(elt => {
        elt.classList.remove('grayscale');
      });
      
    }


    showChoices(result[0], "user")
    showChoices(result[1], "computer")
    scoreboard(user_count ,computer_count);
  }

  function showChoices(result, resultId) {

    if (result === "Ciseaux") {
      document.querySelector('#'+ resultId + '-result').src = "./img/MeatGrinder.png";
      document.querySelector('#' + resultId + '-result-hover').src = "./img/MeatGrinderHover.png";
    } else if (result === "Pierre") {
      document.querySelector('#'+ resultId + '-result').src = "./img/RockElemental.png";
      document.querySelector('#' + resultId + '-result-hover').src = "./img/RockElementalHover.png";
    } else if (result === "Feuille"){
      document.querySelector('#'+ resultId + '-result').src = "./img/Spawnpool.png";
      document.querySelector('#' + resultId + '-result-hover').src = "./img/SpawnpoolHover.png";
    }

  }


  function scoreboard(user_count, computer_count) {

    document.querySelector('#playerScore').innerHTML = user_count;
    document.querySelector('#computerScore').innerHTML = computer_count;
  }