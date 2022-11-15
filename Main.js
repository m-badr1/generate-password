 var allpess=document.getElementById("allpess");

var passlenth=document.getElementById("passlenth");
// all capital letters in english
var inpCap=document.getElementById("capitalLett");

var inpSma=document.getElementById("smallLett");

var inpNum=document.getElementById("number");

var inpSym=document.getElementById("symbols");

// password
var  capital_pass="KLASDFJQDNJCSLAKXHLX";

var  small_pass="kldsjsldkjdmlcdkdi";

var  number_pass="1239030387843028173";

var  symbols_pas="!)#@&!*#)!_#(#*!#$";


function generatepassword(){
    if(inpCap.checked === true || inpSma.checked === true || inpNum.checked === true || inpSym.checked == true){
        var Allpassword="";

        var Mynumber=passlenth.value ;//  4 


        for(var i=0 ; i < Mynumber ; i++){
            if (inpCap.checked == true) {
                var myRandom=Math.floor(Math.random() * capital_pass.length );// 5
                Allpassword += capital_pass.substr(myRandom , 1)
            }
            if (inpSma.checked == true) {
                var myRandom=Math.floor(Math.random() * small_pass.length );
                Allpassword +=small_pass.substr(myRandom , 1)
            }
            if (inpNum.checked == true) {
                var myRandom=Math.floor(Math.random() * number_pass.length );
                Allpassword +=number_pass.substr(myRandom , 1)
            }
            if (inpSym.checked == true) {
                var myRandom=Math.floor(Math.random() * symbols_pas.length );
                Allpassword +=symbols_pas.substr(myRandom , 1)
            }
           
        }
        // Ko2Tp9Ee4
        const shuffle = str => [...str].sort(()=>Math.random()-.5).join('');

        var finalPass = Allpassword.substr(0 , Mynumber) // Ki8*Tw3(
        
        allpess.value=shuffle(finalPass) ;

    }else{
        allpess.value = "You must choose at least one option"
    }
}
function copy(){
    let myInp =document.querySelector("input");
    myInp.select();
    document.execCommand("copy");
}