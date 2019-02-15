let game = `
  <main class='container-fluid text-center'>
    <div class="row">
      <div class="col-sm-4">
        <div class="card bg-dark text-dark">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxRn1Hdw14AL-kU3LY_iyKm4wpuOkFJ0D3J-XQgxGj1E9mV_MgkQ" class="card-img" alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbvEjP3PGcpEwVZ6ylBV-v2bGs0sTL9CFSVlJh5LVhQ5bK72IHHw"/>
          <div class="card-img-overlay">
            <h5 class="card-title">ROCK</h5>
            <button type="button" class="btn btn-primary btn-lg btn-block" onclick="play('rock')">Choose Rock</button>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card bg-dark text-white">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFLm1mmdHISvRFe6abu0-EXQTtwEgokslgMYQDQZpGCb3JVFuhkQ" class="card-img" alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzy26RzG9K6BqiURG8L3eTgGF5owqUK9ZRu2_8P0sdGJzZ3Rqh"/>
          <div class="card-img-overlay">
            <h5 class="card-title">PAPER</h5>
            <button type="button" class="btn btn-primary btn-lg btn-block" onclick="play('paper')">Choose Paper</button>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card bg-dark text-dark">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUmRcRltxDD1hNaMFNOPsS5Skd_Tt9-vdIrBPxvRvTbly-apzW" class="card-img" alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhcdZ_nB7W-Z4jcFOSafALuInFe-1SazlkGQs1atf8UGpSyXIRGA"/>
          <div class="card-img-overlay">
            <h5 class="card-title">SCISSORS</h5>
            <button type="button" class="btn btn-primary btn-lg btn-block" onclick="play('scissors')">Choose Scissors</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-4 offset-2">
        <div class="card bg-dark text-dark">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRak2WVwwIEur5EsTkR05CwWzniFoTjyN2IupGPioFmiBCw3_FgZQ" class="card-img" />
          <div class="card-img-overlay">
            <h5 class="card-title">LIZARD</h5>
            <button type="button" class="btn btn-primary btn-lg btn-block" onclick="play('lizard')">Choose Lizard</button>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card bg-dark text-dark">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtHMuPeorldRC5hoT0N2cVWqkwKTYhnLUZV_9xBjdK0bDmAYQT6Q" class="card-img" />
          <div class="card-img-overlay">
            <h5 class="card-title">SPOCK</h5>
            <button type="button" class="btn btn-primary btn-lg btn-block" onclick="play('spock')">Choose Mr. Spock</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <h2>Won</h2>
            <h2 id="won"><h2>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <h2>Lost</h2>
            <h2 id="lost"></h2>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h2 id="result">Results</h2>
            <button type="button" class="btn btn-danger btn-lg" onClick="window.location.reload()">RESET</button>
          </div>
        </div>
      </div>
    </div>
  </main>
`

let appElem = document.getElementById("app")
appElem.innerHTML = game

let choice = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let won = 0;
let lost = 0;

function play(playerChoice) {
  let computerChoice = choice[(Math.floor(Math.random() * 5))];
  var result = "";
  let winner = {
    rock: 'scissors' || 'lizard',
    paper: 'rock' || 'spock',
    scissors: 'paper' || 'lizard',
    lizard: 'paper' || 'spock',
    spock: 'rock' || 'scissors'
  }
  if (playerChoice == computerChoice) {
    result = `<h5> You chose ${playerChoice}, computer chose ${computerChoice}. Looks like a tie.</h5>`;
  } else if (playerChoice == 'paper' && computerChoice == 'rock' || 'spock') {
    result = "<h2>You Won!!!</h2>";
    won++;
  } else if (playerChoice == 'rock' && computerChoice == 'scissors' || 'lizard') {
    result = "<h2>You Won!!!</h2>";
    won++;
  } else if (playerChoice == 'scissors' && computerChoice == 'paper' || 'lizard') {
    result = "<h2> You Won!!! </h2>";
    won++;
  } else if (playerChoice == 'lizard' && computerChoice == 'paper' || 'spock') {
    result = "<h2>You Won!!!</h2>";
    won++;
  } else if (playerChoice == 'spock' && computerChoice == 'scissors' || 'rock') {
    result = "<h2> You Won!!! </h2>";
    won++;
  } else {
    result = "<h2>You lose</h2>";
    lost++;
  }
  document.getElementById("won").innerHTML = won.toString();
  document.getElementById("lost").innerHTML = lost.toString();
  document.getElementById("result").innerHTML = result
  console.log("player choice: ", playerChoice, "computer choice: ", computerChoice, "result: ", result)
}