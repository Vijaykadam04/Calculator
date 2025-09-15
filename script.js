let buttons = document.querySelectorAll("button");
let textbox = document.getElementById('display');

buttons.forEach((button)=>{
    if(button.innerHTML != "=" && button.innerHTML != "Clear"){
        button.addEventListener('click', ()=>{
            textbox.value += button.innerHTML;
    
        })
    }
})


document.getElementById('eq-operator').addEventListener('click', ()=>{
    let result = eval(textbox.value)
    textbox.value = `Ans: ${result}`;
    
})

document.getElementById('clear').addEventListener('click', ()=>{
    textbox.value = "";
})