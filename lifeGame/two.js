function initMatrix(v){
    var a = new Array();
    for(var i=0; i<mapHeight; i++){
        a[i] = new Array();
        for(var j=0; j<mapWidth; j++){
            a[i][j] = v!=0?Math.floor(Math.random() * 2):0}}
    return a;
}
function fillCanvas(){
    for(var i=0; i<mapHeight; i++){
        for(var j=0; j<mapWidth; j++){
            if(myMatrix[i][j]==1){
                example.getContext('2d').fillRect(j, i, 1,1)}}}}
function getSumOfNeighbor(i,j){
    let sum=0;
    try{sum+=myMatrix[i][j+1]==undefined?0:myMatrix[i][j+1]}catch(e){}
    try{sum+=myMatrix[i][j-1]==undefined?0:myMatrix[i][j-1]}catch(e){}
    try{sum+=myMatrix[i-1][j-1]==undefined?0:myMatrix[i-1][j-1]}catch(e){}
    try{sum+=myMatrix[i-1][j]==undefined?0:myMatrix[i-1][j]}catch(e){}
    try{sum+=myMatrix[i-1][j+1]==undefined?0:myMatrix[i-1][j+1]}catch(e){}
    try{sum+=myMatrix[i+1][j-1]==undefined?0:myMatrix[i+1][j-1]}catch(e){}
    try{sum+=myMatrix[i+1][j]==undefined?0:myMatrix[i+1][j]}catch(e){}
    try{sum+=myMatrix[i+1][j+1]==undefined?0:myMatrix[i+1][j+1]}catch(e){}
    return sum}
function newEpoch(){
    for(var i=0; i<mapHeight; i++){
        for(var j=0; j<mapWidth; j++){
            epochMatrix[i][j]=getSumOfNeighbor(i,j)}}}
function setNewEpoch(){
    for(var i=0; i<mapHeight; i++){
        for(var j=0; j<mapWidth; j++){
            myMatrix[i][j]=myMatrix[i][j]==0?epochMatrix[i][j]==3?1:0:epochMatrix[i][j]>3||epochMatrix[i][j]<2?0:1}}}
var mapWidth=1000;
var mapHeight=1000;
var myMatrix = initMatrix(1);
var example = document.getElementById("x");
var epochMatrix = initMatrix(0);



function drawEverything()
{
    example.getContext('2d').clearRect(0,0,mapWidth,mapHeight);
    fillCanvas();
    epochMatrix = initMatrix(0);
    newEpoch();
    setNewEpoch();
}
window.onload = function() 
{
    setInterval(drawEverything, 5);
}