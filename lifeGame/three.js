function s(v){
    var a = new Array();
    for(var i=0; i<h; i++){
        a[i] = new Array();
        for(var j=0; j<w; j++){
            a[i][j] = v!=0?Math.floor(Math.random() * 2):0}}
    return a
}
function f(){
    for(var i=0; i<h; i++){
        for(var j=0; j<w; j++){
            m[i][j]==1?b.fillRect(j, i, 1,1):0}}}
function g(i,j){
    let u=0;
    try{u+=m[i][j+1]==undefined?0:m[i][j+1]}catch(e){}
    try{u+=m[i][j-1]==undefined?0:m[i][j-1]}catch(e){}
    try{u+=m[i-1][j-1]==undefined?0:m[i-1][j-1]}catch(e){}
    try{u+=m[i-1][j]==undefined?0:m[i-1][j]}catch(e){}
    try{u+=m[i-1][j+1]==undefined?0:m[i-1][j+1]}catch(e){}
    try{u+=m[i+1][j-1]==undefined?0:m[i+1][j-1]}catch(e){}
    try{u+=m[i+1][j]==undefined?0:m[i+1][j]}catch(e){}
    try{u+=m[i+1][j+1]==undefined?0:m[i+1][j+1]}catch(e){}
    return u}
function n(){
    for(var i=0; i<h; i++){
        for(var j=0; j<w; j++){
            e[i][j]=g(i,j)}}}
function p(){
    for(var i=0; i<h; i++){
        for(var j=0; j<w; j++){
            m[i][j]=m[i][j]==0?e[i][j]==3?1:0:e[i][j]>3||e[i][j]<2?0:1}}}
var w=100;
var h=100;
var m = s(1);
var x = document.getElementById("x");
var e = s(0);
var b=x.getContext('2d');



function d(){
    b.clearRect(0,0,w,h);
    f();
    e = s(0);
    n();
    p()}
window.onload = function(){setInterval(d, 5)}