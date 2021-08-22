let screen = document.getElementById('screen');
// if(screen.startswith("0"))
// screen.value="0";
buttons = document.querySelectorAll('button');
let screenValue='0';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText= e.target.innerText;
        console.log('Button text is', buttonText);
        if(buttonText=='X')
        {
            buttonText = '*';
            screenValue += buttonText;
            screen.value=screenValue;
           
        }
        else if(buttonText =='AC'){
            screenValue = "0";
            screen.value = screenValue;


        }
          else if(buttonText == 'Clr'){
            var num = document.getElementById("screen");
             var remove = num.value;
             remove = remove.slice(0,-1);
            num.value=remove;
            if(screen.value === '') {
                screenValue = "";
                screen.value = "0";
            } else {
                screenValue = remove
            }
    
         }
        else if(buttonText =='='){
            // if(screen.startswith("="))
            // {
            //     alert("enter some values");
            // }
            screen.value = eval(screenValue);
            var result=Math.round(screen.value*10)/10 ;
            screen.value=result;
            

       }
       else if (buttonText=='sign'){
        screen.value = -(screen.value);

       }
    //    else if (screen.startswith("0")){
    //        document.getElementById("screen").value="0";
        

    //    }
      
      
        else{
            if(buttonText !== '0' && screen.value != '0') {
                screenValue += buttonText;
                screen.value = screenValue;
            } else if(buttonText === '0') {
                if(screen.value != '0') {
                    screenValue += buttonText;
                    screen.value = screenValue;
                } 

            } else if(buttonText === '.') {
                screenValue += buttonText;
                screen.value = screenValue;
            } else {
                screenValue = buttonText;
                screen.value = screenValue;
            }
            
            
        }
    })
}


// function checkZero(){
//    var screen = document.getElementById("screen").value;
//     if(screen.startsWith("0")){
//        document.getElementById("screen").value = "0";
//     }
  
//   }
//  function decimal(num){
    
//         var number = document.getElementById("screen");
// number.value += num;
// console.log(number.value);
// document.getElementById("screen").innerHTML=2;
// }

 function showAlert(){
      if(screen.value.startsWith('0') && screen.value.length === 1){
         alert("Enter some values");
      }
    try{
        screen.value = eval(screen.value);
    }
    catch(err){
        alert("enter valid input");
    }
    //       var r=eval(screen.value)
    //       var num=parseFloat(r)
    //       screen.value=num.toFixed(1)
    //   }
    //   catch(err)
    //   {   screen.value=showAlert();
    //      r=document.getElementById("screen").value=0;
    //      alert("plz provide an input")
    //   }
 }