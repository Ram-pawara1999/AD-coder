console.log('This my dublicate typing master');
setOfWords = [
    "This is my first programing Language",
    "Tere bina jidagi jina na lage ji ne na lage ak Pyar ka nagma he.",
    "teri meri kahani ye bari show ko pani",
    "kese ho bhai yo kya hal",
    "my next Progaming backend language are Node.js",
    "And I am very excited for learn Node.js backend Language",
    "I like you and your dole baby"
]


const msg = document.getElementById('msg');
const typeWords = document.getElementById('mywords');
const btn = document.getElementById('btn');
let startTime, endTime;


function playGame() {
    let randomNumber = Math.floor(Math.random() * setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    btn.innerText = 'Done';
    let date = new Date();
    startTime = date.getTime();
    console.log(startTime)
}

function endPlay() {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime) / 1000);
    let typestr = typeWords.value;
    let strLength = wordCounter(typestr);
    let speed = Math.round((strLength / totalTime) * 60);
    // console.log(speed);
    let finalMsg = 'Your typed total at ' + speed + ' word per minute';

    finalMsg += compareWords(msg.innerText, typestr);
    msg.innerText = finalMsg;

}

function compareWords(str1, str2) {
    let word1 = str1.split(' ');
    let word2 = str2.split(' ');
    let cnt = 0;

    // arrayName then foreach then it will take whole function with value and index no. of that array
    word1.forEach((item , index)=> {
        if(item == word2[index]){
            cnt++;
        }
    });
    let errorwords = (word1.length - cnt);
    return (' '+cnt + " correct out of  " + word1.length + " word and the total number of error are "  + errorwords +'.');

}

function wordCounter(str) {
    let response = str.split(' ').length;
    return response;
}

btn.addEventListener('click', function () {
    if (this.innerText == 'Start') {
        mywords.disabled = false;
        playGame();
    }
    else if (this.innerText == 'Done') {
        typeWords.disabled = true;
        this.innerText = 'Start';
        endPlay();
    }
});