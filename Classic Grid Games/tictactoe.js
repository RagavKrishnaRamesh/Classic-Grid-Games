var x=0;
function clicksq(event){
    var sq = event.target;
    if(sq.textContent=="")
    {
    if(x%2==0) sq.textContent='X';
    else sq.textContent='O';
    x++;
    }
    setTimeout(() => determine_winner(), 100)
    setTimeout(() => checkfordraw(), 100)
}

var squares= document.querySelectorAll(".sq");
squares.forEach(function(square){
    square.addEventListener("click",clicksq);
});

function refresh(){
    squares.forEach(function(square){
        square.textContent="";
    })
    x=0;
}

var refresh_bt=document.querySelector("#bt")
refresh_bt.addEventListener("click",refresh);

function determine_winner()
{
    for(var i=0;i<3;i++)
    {
        var id_a="#a"+(3*i+1),id_b="#a"+(3*i+2),id_c="#a"+(3*i+3);
        var a=document.querySelector(id_a),b=document.querySelector(id_b),c=document.querySelector(id_c);
        if(a.textContent!=""&&a.textContent==b.textContent&&b.textContent==c.textContent)
        {
            
            alert(a.textContent+" is the winner");
            refresh();
        }
    }
    for(var i=0;i<3;i++)
    {
        var id_a="#a"+(i+1),id_b="#a"+(4+i),id_c="#a"+(7+i);
        var a=document.querySelector(id_a),b=document.querySelector(id_b),c=document.querySelector(id_c);
        console.log(a.textContent+" "+b.textContent+" "+c.textContent);
        if(a.textContent!=""&&a.textContent==b.textContent&&b.textContent==c.textContent)
        {
            alert(a.textContent+" is the winner");
            refresh();
        }
    }
    var a=document.querySelector("#a1"),b=document.querySelector("#a5"),c=document.querySelector("#a9");
    var d=document.querySelector("#a3"),e=document.querySelector("#a7");
    if(a.textContent!=""&&a.textContent==b.textContent&&b.textContent==c.textContent)
    {
        alert(a.textContent+" is the winner");
        refresh();
    }
    if(d.textContent!=""&&d.textContent==b.textContent&&b.textContent==e.textContent)
    {
        alert(d.textContent+" is the winner");
        refresh();
    }
}

function checkfordraw(){
    var count=0;
    for(var i=1;i<=9;i++)
    {
        var a="#a"+i;
        var sq=document.querySelector(a);
        if(sq.textContent!="") count++;
    }
    if(count==9) 
    {
        alert("Draw");
        refresh();
    }
}
