
var a=document.getElementById('details')
var r_value=a.style.transform
var new_r;


function clockwise(){
    new_r=r_value+'rotate(-90deg)'
    a.style.transform=new_r;
    r_value=new_r
}

function anticlkws(){
    new_r=r_value+'rotate(90deg)'
    a.style.transform=new_r;
    r_value=new_r
}


// r_value=rotate(0deg)
// new_r=rotate(0deg)+rotate(90deg)