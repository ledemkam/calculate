
const buttons = document.querySelectorAll('.btn');
const result = document.getElementById("result");

buttons.forEach((button) => {
    button.addEventListener('click',(e) =>{
        result.textContent += e.target.id
    })
})
//comme les checkbox on n a pas tjrs besoin de decklarer les buttons
equal.addEventListener('click',() =>{
    result.textContent=eval(result.textContent) //la methode equal permet de calculeer tout ce qui est la l interieur
})
clear.addEventListener('click',()=>{
    result.textContent = "";
})