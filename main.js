    import { btnContent } from './modules/variables.js';
    
    //let fon = document.body.style.background = 'red';

    

    // create textarea
    let textArea = document.createElement('div');
    let formText = document.createElement('form');
    let textAreaIntoForm = document.createElement('textarea');

    textArea.classList.add('text-area');
    document.body.append(textArea);
    formText.append(textAreaIntoForm);
    textArea.append(formText);

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
        //AreaIntoForm.innerText = buttonArr[i].getAttribute('gen');
        // let textArr = [];
        // textAreaIntoForm.innerHTML = "5";
        // return textArr.join('');
        
    }

    for(let i = 0; i < buttonArr.length; i++) {
        buttonArr[i].addEventListener("click", addClickListener);
    }




