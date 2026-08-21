const prizePoolInput = document.getElementById("prizePool");
const playersInput = document.getElementById("players");
const entryCostInput = document.getElementById("entryCost");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

function calculateValue() {
  const prizePool = parseFloat(prizePoolInput.value);
  const players = parseInt(playersInput.value, 10);
  const entryCost = parseFloat(entryCostInput.value) || 0;

  if (isNaN(prizePool) || prizePool <= 0) {
    result.textContent = "Please enter a valid prize pool.";
    return;
  }

  if (isNaN(players) || players <= 0) {
    result.textContent = "Please enter a valid number of players.";
    return;
  }

  if (entryCost < 0) {
    result.textContent = "Entry cost cannot be negative.";
    return;
  }

  const averagePrizeValue = prizePool / players;
  const estimatedValue = averagePrizeValue - entryCost;

  let valueLabel = "";

  if (estimatedValue > 0) {
    valueLabel = "Positive estimated value";
  } else if (estimatedValue === 0) {
    valueLabel = "Neutral estimated value";
  } else {
    valueLabel = "Negative estimated value";
  }

  result.innerHTML = `
    Average prize pool per player:
    <strong>$${averagePrizeValue.toFixed(2)}</strong><br>
    Entry cost:
    <strong>$${entryCost.toFixed(2)}</strong><br>
    Estimated value:
    <strong>$${estimatedValue.toFixed(2)}</strong><br>
    ${valueLabel}
  `;
}

calculateBtn.addEventListener("click", calculateValue);
