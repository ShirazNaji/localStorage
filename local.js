
let fontTEXT =document.querySelector(".fontforms .fontTEXT");
let selectFont =document.querySelector(".fontforms .selectFont");
let selectfontcolor =document.querySelector(".fontforms .selectfontcolor");
let selectfontsize =document.querySelector(".fontforms .selectfontsize");

fontTEXT.style.fontFamily = selectFont.value;
fontTEXT.style.color =  selectfontcolor.value;
fontTEXT.style.fontSize = selectfontsize.value;



if(localStorage.getItem("selectFont")){
         selectFont.value = localStorage.getItem("selectFont") ;
         fontTEXT.style.fontFamily = localStorage.getItem("selectFont");
}

if(localStorage.getItem("selectfontcolor")){
         selectfontcolor.value = localStorage.getItem("selectfontcolor") ;
         fontTEXT.style.color = localStorage.getItem("selectfontcolor");
}

if(localStorage.getItem("selectfontsize")){
         selectfontsize.value = localStorage.getItem("selectfontsize") ;
         fontTEXT.style.fontSize = localStorage.getItem("selectfontsize") + "px";
}




selectFont.onchange = function(){
    let selectvaluefont = this.value;
    localStorage.setItem("selectFont",selectvaluefont);
    if(localStorage.getItem("selectFont")){
         selectFont.value = localStorage.getItem("selectFont") ;
         fontTEXT.style.fontFamily = localStorage.getItem("selectFont");
}
    
}

selectfontcolor.onchange = function(){
    let selectvaluefntcolor = this.value;
    localStorage.setItem("selectfontcolor",selectvaluefntcolor);
    if(localStorage.getItem("selectfontcolor")){
         selectfontcolor.value = localStorage.getItem("selectfontcolor") ;
         fontTEXT.style.color = localStorage.getItem("selectfontcolor");
}
    
}


selectfontsize.onchange = function(){
    let selectvaluefntsize = this.value;
    localStorage.setItem("selectfontsize",selectvaluefntsize);
    if(localStorage.getItem("selectfontsize")){
         selectfontsize.value = localStorage.getItem("selectfontsize") ;
         fontTEXT.style.fontSize = localStorage.getItem("selectfontsize") + "px";
}
    
}
