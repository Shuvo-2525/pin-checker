// Disabling the Active Input Format

    let getPin = document.getElementById("getPin").disabled = true;
    let enteredPin = document.getElementById("enteredPin").disabled = true;

// Some Styles By JavaScript

    document.getElementById("getPin").setAttribute("style" , "text-align : center ; background-color : #3B4153 ; color : white ; font-size : 30px")
    document.getElementById("enteredPin").setAttribute("style" , "text-align : center ; background-color : #3B4153 ; color : white ; font-size : 30px")

//  Declearable Randomized  Pin Function

    function randomizedPin() {
        let randomPin = Math.floor(1000 + Math.random() * 9000);
        return randomPin;
    }

//  Generating Randomized Pin 
    const pinBtn = document.getElementById('pinBtn');
    pinBtn.addEventListener('click' , function(){
        document.getElementById("getPin").value = randomizedPin();
    })


// Enter Pin Section 


// Enter By Press  (One - By -One)
    function inputNum(id){
        document.getElementById('enteredPin').value += document.getElementById(id).innerText;
        }

// all Clear Preesed In
        document.getElementById('deletAll').addEventListener('click',function(){
            document.getElementById('enteredPin').value = "";
        })

// deleting last number
        function backspace(){
            return document.getElementById('enteredPin').value.slice(0,-1);
        }
        document.getElementById('backspace').addEventListener('click',function(){
            document.getElementById('enteredPin').value = backspace();
        })

// varifying pin section                                                                                      // some of WOrds And Criteria I followed

 const submitBtn = document.getElementById('submitBtn');
 submitBtn.addEventListener('click', function () {
    if (document.getElementById("getPin").value == "" ) {                                                  // 01 . Checking either the pin Is Gerenated Or Not ? 
        alert("Please Generate Your Pin First")                             
    }
    else {
        if (document.getElementById("getPin").value == document.getElementById('enteredPin').value ) {     // 02 . If it is generated then , is it same with 'Entered Pin' ? 
           

            document.getElementById('action-left').style.display = "none"                                     //stopping how much attempts I have 
            document.getElementById('action-congrats').style.display = "block";                              //showing Congratulation
            setTimeout(function(){document.getElementById('rightPass').style.display = "block";}, 1500);    //with the flow of time these Three effect will Show Spontaneously
            setTimeout(function(){document.getElementById('firstPage').style.display = "none";}, 3000); 
            setTimeout(function(){document.getElementById('secondPage').style.display = "block";}, 3000); 
            
           
            
        }
        else {
   
            var tryCount = parseFloat(document.getElementById('tryCount').innerText);                                      //If it is Wrong , then --
            wrongCount = tryCount - 1 ;
            document.getElementById('tryCount').innerText = wrongCount;                                                  // every wrong attempt , you will lose requied attepts
            document.getElementById('wrongPass').style.display = "block";                                               // & it will keep warn you that , it is a Wrong Pass
            setTimeout(function(){ document.getElementById('wrongPass').style.display = "none";}, 1500);            // it is used for hide the notifiy section after notification
            
           if (tryCount < 1) {
               document.getElementById('action-left').style.display = "none" ;                                   // When you Reach The limit of Failureness ,  you will see a no 
               document.getElementById('action-disable').style.display = "block" ;                              // no action left & You will be notified.
              
               if (tryCount = 1 ){
                    alert("Hey Be Serious ; Refresh & Try Again ");                       // after a sevarel NOtification YOu Will No longer USE ANY OF BUTTONS Excluding REFRESH
                    document.getElementById('submitBtn').disabled = true;
                    document.getElementById('pinBtn').disabled = true;
	            
               }
               
           }
            
        }
    }
     
     
 })


 //                                                                              Thanks For Your Concern
