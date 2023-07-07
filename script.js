const email = document.getElementById('iemail');
const text = document.getElementById('itext');
const number = document.getElementById('inumber');
const infoPersonal = document.querySelector('.infoPersonal');
const yourPlan = document.querySelector('.yourPlan');
const addOns = document.querySelector('.addOns');
const finish = document.querySelector('.finish');
const thanksFinal = document.querySelector('.finish-thank');
let displayOn = false;
let plan = null;
let add = [];
let total = 0;
let addMoney = null;
let yearMonth = 'month';
let totalPlan = 0;
let ym = 'mo';
let addFinal = document.querySelector('.colorAdd');
const butDisplays = document.querySelectorAll('.nav-but');
const priceYears = document.querySelectorAll('.div-years');
const priceMonth = document.querySelectorAll('.div-month');
const errorYourPlan = document.querySelector('.error-yourPlan');
const addOnsMoney = document.querySelectorAll('.p-moneyAddOns');
const addCheck = document.querySelectorAll('.addOns-check');
const resPlan = document.getElementById('resPlan');
let res = document.querySelector('.total');
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
                plan = parseInt(90);
            }else{
                plan = parseInt(9);
            }
            break;
        case 'advance':
            colorOff;
            item.style.backgroundColor = 'hsl(231, 100%, 99%)';
            if(displayOn === true){
                plan = parseInt(120);
            }else{
                plan = parseInt(12);
            }
            break;
        case 'pro':
            colorOff;
            item.style.backgroundColor = 'hsl(231, 100%, 99%)';
            if(displayOn === true){
                plan = parseInt(150);
            }else{
                plan = parseInt(15);
            }
            break
                    }
}
));
    document.querySelectorAll('.radio-input').forEach((but)=>{
        but.addEventListener('click', (e)=>{
            if(e.target.id === 'years'){
                yearMonth = 'year';
                ym = 'yr';
                displayOn = true;
                while(addFinal.lastChild){
                    addFinal.removeChild(addFinal.lastChild)
                }
                addCheck.forEach((item)=> item.checked = false);
                addOnsMoney[0].textContent = '+$10/yr';
                addOnsMoney[1].textContent = '+$20/yr';
                addOnsMoney[2].textContent = '+$20/yr';
                priceYears.forEach((item)=> item.style.display = 'block');
                priceMonth.forEach((item)=> item.style.display = 'none');
            }else if(e.target.id === 'month'){
                while(addFinal.lastChild){
                    addFinal.removeChild(addFinal.lastChild)
                }
                addCheck.forEach((item)=> item.checked = false);
                addOnsMoney[0].textContent = '+$1/mo';
                addOnsMoney[1].textContent = '+$2/mo';
                addOnsMoney[2].textContent = '+$2/mo';
                priceYears.forEach((item)=> item.style.display = 'none');
                priceMonth.forEach((item)=> item.style.display = 'block');
            }
        })
    });

    //  addOns -------------------------------------------------------------------------
    addCheck.forEach((check)=>{
        check.addEventListener('click',()=>{
            switch(check.id){
                case 'multP':
                    if(displayOn === true){
                        addMoney = 10;
                        totalPlan += 10;
                    }else{
                        addMoney = 1;
                        totalPlan += 1;
                    }
                    let onlineSer =`<div id="oS" class="onlineSer">
                    <p class="p-ser">Oline Service</p>
                    <p class="p-money">+$${addMoney}/${ym}</p>
                  </div>`;
                    if(check.checked === true){
                       addFinal.innerHTML += onlineSer;
                   }else{
                    if(displayOn === true){
                        totalPlan -= 10;
                    }else{
                        totalPlan-= 1;
                    }
                    let remoOnline = document.getElementById('oS');
                    addFinal.removeChild(remoOnline);
                  }
                break;
                case '1tb':
                    if(displayOn === true){
                        addMoney = 20;
                        totalPlan += 20;
                    }else{
                        addMoney = 2;
                        totalPlan += 2;
                    }
                    let largerS = `
                    <div id="lS" class="onlineSer">
                    <p class="p-ser">Larger Storage</p>
                    <p class="p-money">+$${addMoney}/${ym}</p>
                  </div>`
                    if(check.checked === true){
                        addFinal.innerHTML += largerS;
                     }else{
                    if(displayOn === true){
                        totalPlan -= 20;
                    }else{
                        totalPlan -= 2;
                    }
                    let remolargeS = document.getElementById('lS');
                    addFinal.removeChild(remolargeS);
                  }
                break;
                case 'custom':
                    if(displayOn === true){
                        addMoney = 20;
                        totalPlan += 20;
                    }else{
                        addMoney = 2;
                        totalPlan += 2;
                    }
                    let custome =`
                    <div id="cT" class="onlineSer">
                    <p class="p-ser">Customizable Profile</p>
                    <p class="p-money">+$${addMoney}/${ym}</p>
                  </div>`;                    
                   if(check.checked === true){
                    addFinal.innerHTML += custome;
                    }else{
                    if(displayOn === true){
                        totalPlan -= 20;
                    }else{
                        totalPlan -= 2;;
                    }
                    let remoCustume = document.getElementById('cT');
                    addFinal.removeChild(remoCustume);
                  }
                break;
            }
        })
    })

// finish page --------------------------------------------------------------------------
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
            resPlan.textContent = `$/`;
            res.innerHTML = `<p >Total (per ${yearMonth})</p>
            <p id="p-money">+$${plan}/${ym}</p>`
        }
    });
});
const butNext = document.querySelectorAll('.but-next').forEach((item)=>{
    item.addEventListener('click',()=>{
        if(yourPlan.style.display === 'block' && plan !== null){
            coloInfoPage(2);
            yourPlan.style.display = 'none';
            addOns.style.display = 'block';
        }else if(addOns.style.display === 'block'){
            addOns.style.display = 'none';
            finish.style.display = 'block';
            resPlan.textContent = `$${plan}/${ym}`;
            totalPlan += plan;
            res.innerHTML = `<p >Total (per ${yearMonth})</p>
            <p id="p-money">+$${totalPlan}/${ym}</p>`
        }else if(finish.style.display === 'block'){
            finish.style.display = 'none';
            thanksFinal.style.display = 'block';
        }
        if(plan === null){
            errorYourPlan.style.display = 'block';
        }
        
    })
})

// info number page Background color----------------------------------------------------------

