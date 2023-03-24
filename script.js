var a;
var b;
var c;
document.getElementById("addition").onclick=function() {
    a=document.getElementById("mytxt").value;
    b=document.getElementById("mytxt1").value;
    if(isNaN(a)||isNaN(b)) {
        document.getElementById("mytxt").style.border="2px solid red";
        document.getElementById("mytxt1").style.border="2px solid red";
        
    }
    if(!isNaN(a)||!isNaN(b)) {
        document.getElementById("mytxt").style.border="2px solid white";
        document.getElementById("mytxt1").style.border="2px solid white";
        
    }
    a=parseInt(a);
    b=parseInt(b);  
    document.getElementById("demo").innerHTML=  a+b  ;
}
document.getElementById("subraction").onclick=function() {
    a=document.getElementById("mytxt").value;
    b=document.getElementById("mytxt1").value;
    if(isNaN(a)||isNaN(b)) {
        document.getElementById("mytxt").style.border="2px solid red";
        document.getElementById("mytxt1").style.border="2px solid red";
        
    }
    if(!isNaN(a)||!isNaN(b)) {
        document.getElementById("mytxt").style.border="2px solid white";
        document.getElementById("mytxt1").style.border="2px solid white";
        
    }
    a=parseInt(a);
    b=parseInt(b);  
    document.getElementById("demo").innerHTML=  a-b  ;

}
document.getElementById("multipilcation").onclick=function() {
    a=document.getElementById("mytxt").value;
    b=document.getElementById("mytxt1").value;
    if(isNaN(a)||isNaN(b)) {
        document.getElementById("mytxt").style.border="2px solid red";
        document.getElementById("mytxt1").style.border="2px solid red";
        
    }
    if(!isNaN(a)||!isNaN(b)) {
        document.getElementById("mytxt").style.border="2px solid white";
        document.getElementById("mytxt1").style.border="2px solid white";
        
    }
    a=parseInt(a);
    b=parseInt(b);  
    document.getElementById("demo").innerHTML=  a*b  ;
}
document.getElementById("division").onclick=function() {
    a=document.getElementById("mytxt").value;
    b=document.getElementById("mytxt1").value;
    if(isNaN(a)||isNaN(b)) {
        document.getElementById("mytxt").style.border="2px solid red";
        document.getElementById("mytxt1").style.border="2px solid red";
        
    }
    if(!isNaN(a)||!isNaN(b)) {
        document.getElementById("mytxt").style.border="2px solid white";
        document.getElementById("mytxt1").style.border="2px solid white";
        
    }
    a=parseInt(a);
    b=parseInt(b);  
    document.getElementById("demo").innerHTML=  a/b  ;

}