const selectBtns = document.querySelectorAll(".select-btn");
const playerNames = document.querySelectorAll(".player-name");
const playerInput = document.getElementById("player");
const managerInput = document.getElementById("manager");
const coachInput = document.getElementById("coach");
const calculateBtn = document.getElementById("calculate");
const calculateTotalBtn = document.getElementById("calculate-total");
const playerExpense = document.getElementById("player-expense");
const totalExpense = document.getElementById("total-expense");

const selectedPlayerList = document.getElementById("selected-players");

let selectedPlayerCount = 0;

for (const selectBtn of selectBtns) {
  selectBtn.addEventListener("click", (event) => {
    selectedPlayerCount++;
    console.log(selectedPlayerCount);
    if (selectedPlayerCount > 5) {
      alert(`You Can't Add More Than 5 Players...`);
    } else {
      const selectedPlayer = getSelectedPlayer(event);
      selectedPlayerList.appendChild(selectedPlayer);
      event.target.style.backgroundColor = "#ecf0f1";
      event.target.style.color = "black";
      event.target.disabled = true;
    }
  });
}

calculateBtn.addEventListener("click", (event) => {
  if (playerInput.value == "" || selectedPlayerCount === 0) {
    alert("Enter amount & Select at least one player...");
  } else {
    const perPlayerExpense = +playerInput.value;
    let expense =
      selectedPlayerCount > 5
        ? 5 * perPlayerExpense
        : selectedPlayerCount * perPlayerExpense;
    playerExpense.innerText = `$${expense}`;
  }
});

calculateTotalBtn.addEventListener("click", (event) => {
  if (managerInput.value == "" || coachInput.value == "") {
    alert("Enter manager & coach salary...");
  } else {
    let perPlayerExpense = +playerInput.value;
    let playerExpense =
      selectedPlayerCount > 5
        ? 5 * perPlayerExpense
        : selectedPlayerCount * perPlayerExpense;
    let coachExpense = +coachInput.value;
    let managerExpense = +managerInput.value;

    let totalExpenses = playerExpense + managerExpense + coachExpense;
    totalExpense.innerText = `$${totalExpenses}`;
  }
});

function getSelectedPlayerName(event) {
  return event.target.parentElement.firstElementChild.innerText;
}

function getSelectedPlayer(event) {
  const playerName = getSelectedPlayerName(event);
  let player = document.createElement("li");
  player.classList.add("text-orange-300", "font-semibold");
  player.innerText = playerName;
  return player;
}
