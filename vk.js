{
    "use strict";

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

    // button content
    let btnContent = [
        {}
    ];

    //add Big symbol to button
    function createDivGeneral() {
        let divGenBtn = document.createElement('div');
        buttonArr[0].append(divGenBtn);
        divGenBtn.classList.add('general-symbol');
        divGenBtn.innerHTML = '1' //create buttons
    }
    createDivGeneral();

    //add Little symbol to button
    function createDivSecondary() {
        let divSecondBtn = document.createElement('div');
        buttonArr[0].append(divSecondBtn);
        divSecondBtn.classList.add('secondary-symbol');
        divSecondBtn.innerHTML = '~' //create buttons
    }
    createDivSecondary();

    //console.log(buttonArr)




}