const email = document.getElementById('iemail');
const text = document.getElementById('itext');
const number = document.getElementById('inumber');
const infoPersonal = document.querySelector('.infoPersonal');
const yourPlan = document.querySelector('.yourPlan');
const addOns = document.querySelector('.addOns');
const finish = document.querySelector('.finish');
let displayOn = false;
let plan = null;
let add = [];
let total = null;
let addMoney = null;
const butDisplays = document.querySelectorAll('.nav-but');
const priceYears = document.querySelectorAll('.div-years');
const priceMonth = document.querySelectorAll('.div-month');
const errorYourPlan = document.querySelector('.error-yourPlan');
const addOnsMoney = document.querySelectorAll('.p-moneyAddOns');
class finalPlan{
    constructor(info,plan,experience){
        this.info = info;
        this.plan = plan;
        this.exp = experience;
    }
    info(){

    }
}
// BackgroundColor of formulario page-------------------------------------------------------

const enviar = document.getElementById('enviar').addEventListener('click',(e)=>{
    e.preventDefault();
    if(text.value.length <= 3 || text.value.length > 25){
       text.style.cssText = 'color:red; border:1px solid red; ';
    }else if(number.value.length !== 9 ){
        text.style.cssText = 'color:black; border:1px solid black; ';
        number.style.cssText = 'color:red; border:1px solid red; ';
        document.getElementById('errorNumber').style.display = 'block';
s   }else{
    number.style.cssText = 'color:black; border:1px solid black; '
    document.getElementById('errorNumber').style.display = 'none';
    infoPersonal.style.display = 'none';
    yourPlan.style.display = 'block';
}
});

// select plan and  buton de year/moth------------------------------------------------------------------
const priceYM = document.querySelectorAll('.priceYM').forEach((item)=>
item.addEventListener('click',()=>{
    errorYourPlan.style.display = 'none';
    let colorOff = document.querySelectorAll('.priceYM').forEach((item)=> item.style.backgroundColor = 'transparent');
    switch(item.id){
        case 'arcade':
            colorOff;
            item.style.backgroundColor = 'hsl(231, 100%, 99%)';
            if(displayOn === true){
                plan = 90;
            }else{
                plan = 9;
            }
            break;
        case 'advance':
            colorOff;
            item.style.backgroundColor = 'hsl(231, 100%, 99%)';
            if(displayOn === true){
                plan = 120;
            }else{
                plan = 12;
            }
            break;
        case 'pro':
            colorOff;
            item.style.backgroundColor = 'hsl(231, 100%, 99%)';
            if(displayOn === true){
                plan = 150;
            }else{
                plan = 15;
            }
            break
                    }
}
));
    document.querySelectorAll('.radio-input').forEach((but)=>{
        but.addEventListener('click', (e)=>{
            if(e.target.id === 'years'){
                displayOn = true;
                addOnsMoney[0].textContent = '+$10/yr';
                addOnsMoney[1].textContent = '+$20/yr';
                addOnsMoney[2].textContent = '+$20/yr';
                priceYears.forEach((item)=> item.style.display = 'block');
                priceMonth.forEach((item)=> item.style.display = 'none');
            }else if(e.target.id === 'month'){
                addOnsMoney[0].textContent = '+$1/mo';
                addOnsMoney[1].textContent = '+$2/mo';
                addOnsMoney[2].textContent = '+$2/mo';
                priceYears.forEach((item)=> item.style.display = 'none');
                priceMonth.forEach((item)=> item.style.display = 'block');
            }
        })
    });

    //  addOns -------------------------------------------------------------------------
    document.querySelectorAll('.addOns-check').forEach((check)=>{
        check.addEventListener('click',()=>{
            console.log(check)
            switch(check.id){
                case 'multP':
                    if(displayOn === true){
                        addMoney = 10;
                        total += 10;
                    }else{
                        addMoney = 1;
                        total += 1;
                    }
                    add += `<div class="onlineSer">
                    <p class="p-ser">Oline Service</p>
                    <p class="p-money">+$${addMoney}/mo</p>
                  </div>`
                break;
                case '1tb':
                    if(displayOn === true){
                        addMoney = 20;
                        total += 20;
                    }else{
                        addMoney = 2;
                        total += 2;
                    }
                    add.unshift(`<div class="onlineSer">
                    <p class="p-ser">Larger Storage</p>
                    <p class="p-money">+$${addMoney}/mo</p>
                  </div>`)
                break;
                case 'custom':
                    if(displayOn === true){
                        addMoney = 20;
                        total += 20;
                    }else{
                        addMoney = 2;
                        total += 2;
                    }
                    if(check.checked){
                    add += `<div class="onlineSer">
                    <p class="p-ser">Customizable Profile</p>
                    <p class="p-money">+$${addMoney}/mo</p>
                  </div>`
                    }else{
                        add -= `<div class="onlineSer">
                    <p class="p-ser">Customizable Profile</p>
                    <p class="p-money">+$${addMoney}/mo</p>
                  </div>`
                    }
                break;
            }
            console.log(add)
        })
    })


// color de info page--------------------------------------------------------------------
function colorInfoNo(){
    butDisplays[0].style.backgroundColor = "transparent";
    butDisplays[1].style.backgroundColor = "transparent";
    butDisplays[2].style.backgroundColor = "transparent";
    butDisplays[3].style.backgroundColor = "transparent";


};
function coloInfoPage(e){
    if(e === 0){
        colorInfoNo();
         butDisplays[0].style.backgroundColor = "gray";
    }else if(e === 1 ){
        colorInfoNo();
        butDisplays[1].style.backgroundColor = "gray";
    }
    };

// display page bottun next/back--------------------------------------------------------------

const butBack = document.querySelectorAll('.but-back').forEach((item)=>{
    item.addEventListener('click', ()=>{
        if(yourPlan.style.display === 'block'){
            coloInfoPage(1);
            yourPlan.style.display = 'none';
            infoPersonal.style.display = 'block';
        }else if(addOns.style.display === 'block'){
            addOns.style.display = 'none';
            yourPlan.style.display = 'block';
        }else if(finish.style.display === 'block'){
            finish.style.display = 'none';
            addOns.style.display = 'block';
        }
    });
});
const butNext = document.querySelectorAll('.but-next').forEach((item)=>{
    item.addEventListener('click',()=>{
        if(plan !== null){
            coloInfoPage(2);
            yourPlan.style.display = 'none';
            addOns.style.display = 'block';
        }else if(plan === null){
            errorYourPlan.style.display = 'block';
        }else if(addOns.style.display === 'block'){
            addOns.style.display = 'none';
            finish.style.display = 'block';
        }
        
    })
})

// info number page Background color----------------------------------------------------------

