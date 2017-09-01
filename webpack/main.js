//获取dom对象
var v1 = document.querySelector('#v1');
var v2 = document.querySelector("#v2");
var bt = document.querySelector('#bt');
var result = document.querySelector('#result')

bt.onclick=function(){
    var v1value = parseFloat(v1.value);
    var v2value = parseFloat(v2.value);
    //调用add
    var add = require('./calc.js');
    result.value = add(v1value , v2value);
}
