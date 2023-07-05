const email = document.getElementById('iemail');
const text = document.getElementById('itext');
const number = document.getElementById('inumber');
const infoPersonal = document.querySelector('.infoPersonal');
const yourPlan = document.querySelector('.yourPlan');
const addOns = document.querySelector('.addOns');
const finish = document.querySelector('.finish');
const confirm = false;
const butDisplays = document.querySelectorAll('.nav-but');
const plans = [{
    arcade: 9,
    advanced:12,
    pro: 15
},{
    arcade:90,
    advanced: 120,
    pro: 150
}];
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

// buton de year/moth------------------------------------------------------------------
        document.querySelectorAll('.priceYM').forEach((item)=>
        item.addEventListener('click',(valor)=>{
      
            console.log(valor.target.id)
    
    } 
));
    document.querySelectorAll('.radio-input').forEach((but)=>{
        but.addEventListener('click', (e)=>{
            if(e.target.id === 'years'){
                document.querySelectorAll('.div-years').forEach((item)=> item.style.display = 'block');
                document.querySelectorAll('.div-month').forEach((item)=> item.style.display = 'none');
            }else if(e.target.id === 'month'){
                document.querySelectorAll('.div-years').forEach((item)=> item.style.display = 'none');
                document.querySelectorAll('.div-month').forEach((item)=> item.style.display = 'block');
            }
        })
    });

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
        }
    });
});

// info number page Background color----------------------------------------------------------

