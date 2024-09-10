function percentagecalc() {
    let stdtm = document.getElementById("tm1").value;
    let stdobt = document.getElementById("obt1").value;
    let res = (stdobt / stdtm)* 100; 
    document.getElementById("textchanger").innerHTML=("your got it" +res +"%");    
}