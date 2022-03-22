function form () {
    const singlePlayButton = document.querySelector('#single-play');
    const formDisplay = document.querySelector('#form-container');
    singlePlayButton.addEventListener('click', () => {
        formDisplay.style.display = 'block';
    });

    const radio = document.querySelector('input[type=radio]:checked');

    const form = document.querySelector('#form'); //prevents page from reloading
    form.addEventListener('submit', function (event) {
        event.preventDefault();
    });

    const playerName = document.querySelector('.player-name');

    const closeForm = document.querySelector('#close');
    closeForm.addEventListener('click', () => {formDisplay.style.display = 'none'});

    function formSubmit() {
        if(playerName.value != '' && radio.value != '') {


            formDisplay.style.display = 'none';
    
            const inputs = document.querySelectorAll('.icon, #player-name');
            inputs.forEach(input => {
                input.value = '';
            });
        }
    }

    const submitButton = document.querySelector('#submit');
    submitButton.addEventListener('click', () => {
        formSubmit();
    });
}

const gameBoard = () => {
    let myArray = [];
    let playerName = '';
    
    const arrayDisplay = () => {
        for(let j = 1; j < 10; j++) {
            let result = '#box-'+j;
            const box = document.querySelector(result);
            box.textContent = myArray[j-1];
        }
    };

    const selection = () => {
        const buttons = document.querySelectorAll('.game-box');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                button.textContent = 'o';
                arrayPush();
                result();
            });
        });
    }

    const arrayPush = () => {
        for(let j = 1; j < 10; j++) {
            let result = '#box-'+j;
            const box = document.querySelector(result);
            myArray[j-1] = box.textContent;
        }
    }

    const closing = () => {
        const messageContainer = document.querySelector('#messageContainer');
        messageContainer.style.display = 'block';
        
        const message = document.querySelector('.message');
        message.textContent = 'you win';

        const closingButton = document.querySelector('#close-btn');
        closingButton.addEventListener('click', () => {location.reload();})
    }
    
    const result = () => {
        if (myArray[0] === 'o' && myArray[1] === 'o' && myArray[2] === 'o' ||
            myArray[3] === 'o' && myArray[4] === 'o' && myArray[5] === 'o' ||
            myArray[6] === 'o' && myArray[7] === 'o' && myArray[8] === 'o' ||
            myArray[0] === 'o' && myArray[3] === 'o' && myArray[6] === 'o' ||
            myArray[1] === 'o' && myArray[4] === 'o' && myArray[7] === 'o' ||
            myArray[2] === 'o' && myArray[5] === 'o' && myArray[8] === 'o' ||
            myArray[0] === 'o' && myArray[4] === 'o' && myArray[8] === 'o' ||
            myArray[6] === 'o' && myArray[4] === 'o' && myArray[2] === 'o') {
            closing();

        }
    }

    return {arrayDisplay, selection, result};
};

const gam = gameBoard();
gam.arrayDisplay();
gam.selection();
gam.result();