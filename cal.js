let screen =document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        let buttonText = e.target.innerText;
        if(buttonText=='X'){
            buttonText="*";
            screenValue +=buttonText;
            screen.value=screenValue;
        }
        else if(buttonText == "C"){
            screenValue="";
            screen.value=screenValue;
        }
        else if(buttonText=="="){
            screen.value= eval(screenValue);
        }
        else if(buttonText=='<-'){
            var number=screen.value;
            var len=number.length-1;
            var newnumber=number.substring(0,len);
            screen.value=newnumber;
        }
        else{
            screenValue +=buttonText;
            screen.value=screenValue;
        }
    })
}