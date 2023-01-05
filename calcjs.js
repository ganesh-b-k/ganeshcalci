function evaluateMe()
{
    var s=document.getElementById('result').value;
    if(s.length==0){
        alert("Please enter an Expression")
        return;
    }
    try{
        var res=eval(s);
        document.getElementById('result').value=res;
    }
    catch{
        alert("invalid expression");
    }
}
function squareroot()
{
    var s=document.getElementById('result').value;
    document.getElementById('result').value=Math.sqrt(s);
}function cuberoot()
{
    var s=document.getElementById('result').value;
    document.getElementById('result').value=Math.cbrt(s);
}

