var r1=Math.floor(Math.random()*6)+1;
var i1="images/"+"dice"+r1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", i1);
var r2=Math.floor(Math.random()*6)+1;
var i2="images/"+"dice"+r2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",i2);
if(r1>r2){
  document.querySelector("h1").innerHTML="Player 1 wins";
}
else if (r2>r1) {
    document.querySelector("h1").innerHTML="Player 2 wins";

}
else{
    document.querySelector("h1").innerHTML="Its a draw";
}
