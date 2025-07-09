var a=null,b=null;
$("#bt").click(start);
$(".cr").click(click);
var x=0;
function start(){
    x=0;
    setTimeout(() => fetchdeets(), 100)
    $(".cr").css('background-color','white');
}
function fetchdeets()
{
    a=prompt("Enter Player 1 name");
    b=prompt("Enter Player 2 name");
    $('h2').text("Player "+a+" it's your turn");
}
function click()
{
    var k=$(this).attr('id');
    var l=(k.length>2)?k[2]-'0'+10*(k[1]-'0'):k[1]-'0';
    l=(l%7)?l%7:7;
    console.log(l)
    while(l<=42&&$("#a"+l).css('background-color') === 'rgb(255, 255, 255)')
    {
        l+=7;
    }
    l-=7;
    if(l>0)
    {
    if(x%2==0) $("#a"+l).css('background-color','blue');
    else $("#a"+l).css('background-color','red');
    if(x%2==0) $('h2').text("Player "+b+" it's your turn");
    else $('h2').text("Player "+a+" it's your turn");
    x++;
    }
    setTimeout(() => determine_winner(), 100)
}

function determine_winner(){
    var count=0;
    for(var i=1;i<=42;i++)
    {
        if($("#a"+i).css('background-color') != 'rgb(255, 255, 255)')
        {
            count++;
            if(i<=21)
            {
            if($("#a"+i).css('background-color')===$("#a"+(i+7)).css('background-color')&&$("#a"+(i+14)).css('background-color')===$("#a"+i).css('background-color')&&$("#a"+(i+21)).css('background-color')===$("#a"+i).css('background-color'))
            {
                if($("#a"+i).css('background-color') === 'rgb(255, 0, 0)')
                {
                    alert("Player "+b+" has won");
                    start();
                    return;
                }
                else
                {
                    alert("Player "+a+" has won");
                    start();
                    return;
                }
            }
            }
            if(i%7>0&&i%7<=4)
            {
            if($("#a"+i).css('background-color')===$("#a"+(i+1)).css('background-color')&&$("#a"+i).css('background-color')===$("#a"+(i+2)).css('background-color')&&$("#a"+i).css('background-color')===$("#a"+(i+3)).css('background-color'))
            {
                if($("#a"+i).css('background-color') === 'rgb(255, 0, 0)')
                {
                    alert("Player "+b+" has won");
                    start();
                    return;
                }
                else
                {
                    alert("Player "+a+" has won");
                    start();
                    return;
                }
            }
            }
            if(i%7>0&&i%7<=4&&i<=21)
            {
            if($("#a"+i).css('background-color')===$("#a"+(8+i)).css('background-color')&&$("#a"+i).css('background-color')===$("#a"+(i+24)).css('background-color')&&$("#a"+i).css('background-color')===$("#a"+(i+16)).css('background-color'))
            {
                if($("#a"+i).css('background-color') === 'rgb(255, 0, 0)')
                {
                    alert("Player "+b+" has won");
                    start();
                    return;
                }
                else
                {
                    alert("Player "+a+" has won");
                    start();
                    return;
                }
            }
            }
            if((i%7==0||i%7>=4)&&i<=21)
            {
            if($("#a"+i).css('background-color')===$("#a"+(6+i)).css('background-color')&&$("#a"+i).css('background-color')===$("#a"+(i+12)).css('background-color')&&$("#a"+i).css('background-color')===$("#a"+(i+18)).css('background-color'))
            {
                if($("#a"+i).css('background-color') === 'rgb(255, 0, 0)')
                {
                    alert("Player "+b+" has won");
                    start();
                    return;
                }
                else
                {
                    alert("Player "+a+" has won");
                    start();
                    return;
                }
            }
            }
        }
    }
    if(count==42)
    {
        alert("Draw");
        start();
    }
    return;
}
start()
