
function add(){
  var a = parseInt(document.getElementById("addendA").value);
  var b = parseInt(document.getElementById("addendB").value);
  alert(`${a} + ${b} = ${a+b}.`);
}

function sub(){
  var a = parseInt(document.getElementById("minuend").value);
  var b = parseInt(document.getElementById("subtrahend").value);
  alert(`${a} - ${b} = ${a-b}.`);
}

function multi(){
  var a = parseInt(document.getElementById("multiplicand").value);
  var b = parseInt(document.getElementById("multiplier").value);
  alert(`${a} × ${b} = ${a*b}`);
}

function div(){
  var a = parseInt(document.getElementById("div1").value);
  var b = parseInt(document.getElementById("div2").value);
  alert(`${a} ÷ ${b} = ${a/b}`);
}

function triA(){
  var a = parseInt(document.getElementById("bas").value);
  var b = parseInt(document.getElementById("trihi").value);
  alert(`${a} * ${b} * 0.5 = ${a*b*1/2}`);
}

function cirA(){
  var r = parseInt(document.getElementById("rad").value);
  alert(`${r} ^2 * pi = ${r*r}π, or ${r*r*3.14} when π = 3.14.`);
}

function recPrismV(){
  var l = parseInt(document.getElementById("recPrismlen").value);
  var w = parseInt(document.getElementById("recPrismWid").value);
  var h = parseInt(document.getElementById("recPrismHei").value);
  alert(`${l} × ${w} × ${h} = ${l*w*h}.` )
}

function pyV(){
  var l = parseInt(document.getElementById("lenBpyV").value);
  var w = parseInt(document.getElementById("widBpyV").value);
  var h = parseInt(document.getElementById("heiPpyV").value);
  alert(`${l} × ${w} × ${h} × 1/3 = ${l*w*h/3}.` )
}

function tpyV(){
  var b = parseInt(document.getElementById("baseTPy").value);
  var h0 = parseInt(document.getElementById("heightBaseTPy").value);
  var h = parseInt(document.getElementById("heightTPy").value);
  alert(`${b} × ${h0} × ${h} × 1/6 = ${b*h0*h/6}.` )
}

