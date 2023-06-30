const email = document.getElementById('iemail');
const text = document.getElementById('itext');
const number = document.getElementById('inumber');
const enviar = document.getElementById('enviar').addEventListener('click',(e)=>{
    e.preventDefault();
    if(text.value.length <= 3 || text.value.length > 25){
       text.style.cssText = 'color:red; border:1px solid red; '
    }else if(number.value.length !== 9 ){
        number.style.cssText = 'color:red; border:1px solid red; '
s    }
})
    

        
