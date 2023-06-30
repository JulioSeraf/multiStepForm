const email = document.getElementById('iemail');
const text = document.getElementById('itext');
const number = document.getElementById('inumber');
const infoPersonal = document.querySelector('.infoPersonal');
const yourPlan = document.querySelector('.yourPlan');
const addOns = document.querySelector('.addOns');
const finish = document.querySelector('.finish');
const confirm = false;
const butDisplays = document.querySelectorAll('.nav-but')
// BackgroundColor of button page-------------------------------------------------------
const enviar = document.getElementById('enviar').addEventListener('click',(e)=>{
    e.preventDefault();
    if(text.value.length <= 3 || text.value.length > 25){
       text.style.cssText = 'color:red; border:1px solid red; '
    }else if(number.value.length !== 9 ){
        text.style.cssText = 'color:black; border:1px solid black; '
        number.style.cssText = 'color:red; border:1px solid red; '
        document.getElementById('errorNumber').style.display = 'block';
s   }else{
    number.style.cssText = 'color:black; border:1px solid black; '
    document.getElementById('errorNumber').style.display = 'none';
    infoPersonal.style.display = 'none';
    yourPlan.style.display = 'block';
}
})

const butBack = document.querySelectorAll('.but-back').forEach((item)=>{
    item.addEventListener('click', ()=>{
        if(yourPlan.style.display === 'block'){
            yourPlan.style.display = 'none';
            infoPersonal.style.display = 'block';
        }
    })
})

// if(infoPersonal.style.display == 'block'){
//     butDisplays[0].style.cssText = 'background-color:hsl(206, 94%, 87%); color:gray;';
// }else if(yourPlan.style.display == 'block'){
//     butDisplays[1].style.cssText = 'background-color:hsl(206, 94%, 87%); color:gray;';
// }else if(addOns.style.display == 'block'){
//     butDisplays[2].style.cssText = 'background-color:hsl(206, 94%, 87%); color:gray;';
// }else if(finish.style.display == 'block'){
//     butDisplays[3].style.cssText = 'background-color:hsl(206, 94%, 87%); color:gray;';
// }