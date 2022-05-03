
    import { btnContent } from './modules/variables.js';
        // import {btnContent} from '/modules/variables';

    let fon = document.body.style.background = 'red';

    // create textarea
    let textArea = document.createElement('div');
    textArea.classList.add('text-area');
    document.body.append(textArea);

    // create block for buttons
    let keyBoardBlock = document.createElement('div');
    keyBoardBlock.classList.add('kb-block');
    document.body.append(keyBoardBlock);

    // create buttons
    let n  = 65;

    for (let i = 0; i < n; i++) {
        let div = document.createElement('div');
        keyBoardBlock.append(div);
        div.classList.add('btn') //create buttons
    }

    let buttonArr = []; //array of buttons
    let arr = document.getElementsByClassName('btn');
    // перекладываем элементы в другой массив
    for (let i = 0; i < arr.length; i++) {
        buttonArr.push(arr[i])
    }

    //add Big symbol to button
    function createDivGeneral() {
        let arrGenSym = [];
        for (let i = 0; i < buttonArr.length; i++) {
            arrGenSym.push(document.createElement('div'))
        }
        // add general symbol child 
        for (let i = 0; i < buttonArr.length; i++) {
            buttonArr[i].append(arrGenSym[i]);
        }
        // add styles to general symbol child 
        for (let j = 0; j < arrGenSym.length; j++) {
            arrGenSym[j].classList.add('general-symbol');
        }
        // add text to general symbol child 
        for(let k = 0; k < arrGenSym.length; k++) {
            arrGenSym[k].setAttribute('gen', 'gen');
            arrGenSym[k].innerHTML = btnContent[k]['gen'];
        }
    }
    createDivGeneral();

    //add Little symbol to button
    function createDivSecondary() {
        let arrSecSym = [];
        for (let i = 0; i < buttonArr.length; i++) {
            arrSecSym.push(document.createElement('div'))
        }
        for (let i = 0; i < buttonArr.length; i++) {
            buttonArr[i].append(arrSecSym[i]);
            
        }
        for (let i = 0; i < arrSecSym.length; i++) {
            arrSecSym[i].classList.add('secondary-symbol');
        }
        for(let i = 0; i < arrSecSym.length; i++) {
            arrSecSym[i].setAttribute('sec', 'sec');
            arrSecSym[i].innerHTML = btnContent[i]['sec'];
        }
    }
    createDivSecondary();

    //console.log(buttonArr)
    //console.log(btnContent.length)




