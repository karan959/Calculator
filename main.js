let num = Array.from(document.querySelectorAll('button'));
let display = document.querySelector('.display');
let disAns = document.querySelector('.disAns');

disAns.style.fontSize = '40px';


function screen(){
    for(let i=0;i<num.length;i++){
        num[i].addEventListener('click',(event)=>{
        display.innerText += event.target.innerText;
        if(event.target.className === 'clear'){
            display.innerText = '';
            disAns.innerText = '';
        }
            
        else if(event.target.innerText === 'C'){
            display.innerText=(display.innerText.slice(0,-2));
            if(display.innerText === '')
                disAns.innerText = '';
        }
        else if(event.target.innerText === '='){
            calculate((display.innerText));
            display.innerText='';
        }  
        })
        
    }
    window.addEventListener('keypress',(event) => {
        console.log(event);
        if (event.key === '1'||event.key === '2'||event.key === '3'||event.key === '4'||event.key === '5'||event.key === '6'||event.key === '7'||event.key === '8'||event.key === '9'||event.key === '0'||event.key === '+'||event.key === '-'||event.key === '/'||event.key === '*'||event.key === '.'){
            display.innerText += event.key;
            
        }
        else if(event.key === '='){
            calculate((display.innerText));
            display.innerText='';
        }
             
    })
    window.addEventListener('keyup',(event) => {
        if(event.key === 'Backspace'){
            display.innerText=(display.innerText.slice(0,-1))
            if(display.innerText === '')
                disAns.innerText = '';
        }
    })
}
screen();


function calculate(str){
    let newStr = str.match(/\d+\.\d+|\d+|\.\d+|[^0-9]/g),
        len = newStr.length;
        let result = newStr[0];
        console.log(newStr)

    for(let i = 1;i<len;i++)
    {
        
        if(newStr[i] === '+')
        {
            if(newStr[i+1] === '-')
            {
                result = Number(result) + Number(newStr[i+2] * (-1));
                i++;
            }
            else
                result = Number(result) + Number(newStr[i+1]);
        }
        
        else if(newStr[i] === '*'){
            if(newStr[i+1] === '-')
            {
                result = result * (newStr[i+2] * (-1));
                i++;
            }
            else
                result = result * newStr[i+1];
        }
        
        else if(newStr[i] === '-'){
            if(newStr[i+1] === '-')
            {
                result = result - (newStr[i+2] * (-1));
                i++;
            }
            else
                result = result - newStr[i+1];
        }

        else if(newStr[i] === '/'){
            if(newStr[i+1] === '-')
            {
                result = result / (newStr[i+2] * (-1));
                i++;
            }
            else
                result = result/newStr[i+1];
        }
        
        i++;
    }
    disAns.innerText = result;
}



