    import { btnContent } from './modules/variables.js';
    
    let RuEn = document.getElementsByClassName('general-symbol');

    window.onload = function() {
        if (localStorage.lang == 'true') {
            changeLanguage();
        }
    };
    
    let count = 0;
    let arrText = [];
    let arrTextUp = [];
    let strText = '';
    let counterCaps = 0;
 
    //let enterInd = [];

   

    // create textarea
    let textArea = document.createElement('div');
    let formText = document.createElement('form');
    let textAreaIntoForm = document.createElement('textarea');

    textArea.classList.add('text-area');
    document.body.append(textArea);
    formText.append(textAreaIntoForm);
    textArea.append(formText);


    textAreaIntoForm.setAttribute('name', 'text');
    textAreaIntoForm.setAttribute('id', 'inputWindow');
    //console.log(textAreaIntoForm)
    //textAreaIntoForm.setAttribute('name', 'text')

    // create block for buttons
    let keyBoardBlock = document.createElement('div');
    keyBoardBlock.classList.add('kb-block');
    document.body.append(keyBoardBlock);

    // create buttons
    let n  = 70;

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
            if (btnContent[i]['sec'] == undefined || btnContent[i]['sec'] == null) {
                arrSecSym[i].removeAttribute('sec');
                arrSecSym[i].innerHTML = '';
            }
        }
    }
    createDivSecondary();

    // add id
    function setIdAttribute() {
        for (let i = 0; i < buttonArr.length; i++) {
            buttonArr[i].setAttribute('id', `${i}`);
        }
    }
    setIdAttribute();

    let gs = document.getElementsByClassName('general-symbol');
    let ss = document.getElementsByClassName('secondary-symbol');

    // styles
    let arrLeft = document.getElementById('67');
    arrLeft.style.transform = "rotate(90deg)";

    let arrRight = document.getElementById('69');
    arrRight.style.transform = "rotate(270deg)";

    let arrUp = document.getElementById('54');
    let arrDn = document.getElementById('68');

    let capsLock = document.getElementById('28');
    
    
    function counterCapsLockClick() {
        counterCaps +=1;
        console.log(counterCaps);
        if (counterCaps % 2 !== 0) {
            document.getElementById('28').classList.add('backCapsLock');
        }
        if (counterCaps % 2 === 0) {
            document.getElementById('28').classList.remove('backCapsLock');
        }
    }
   
    // add symbols by click
    keyBoardBlock.onclick = f;
    function f(event) {
        textAreaIntoForm.focus();

        let td = event.target.closest('.btn'); 
        let tdID = td.getAttribute('id');
        let char = btnContent[tdID].gen;

       

        if (gs[18].classList.contains('changeLangGen') || ss[22].classList.contains('changeLangSec') ) {
            if (btnContent[tdID].sec == undefined) {
            }
            else {
                char = btnContent[tdID].sec;
            }
        }
        
        if (!td) {
            arrText.push('');
        }; 
        if (char.length > 1) {
            if (char == 'RU' || char == 'EN') {
                changeLanguage();
                reaIntoForm.value = arrText.join('');
            }
            if (char == 'SHIFT') {
                char = btnContent[tdID].sym;
                arrText.push(char.toLowerCase());
                textAreaIntoForm.value = arrText.join('');
            }
            if (char == 'Tab') {
                char = btnContent[tdID].sym;
                arrText.push(char.toLowerCase());
                textAreaIntoForm.value = arrText.join('');
            }
            if (char == 'Back space') {
                char = btnContent[tdID].sym;
                arrText.pop();
                textAreaIntoForm.value = arrText.join('');
            }
            if (char == 'ENTER') {
                char = btnContent[tdID].sym;
                arrText.push(char.toLowerCase());
                textAreaIntoForm.value = arrText.join('');
            }
            if (char == 'DEL') {
                char = btnContent[tdID].sym;
                arrText.pop();
                textAreaIntoForm.value = arrText.join('');
            }
            if (char == 'Caps Lock') {
                char = '';
                textAreaIntoForm.value = arrText.join('');
            }
            if (char == btnContent[67].gen) {
                // arrow <-
                char = '';
                textAreaIntoForm.value = arrText.join('');
                textAreaIntoForm.focus();
                
                let caretPos = arrText.length - count;

                if (count > arrText.length) {
                    caretPos = 0;
                    count = 0;
                }
                textAreaIntoForm.setSelectionRange(caretPos, caretPos);
            }
            if (char == btnContent[69].gen) {
                // arrow ->
                char = '';
                textAreaIntoForm.value = arrText.join('');
                textAreaIntoForm.focus();
                
                let caretPos = arrText.length + count;

                console.log(count)
                if (count > arrText.length) {
                    caretPos = arrText.length;
                    count = arrText.length;
                }
                textAreaIntoForm.setSelectionRange(caretPos, caretPos);
            }
            if (char == btnContent[54].gen) {
                // arrow UP
                char = '';
                textAreaIntoForm.value = arrText.join('');
                textAreaIntoForm.focus();
                
                let enterInd = [];
                for(let i = 0; i < arrText.length; i++) {
                    if (arrText[i] == '\n') {
                        enterInd[i] = i;
                    }
                }
                enterInd = enterInd.filter(function (el) {
                    return (el != null && el != "" || el === 0);
                });
                
                enterInd = enterInd.reverse();

                let caretPos = enterInd[count - 1] - (arrText.length - enterInd[count - 1]);//count;
 
            
                if (caretPos <= 0) {
                    caretPos = 0;
                }
                textAreaIntoForm.setSelectionRange(caretPos, caretPos);
            }
            if (char == btnContent[54].gen) {
                // arrow Down
                char = '';
                textAreaIntoForm.value = arrText.join('');
                textAreaIntoForm.focus();
                
                let enterInd = [];
                for(let i = 0; i < arrText.length; i++) {
                    if (arrText[i] == '\n') {
                        enterInd[i] = i;
                    }
                }
                enterInd = enterInd.filter(function (el) {
                    return (el != null && el != "" || el === 0);
                });
                console.log(enterInd);
            
                console.log(count)

                let caretPos = enterInd[count - 1];
 
                console.log(count)
                console.log(enterInd);
                
                if (caretPos >= enterInd[enterInd.length - 1] || caretPos >= arrText[enterInd.length - 5]) {
                    caretPos = enterInd[enterInd.length - 1];
                    //count = arrText.length;
                    count = enterInd.length - 1;
                }
                if (caretPos <= enterInd.length) {
                    caretPos = 0;
                    //count = 0;
                }
                textAreaIntoForm.setSelectionRange(caretPos, caretPos);
            }
        }
        // if (!keyBoardBlock.contains(td)) {arrText.push('')}; // (3)
        else {
            if (counterCaps % 2 !== 0) {
                arrText.push(char.toUpperCase());
            }
            if (counterCaps % 2 === 0) {
                arrText.push(char.toLowerCase());
            }
            strText = strText + char;
            textAreaIntoForm.value = arrText.join('');
        }
        //console.log(char);
    };



    // shift + alt одновременное нажатие
    function runOnKeys(func, ...codes) {
        let pressed = new Set();

        document.addEventListener('keydown', function(event) {
            pressed.add(event.code);

            for (let code of codes) { 
                if (!pressed.has(code)) {
                return;
                }
            }

            pressed.clear();
            func();
        });

        document.addEventListener('keyup', function(event) {
            pressed.delete(event.code);
        });
    }

    
    


    function changeLanguage() {
        buttonArr[58].classList.add('back');
        buttonArr[65].classList.add('back');
        buttonArr[42].classList.add('back');
        buttonArr[55].classList.add('back'); 
        
        for(let i = 15; i < 54; i++) {
            if (i == 27 || i == 28|| i == 40 || i == 42) {
                gs[i].classList.add('general-symbol');
            }
            else {
                gs[i].classList.toggle('changeLangGen');
            }
            
        }
        for(let i = 15; i < ss.length; i++) {
            ss[i].classList.toggle('changeLangSec');
        }
        
        let curLang = ss[20].classList.contains('changeLangSec'); //RU == true/ EN == false
        localStorage.lang = curLang;
        if (localStorage.lang == 'true') {
            gs[43].innerHTML = btnContent[43]['RU'];
            gs[43].classList.add('changeLangSec');
        }
        if (localStorage.lang == 'false') {
            gs[43].innerHTML = btnContent[43]['gen'];
            gs[43].classList.remove('changeLangSec');
        }
    }
    

    runOnKeys(
        changeLanguage,
        'AltLeft',
        'ShiftLeft'
    );
    //
    

    let INPUT = [];
    let KEY = ['AltLeft', 'ShiftLeft']; 
    let KEY_REVERSE = ['AltLeft', 'ShiftLeft']; 

    let KEY_RIGHT = ['ShiftRight', 'AltRight']; 
    let KEY_REVERSE_RIGHT = ['AltRight', 'ShiftRight'];

    function keyListener(event) {
        textAreaIntoForm.focus();

        console.log('Key: ', event.key);
        console.log('Code: ', event.code);
        console.log('keyCode: ', event.keyCode);
        
        let ek = event.key;
        let ec = event.code;

        // shift + alt последовательное нажатие
        INPUT.push(ec);

        if (INPUT.length > 2) {
            INPUT.length = 0;
        };
        if (INPUT.length === 2) {
            if (INPUT[0] == 'AltLeft' && INPUT[1] == 'ShiftLeft') {
                changeLanguage();
                INPUT.length = 0;
            }
            else if (INPUT[0] == 'ShiftLeft' && INPUT[1] == 'AltLeft') {
                changeLanguage();
                INPUT.length = 0;
            }
            if (INPUT[0] == 'AltRight' && INPUT[1] == 'ShiftRight') {
                changeLanguage();
                INPUT.length = 0;
            }
            else if (INPUT[0] == 'ShiftRight' && INPUT[1] == 'AltRight') {
                changeLanguage();
                INPUT.length = 0;
            }
            else {
                INPUT = [INPUT.pop()];
            }
        }
    
        
        // сопоставляем клавиши физической и виртуальной клавиатуры 
        for (let i = 0; i < 13; i++) {
            if (ek == btnContent[i]['gen'] || ek == btnContent[i]['gen'].toLowerCase() || ek == btnContent[i]['sec'] || ek == btnContent[i]['sec'].toLowerCase()) {
                buttonArr[i].classList.add('back');
            }
        }
        for (let i = 15; i < 27; i++) {
            if (ek == btnContent[i]['gen'] || ek == btnContent[i]['gen'].toLowerCase() || ek == btnContent[i]['gen'].toUpperCase()  || ek == btnContent[i]['sec'] || ek == btnContent[i]['sec'].toLowerCase()) {
                buttonArr[i].classList.add('back');
            }
        }
        for (let i = 29; i < 40; i++) {
            if (ek == btnContent[i]['gen'] || ek == btnContent[i]['gen'].toLowerCase() || ek == btnContent[i]['gen'].toUpperCase()  || ek == btnContent[i]['sec'] || ek == btnContent[i]['sec'].toLowerCase()) {
                buttonArr[i].classList.add('back');
            }
        }
        for (let i = 44; i < 54; i++) {
            if (ek == btnContent[i]['gen'] || ek == btnContent[i]['gen'].toLowerCase() || ek == btnContent[i]['gen'].toUpperCase()  || ek == btnContent[i]['sec'] || ek == btnContent[i]['sec'].toLowerCase()) {
                buttonArr[i].classList.add('back');
            }
        }
        if (ek == 'Backspace') {
            buttonArr[13].classList.add('back');
        }
        if (ek == 'Tab') {
            buttonArr[14].classList.add('back');
        }
        if (ek == 'Delete') {
            buttonArr[27].classList.add('back');
        }
        if (ek == 'CapsLock') {
            buttonArr[28].classList.add('back');
        }
        if (ek == 'Enter') {
            buttonArr[40].classList.add('back');
        }
        if (ek == 'Shift') {
            buttonArr[42].classList.add('back');
            buttonArr[55].classList.add('back');
        }
        if (ek == 'Control') {
            buttonArr[56].classList.add('back');
            buttonArr[66].classList.add('back');
        }
        if (ek == 'Super' || ek == 'Command' || ek == 'Windows' || ek == 'Win' || ek == 'MetaLeft' || ek == 'MetaRight') {
            buttonArr[57].classList.add('back');
        }
        if (ek == 'Alt') {
            buttonArr[58].classList.add('back');
            buttonArr[65].classList.add('back');
        }
        if (ek == 'Space' || ek == ' ') {
            buttonArr[59].classList.add('back');
            buttonArr[60].classList.add('back');
            buttonArr[61].classList.add('back');
            buttonArr[62].classList.add('back');
            buttonArr[63].classList.add('back');
            buttonArr[64].classList.add('back');
        }

        //arrow
        if (ek == 'ArrowUp') {
            buttonArr[54].classList.add('back');
        }
        if (ek == 'ArrowRight') {
            buttonArr[69].classList.add('back');
        }
        if (ek == 'ArrowDown') {
            buttonArr[68].classList.add('back');
        }
        if (ek == 'ArrowLeft') {
            buttonArr[67].classList.add('back');
        }

    }

    // kill keyListener background
    function keyListenerUP() {
        for (let i = 0; i < buttonArr.length; i++) {
                setTimeout(() => (buttonArr[i].classList.remove('back')), 300);
        }
    }

    document.addEventListener('keydown', keyListener);
    document.addEventListener('keyup', keyListenerUP);

    let RU = gs[18].classList.contains('changeLangGen');


    textAreaIntoForm.value = arrText.join('');
    // console.log(arrText);

    

    function counter() {
        count+=1;
    }
    function counterR() {
        count-=1;
    }
    function counterUp() {
        count+=1;
    }
    function counterDn() {
        count+=1;
    }

    arrLeft.addEventListener('click', counter);
    arrRight.addEventListener('click', counterR);
    arrUp.addEventListener('click', counterUp);
    arrDn.addEventListener('click', counterDn);

    capsLock.addEventListener('click', counterCapsLockClick);






