document.getElementById("parent").innerHTML=("Hello world");
document.getElementById("parent").style.cssText=("background-color:plum; color: black");
document.getElementsByClassName("exercise")[0].innerHTML=("Janavi rajbhandari");
document.getElementsByClassName("parent1")[0].style.cssText=("text-transform:uppercase");
document.getElementsByTagName("h3")[2].innerHTML=("hello i'm changed");
document.querySelector("#heading").style.cssText=("background-color:yellow; color:red") /*first ma ju bhetyo tei lai change garxa*/
document.querySelector(".heading").style.cssText=("background-color:red; color:white")
const change = document.querySelectorAll("h2"); /* h2 bhako sab lai change garxa*/[]
for (i=0; i<change.length; i++){
    change[i].innerHTML=("i am different");
}