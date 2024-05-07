let scores = [0, 0]; // player_1_score and player_2_score
let current_player = 0; // 0 for player_1, 1 for player_2
let current_roll_value = 0; // Value of current roll for the current player
let player_1_div = document.getElementsByClassName("player1")[0]; // Div for player 1
let player_2_div = document.getElementsByClassName("player2")[0]; // Div for player 1
player_1_div.style.boxShadow = "rgb(0, 255, 0)";
player_2_div.style.boxShadow = "none";

function roll_dice(player) {
    if (player !== current_player + 1) return; // Ensure it's the current player's turn

    const dice_value = Math.floor(Math.random() * 6) + 1; // Generate random dice value (1-6)
    current_roll_value = dice_value; // Update current roll value
    const score_display = document.getElementById(`score_${player}`);
    const total_score_display = document.getElementById(`total_score_${player}`);
    const current_roll_display = document.getElementById(`current_roll_${player}`);

    if (dice_value === 1) {
        score_display.textContent = '0'; // Update player's score display
        current_roll_display.textContent = '-'; // Reset current roll display
        switchPlayer(); // Switch to the next player
    } else {
        score_display.textContent = parseInt(score_display.textContent) + dice_value; // Update player's score for this roll
        current_roll_display.textContent = dice_value; // Display current roll value
    }
}

function cash_in(player) {
    if (player !== current_player + 1) return; // Ensure it's the current player's turn

    const score_display = document.getElementById(`score_${player}`);
    const total_score_display = document.getElementById(`total_score_${player}`);
    const current_roll_display = document.getElementById(`current_roll_${player}`);

    scores[player - 1] += parseInt(score_display.textContent); // Add total roll value to total score
    total_score_display.textContent = scores[player - 1]; // Update player's total score

    // Check for win after updating the total score
    winCheck(player);

    // Reset score display and current roll display
    score_display.textContent = '0';
    current_roll_display.textContent = '-';
    
    // Switch to the next player
    switchPlayer();
}


function switchPlayer() {
    current_player = current_player === 0 ? 1 : 0; // Switch to the next player

    if (current_player === 0) {
        player_1_div.style.boxShadow = "0px 0px 10px rgba(0, 255, 0)";
        player_1_div.style.scale = "1.05";
        player_2_div.style.boxShadow = "none";
        player_2_div.style.scale = "1";
    }
    else {
        player_2_div.style.boxShadow = "0px 0px 10px rgba(0, 255, 0)";
        player_2_div.style.scale = "1.05";
        player_1_div.style.boxShadow = "none";
        player_1_div.style.scale = "1";
    }
}

function restartGame() {
    scores = [0, 0]; // Reset scores for both players
    current_player = 0; // Reset current player to player 1
    current_roll_value = 0; // Reset current roll value

    // Update score displays for both players
    document.getElementById('score_1').textContent = '0';
    document.getElementById('score_2').textContent = '0';

    // Update total score displays for both players
    document.getElementById('total_score_1').textContent = '0';
    document.getElementById('total_score_2').textContent = '0';

    // Reset current roll display for both players
    document.getElementById('current_roll_1').textContent = '-';
    document.getElementById('current_roll_2').textContent = '-';

    // Reset player styles
    player_1_div.style.boxShadow = "0px 0px 10px rgba(0, 255, 0)";
    player_1_div.style.scale = "1.05";
    player_2_div.style.boxShadow = "none";
    player_2_div.style.scale = "1";
}

function winCheck(player) {
    // Check if won.
    if (scores[player-1] >= 100) {
        const winTextElement = document.querySelector('.winText'); // Select the element with class 'winText'
        
        // Update the innerHTML of the winTextElement to display the win message
        winTextElement.innerHTML = `PLAYER ${player} HAS WON!`;

        // Display the win container
        const winContainer = document.querySelector('.winContainer');
        winContainer.style.display = 'flex';
    }

}

function goToHomePage() {
    window.location.href = "index.html";
}

function restartGameWin() {
    scores = [0, 0]; // Reset scores for both players
    current_player = 0; // Reset current player to player 1
    current_roll_value = 0; // Reset current roll value

    // Update score displays for both players
    document.getElementById('score_1').textContent = '0';
    document.getElementById('score_2').textContent = '0';

    // Update total score displays for both players
    document.getElementById('total_score_1').textContent = '0';
    document.getElementById('total_score_2').textContent = '0';

    // Reset current roll display for both players
    document.getElementById('current_roll_1').textContent = '-';
    document.getElementById('current_roll_2').textContent = '-';

    // Reset player styles
    player_1_div.style.boxShadow = "0px 0px 10px rgba(0, 255, 0)";
    player_1_div.style.scale = "1.05";
    player_2_div.style.boxShadow = "none";
    player_2_div.style.scale = "1";

    document.getElementsByClassName('winContainer')[0].style.display = "none";
}