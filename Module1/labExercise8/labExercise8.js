function rollDice() {
    // Get the number of sides from input field 
    var dice = document.getElementById('dice').value;
    // Generate 
    var result = Math.floor(Math.random() * dice) + 1;
    document.getElementById('result').innerText = result;
}
