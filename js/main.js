let continuebtn = document.getElementById('continue');
let degree = document.querySelector('.circle h1');

continuebtn.addEventListener('click',function(){
    let count = 0;
    let timer = setInterval(_=>{
        count+=1;
        degree.textContent = count;
        if(count === 76){
            clearInterval(timer);
        }
    },10);
});