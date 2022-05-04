    import { btnContent } from './modules/variables.js';
    
    //let fon = document.body.style.background = 'red';

    let count = 0;
    let arrText = [];
    let strText = '';
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
                //arrSecSym[i].innerHTML !== btnContent[i]['sec'];
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



    // styles
    let arrLeft = document.getElementById('67');
    arrLeft.style.transform = "rotate(90deg)";

    let arrRight = document.getElementById('69');
    arrRight.style.transform = "rotate(270deg)";
    
   
    // add symbols by click
    keyBoardBlock.onclick = f;
    function f(event) {
        textAreaIntoForm.focus();

        let td = event.target.closest('.btn'); // (1)
        let tdID = td.getAttribute('id');
        let tdChild = td.children[0];
        let char = btnContent[tdID].gen;

        if (!td) {
            arrText.push('');
        }; 
        if (char.length > 1) {
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
                char = btnContent[tdID].sym;
                arrText.push(char.toUpperCase());
                textAreaIntoForm.value = arrText.join('');
            }
            if (char == btnContent[67].gen) {
                // arrow <-
                char = '';
                textAreaIntoForm.value = arrText.join('');
                textAreaIntoForm.focus();
                
                let caretPos = arrText.length - count;

                console.log(count)
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
        }
        //if (!keyBoardBlock.contains(td)) {arrText.push('')}; // (3)
        else {
            arrText.push(char.toLowerCase());
            strText = strText + char;
            textAreaIntoForm.value = arrText.join('');
        }
        console.log(char);
    };


    function keyListener(event) {
        textAreaIntoForm.focus();

        console.log('Key: ', event.key);
        console.log('keyCode: ', event.keyCode);
        let ek = event.key;

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

        // toggle language
        if (ek == 'Alt' && ek == 'Shift') {
            buttonArr[58].classList.add('back');
            buttonArr[65].classList.add('back');
            buttonArr[42].classList.add('back');
            buttonArr[55].classList.add('back'); 
            
            alert('hi')
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



    textAreaIntoForm.value = arrText.join('');
    console.log(arrText);

    function counter() {
        count+=1;
    }
    
    function counterR() {
        count-=1;
    }
    arrLeft.addEventListener('click', counter);
    arrRight.addEventListener('click', counterR);





