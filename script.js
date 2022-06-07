//2th row
Div3.style.gridColumn= "9/17";
//3th row
Div5.style.gridColumn= "5/9";
Div6.style.gridColumn= "9/13";
Div7.style.gridColumn= "13/17";

let ValorTxt=document.getElementById("ValorTxt");

//4th row
var ForthRow= [Div9, Div10, Div11, Div12, Div13, Div14, Div15]
let k=3;
ForthRow.forEach(element => {
    element.style.gridColumn=k.toString()+"/"+(k+2).toString();
    k+=2;
});

//Agregar valor failsave
var AgregarCheck= function(){
    if(ValorTxt.value==="")
        alert("true");
        //return true;
    else if(parseInt(ValorTxt.value, 10)===NaN)
        alert("true");
        //return true;
    else
        alert("false");
    //return false;
}
