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
    
    //console.log(buttonArr)
    //console.log(btnContent.length)

    function addClickListener() {
        textAreaIntoForm.value = '';
        
        // for (let i = 0; i < buttonArr[i]; i++) {
            
           
        // }
        
    }

    for(let i = 0; i < buttonArr.length; i++) {
        buttonArr[i].addEventListener("click", addClickListener);
    }

    // buttonArr.forEach((item, i, arr) => {
        
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





