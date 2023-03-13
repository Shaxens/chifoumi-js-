
  
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
    } else if (result[0] === "Pierre" && result[1] === "Feuille") {
      document.querySelector("#result").innerHTML =  computerWin;
    } else if (result[0] === "Feuille" && result[1] === "Ciseaux") {
      document.querySelector("#result").innerHTML =  computerWin;
    } else if (result[0] === "Feuille" && result[1] === "Pierre") {
      document.querySelector("#result").innerHTML =  userWin;
    } else if (result[0] === "Ciseaux" && result[1] === "Feuille") {
      document.querySelector("#result").innerHTML =  userWin;
    } else if (result[0] === "Ciseaux" && result[1] === "Pierre") {
      document.querySelector("#result").innerHTML =  computerWin;
    } else {
      document.querySelector("#result").innerHTML =  equality;
    }

    showUserChoice(result[0]);
    showComputerChoice(result[1]);
  }


  function showComputerChoice(result) {

    if (result === "Ciseaux") {
      document.querySelector('#computer-result').src = "./img/MeatGrinder.png";
      document.querySelector('#computer-result-hover').src = "./img/MeatGrinderHover.png";
    } else if (result === "Pierre") {
      document.querySelector('#computer-result').src = "./img/RockElemental.png";
      document.querySelector('#computer-result-hover').src = "./img/RockElementalHover.png";
    } else if (result === "Feuille"){
      document.querySelector('#computer-result').src = "./img/Spawnpool.png";
      document.querySelector('#computer-result-hover').src = "./img/SpawnpoolHover.png";
    }

  }

  function showUserChoice(result) {

    if (result === "Ciseaux") {
      document.querySelector('#user-result').src = "./img/MeatGrinder.png";
      document.querySelector('#user-result-hover').src = "./img/MeatGrinderHover.png";
    } else if (result === "Pierre") {
      document.querySelector('#user-result').src = "./img/RockElemental.png";
      document.querySelector('#user-result-hover').src = "./img/RockElementalHover.png";
    } else if (result === "Feuille"){
      document.querySelector('#user-result').src = "./img/Spawnpool.png";
      document.querySelector('#user-result-hover').src = "./img/SpawnpoolHover.png";
    }

  }