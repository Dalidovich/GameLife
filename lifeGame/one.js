function matrixArray(rows,columns)
{
    var arr = new Array();
    for(var i=0; i<rows; i++)
    {
    arr[i] = new Array();
        for(var j=0; j<columns; j++)
        {
            arr[i][j] = 0
        }
    }
  return arr;
}
function getRandomInt(max) 
{
    return Math.floor(Math.random() * max);
}
function randomFill(arr)
{
    for(var i=0; i<arr.length; i++){
        for(var j=0; j<arr[0].length; j++){
            arr[i][j] = 0;
        }
    }
    return arr;
}
function fillCanvas()
{
    ctx = example.getContext('2d');
    for(var i=0; i<myMatrix.length; i++){
        for(var j=0; j<myMatrix[0].length; j++){
            if(myMatrix[i][j]==1)
            {
                ctx.fillRect(j, i, 1,1); 
            }
        }
    }  
}
function clearCanvas()
{
    ctx = example.getContext('2d');
    ctx.clearRect(0,0,mapWidth,mapHeight);
}
function valueToInteger(value)
{
    if(value === undefined)
    {
        return 0;
    }
    else
    {
        return value;
    }
}
function getSumOfNeighbor(i,j)
{
    let sum=0;
    try{sum+=valueToInteger(myMatrix[i][j+1]);}catch(er){}
    try{sum+=valueToInteger(myMatrix[i][j-1]);}catch(er){}
    try{sum+=valueToInteger(myMatrix[i-1][j-1]);}catch(er){}
    try{sum+=valueToInteger(myMatrix[i-1][j]);}catch(er){}
    try{sum+=valueToInteger(myMatrix[i-1][j+1]);}catch(er){}
    try{sum+=valueToInteger(myMatrix[i+1][j-1]);}catch(er){}
    try{sum+=valueToInteger(myMatrix[i+1][j]);}catch(er){}
    try{sum+=valueToInteger(myMatrix[i+1][j+1]);}catch(er){}
    return sum;
}
function newEpoch()
{
    for(var i=0; i<myMatrix.length; i++)
    {
        for(var j=0; j<myMatrix[0].length; j++)
        {
            epochMatrix[i][j]=getSumOfNeighbor(i,j);
        }
    }
}
function setNewEpoch()
{
    for(var i=0; i<myMatrix.length; i++)
    {
        for(var j=0; j<myMatrix[0].length; j++)
        {
            if(myMatrix[i][j]==0)
            {
                myMatrix[i][j]=epochMatrix[i][j]==3?1:0
            }
            else
            {
                myMatrix[i][j]=epochMatrix[i][j]>3 || epochMatrix[i][j]<2?0:1
            }
        }
    }
}
var mapWidth=1000;
var mapHeight=1000;
var myMatrix = matrixArray(mapHeight,mapWidth);
myMatrix=randomFill(myMatrix);
var example = document.getElementById("example");
var epochMatrix = matrixArray(mapHeight,mapWidth);


myMatrix[0][1]=1;
myMatrix[1][2]=1;
myMatrix[2][0]=1;
myMatrix[2][1]=1;
myMatrix[2][2]=1;

function drawEverything()
{
    clearCanvas();
    fillCanvas();
    epochMatrix = matrixArray(mapHeight,mapWidth);
    newEpoch();
    setNewEpoch();
}
window.onload = function() 
{
    canvas = document.getElementById('animationCanvas');
    setInterval(drawEverything, 0.1);
}