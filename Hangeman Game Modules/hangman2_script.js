import {categories ,hints, resetGame} from './hangman_module.js';


var word, guessedLetters, lives, timer, interval;

window.startGame=function startGame(category){
    const selectedWordIndex = Math.floor(Math.random() * categories[category].length);
    word = categories[category][selectedWordIndex];
    guessedLetters=[];
    lives=7;
    timer=30; //30 seconds
    document.getElementById('category-selection').style.display='none';
    document.getElementById('game-area').style.display='block';
    document.getElementById('play-again').style.display = 'none';
    document.getElementById('hint').innerText = hints[category][selectedWordIndex];;
    updateWordDisplay();
    updateHangmanImage();
    document.getElementById('lives').innerText = lives;
    generateAlphaButtons(); 
    startTimer();
}

function updateWordDisplay(){
    var displayWord = word.split('').map(function(letter){
        return guessedLetters.includes(letter)?letter:'_'
    }).join(' ');
    document.getElementById('word-display').innerText = displayWord;
}

function generateAlphaButtons(){
    var alphaButtons = document.getElementById('alphabet-buttons');

    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    alphabet.forEach(function(letter){
       var button = document.createElement('button');
        button.innerText = letter;
        button.id = letter;
        button.onclick= () =>handleGuess(letter);
        alphaButtons.appendChild(button);
    });
}

function handleGuess(letter){
    var button = document.getElementById(letter);
    button.disabled = true;
    button.style.backgroundColor = '#ffff'; 
    guessedLetters.push(letter);

    if (word.includes(letter)) {
        updateWordDisplay();
        checkWinCondition();
        timer=30;
        document.getElementById('timer').innerText = timer;
    } else {
        lives--;
        document.getElementById('lives').innerText = lives;
        checkLoseCondition();
        if(lives>0){
            timer=30;
            document.getElementById('timer').innerText = timer;
        }  
    }
    updateHangmanImage();
}


function checkWinCondition() {
    var checkingWord = document.getElementById('word-display').innerText.includes('_');
    if (!checkingWord) {
        document.getElementById('message').innerText = 'Well Done!';
        lives=-1;
        endGame();

    }
}


function gameTimer(){
    timer--;
    document.getElementById('timer').innerText = timer;
    if (timer <= 0) {
        clearInterval(interval);
        lives--;
        document.getElementById('lives').innerText = lives;
        checkLoseCondition();
        if(lives>0){
            timer=30;
            document.getElementById('timer').innerText = timer;
            startTimer()
        }

    }

}

function startTimer() {
    interval = setInterval(gameTimer, 1000);    
}

function checkLoseCondition() {
    if (lives <= 0) {
        document.getElementById('message').innerText = `Game Over! The word was: ${word}`;
        endGame();
        
    }
}

function endGame() {
    clearInterval(interval);
    var buttons = document.getElementById('alphabet-buttons').getElementsByTagName('button');
    for (let button of buttons) {
        button.disabled = true;
    }   
    document.getElementById('play-again').style.display = 'block';
    timer=30;
    document.getElementById('timer').innerText = timer;
    
}
window.resetGame = resetGame;


function updateHangmanImage() {
    document.getElementById('initial').style.display = 'none';
    for (let i = 1; i <= 8; i++) {
        document.getElementById(`hangman-${i}`).style.display = 'none';
    }
    switch (lives) {
        case 7:
            document.getElementById('initial').style.display = 'block';
            break;
        case 6:
            document.getElementById('hangman-1').style.display = 'block';
            break;
        case 5:
            document.getElementById('hangman-2').style.display = 'block';
            break;
        case 4:
            document.getElementById('hangman-3').style.display = 'block';
            break;
        case 3:
            document.getElementById('hangman-4').style.display = 'block';
            break;
        case 2:
            document.getElementById('hangman-5').style.display = 'block';
            break;
        case 1:
            document.getElementById('hangman-6').style.display = 'block';
            break;
        case 0:
            document.getElementById('hangman-7').style.display = 'block';
            break;
        case -1:
            document.getElementById('hangman-8').style.display = 'block';
            break;
        default:
            console.error('Invalid lives value');
    }
}
