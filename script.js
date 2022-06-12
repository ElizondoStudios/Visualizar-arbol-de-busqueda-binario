//Organizar columnas

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

//Clases
class Nodo{
    constructor(DiV, izq, der, dato=undefined){
        this.DiV=DiV;
        this.izq=izq;
        this.der=der;
        this.dato=dato;
    }
}

class ABB{
    constructor(){
        this.Nodo31= new Nodo(Div31);
        this.Nodo30= new Nodo(Div30);
        this.Nodo29= new Nodo(Div29);
        this.Nodo28= new Nodo(Div28);
        this.Nodo27= new Nodo(Div27);
        this.Nodo26= new Nodo(Div26);
        this.Nodo25= new Nodo(Div25);
        this.Nodo24= new Nodo(Div24);
        this.Nodo23= new Nodo(Div23);
        this.Nodo22= new Nodo(Div22);
        this.Nodo21= new Nodo(Div21);
        this.Nodo20= new Nodo(Div20);
        this.Nodo19= new Nodo(Div19);
        this.Nodo18= new Nodo(Div18);
        this.Nodo17= new Nodo(Div17);
        this.Nodo16= new Nodo(Div16);
        this.Nodo15= new Nodo(Div15, this.Nodo30, this.Nodo31);
        this.Nodo14= new Nodo(Div14, this.Nodo28, this.Nodo29);
        this.Nodo13= new Nodo(Div13, this.Nodo26, this.Nodo27);
        this.Nodo12= new Nodo(Div12, this.Nodo24, this.Nodo25);
        this.Nodo11= new Nodo(Div11, this.Nodo22, this.Nodo23);
        this.Nodo10= new Nodo(Div10, this.Nodo20, this.Nodo21);
        this.Nodo9= new Nodo(Div9, this.Nodo18, this.Nodo19);
        this.Nodo8= new Nodo(Div8, this.Nodo16, this.Nodo17);
        this.Nodo7= new Nodo(Div7, this.Nodo14, this.Nodo15);
        this.Nodo6= new Nodo(Div6, this.Nodo12, this.Nodo13);
        this.Nodo5= new Nodo(Div5, this.Nodo10, this.Nodo11);
        this.Nodo4= new Nodo(Div4, this.Nodo8, this.Nodo9);
        this.Nodo2= new Nodo(Div2, this.Nodo4, this.Nodo5);
        this.Nodo3= new Nodo(Div3, this.Nodo6, this.Nodo7);
        this.raiz= new Nodo(Div1, this.Nodo2, this.Nodo3);
    }

    agregarDato(valor){
        if(this.raiz.dato===undefined){
            this.raiz.dato=valor;
            Div1.textContent=valor;
        }
        else{
            var Buscar= function (nodo){
                if(valor===nodo.dato){
                    alert("El valor ya está presente");
                    return;
                }

                if(valor<nodo.dato){
                    if(nodo.izq==undefined){
                        alert("Se superó el tamaño del arbol");
                        return;
                    }

                    if(nodo.izq.dato===undefined){
                        if(nodo.izq==undefined){
                            alert("Se superó el tamaño del arbol");
                            return;
                        }
                        nodo.izq.DiV.textContent=valor;
                        nodo.izq.dato=valor;
                        return;
                    }
                    return Buscar(nodo.izq);     
                }

                if(valor>nodo.dato){
                    if(nodo.der==undefined){
                        alert("Se superó el tamaño del arbol");
                        return;
                    }

                    if(nodo.der.dato===undefined){
                        nodo.der.DiV.textContent=valor;
                        nodo.der.dato=valor;
                        return;
                    }
                    return Buscar(nodo.der);      
                }
            }
            Buscar(this.raiz);
        }
    }
}

//Inicializar arbol
var Arbol= new ABB();

//Agregar valores
var AgregarCheck= function(){
    if(ValorTxt.value===""){
        alert("No deje el campo vacio");
        return;
    }

    if(isNaN(ValorTxt.value)){
        alert("El valor no es válido");
        return;
    }

    Arbol.agregarDato(parseInt(ValorTxt.value));
}
