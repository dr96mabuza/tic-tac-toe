const gameBoard = () => {
    let myArray = [];
    
    const form = () => {
        const singlePlayButton = document.querySelector('#single-play');
        const formDisplay = document.querySelector('#form-container');
        singlePlayButton.addEventListener('click', () => {
            formDisplay.style.display = 'block';
        });
    
        let radio = document.querySelector('input[type=radio]:checked');
    
        const form = document.querySelector('#form'); //prevents page from reloading
        form.addEventListener('submit', function (event) {
            event.preventDefault();
        });
    
        const closeForm = document.querySelector('#close');
        closeForm.addEventListener('click', () => {formDisplay.style.display = 'none'});
    
        function formSubmit() {
            if( radio.value != '') {
    
                selection(radio.value);
                formDisplay.style.display = 'none';
        
                const input = document.querySelectorAll('.icon');
                input.value = '';

            }
        }
    
        const submitButton = document.querySelector('#submit');
        submitButton.addEventListener('click', () => {
            formSubmit();
        });
    };

    const arrayDisplay = () => {
        for(let j = 1; j < 10; j++) {
            let result = '#box-'+j;
            const box = document.querySelector(result);
            box.textContent = myArray[j-1];
        }
    };

    const selection = (entry) => {
        let save = entry;
        
        const buttons = document.querySelectorAll('.game-box');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                if (button.textContent === '' && save === 'X'){
                    button.textContent = save;
                    arrayPush();
                    result();
                    console.log(myArray);
                    return save = 'O';
                } else if (button.textContent === '' && save === 'O'){
                    button.textContent = save;
                    arrayPush();
                    result();
                    console.log(myArray);
                    return save = 'X';
                }
            });

        });
    };

    const arrayPush = () => {
        for(let j = 1; j < 10; j++) {
            let result = '#box-'+j;
            const box = document.querySelector(result);
            myArray[j-1] = box.textContent;
        }
        result();
        arrayDisplay();
    };

    const result = () => {
        if (myArray[0] === 'X' && myArray[1] === 'X' && myArray[2] === 'X' ||
            myArray[3] === 'X' && myArray[4] === 'X' && myArray[5] === 'X' ||
            myArray[6] === 'X' && myArray[7] === 'X' && myArray[8] === 'X' ||
            myArray[0] === 'X' && myArray[3] === 'X' && myArray[6] === 'X' ||
            myArray[1] === 'X' && myArray[4] === 'X' && myArray[7] === 'X' ||
            myArray[2] === 'X' && myArray[5] === 'X' && myArray[8] === 'X' ||
            myArray[0] === 'X' && myArray[4] === 'X' && myArray[8] === 'X' ||
            myArray[6] === 'X' && myArray[4] === 'X' && myArray[2] === 'X') {
            
            closing('Congragulations! X is the win!');

        } else if (myArray[0] === 'O' && myArray[1] === 'O' && myArray[2] === 'O' ||
        myArray[3] === 'O' && myArray[4] === 'O' && myArray[5] === 'O' ||
        myArray[6] === 'O' && myArray[7] === 'O' && myArray[8] === 'O' ||
        myArray[0] === 'O' && myArray[3] === 'O' && myArray[6] === 'O' ||
        myArray[1] === 'O' && myArray[4] === 'O' && myArray[7] === 'O' ||
        myArray[2] === 'O' && myArray[5] === 'O' && myArray[8] === 'O' ||
        myArray[0] === 'O' && myArray[4] === 'O' && myArray[8] === 'O' ||
        myArray[6] === 'O' && myArray[4] === 'O' && myArray[2] === 'O') {
        
        closing('Congragulations! O is the win!');

        } else if (myArray[0] != '' && myArray[1] != '' && myArray[2] != '' &&
        myArray[3] != '' && myArray[4] != '' && myArray[5] != '' &&
        myArray[6] != '' && myArray[7] != '' && myArray[8] != '' ) {
            closing('Game is a TIE');
        }
    }

    const closing = (winner) => {
        const messageContainer = document.querySelector('#messageContainer');
        messageContainer.style.display = 'block';
        
        const message = document.querySelector('.message');
        message.textContent = winner;

        const closingButton = document.querySelector('#close-btn');
        closingButton.addEventListener('click', () => {location.reload();})
    }

    return {form};
};

const game = gameBoard();
game.form();
