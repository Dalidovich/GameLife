s=(v)=>new Array(h).fill(new Array(w).fill(0)).map(x=>x.map(y=>y=Math.random()*v>0.7?1:0))
g=(i,j,u=0,c=[0,0,-1,-1,-1,1,1,1],v=[1,-1,-1,0,1,-1,0,1])=>{
	for(var l=0;l<8;l++){
		u+=m[i+c[l]][j+v[l]];}
    return u}		
var w=1000,h=1000,m=n=s(2),e=s(0),b=document.getElementById("x").getContext('2d');
d=(i=1)=>{
    b.clearRect(0,0,w,h);
    e=s(0);
	m=n;
	n=s(0);
    for(;i<h-1;i++){
        for(var j=1;j<w-1;j++){
            m[i][j]>0?b.fillRect(j,i,1,1):0;
			e[i][j]=g(i,j);
			n[i][j]=e[i][j]==3?1:e[i][j]==2&&m[i][j]>0?1:0}}
}
window.onload=setInterval(d, 9)