function rollDice() {
    var dice = document.getElementById('dice').value;
    var result = Math.floor(Math.random() * dice) + 1;
    document.getElementById('result').innerText = result;
}
