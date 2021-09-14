function tip(){
    var bill=document.getElementById("bill").value;
    var service=document.getElementById("value").value;
    var member=document.getElementById("members").value;
    
    var result=(bill*service)/(100*member);

    document.getElementById("tips").innerHTML=result;
}
 let color=document.getElementById("bill");
 color.style.color="pink"