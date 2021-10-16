p1name = localStorage.getItem("player1");
p2name = localStorage.getItem("player2");
document.getElementById("player1name").innerHTML = p1name;
document.getElementById("player2name").innerHTML = p2name;
p1score = 0;
p2score = 0;
document.getElementById("player1score").innerHTML = p1score;
document.getElementById("player2score").innerHTML = p2score;
document.getElementById("player_question").innerHTML = "Question turn -" +p1name;
document.getElementById("player_answer").innerHTML = "Answer turn -" +p2name;
function send()
{
    number=document.getElementById("number").value;
    letter1 = number.charAt(1);
    console.log(letter1);
    len = Math.floor(number.length/2);
    letter2 = number.charAt(len);
    console.log(letter2);
    lenminus = number.length-1;
    letter3 = number.charAt(lenminus);
    console.log(letter3);
    rp1 = number.replace(letter1,"_");
    rp2=rp1.replace(letter2,"_");
    rp3=rp2.replace(letter3,"_");
    questionword="<h4 id='question'>Q."+rp3+"</h4>";        
ipbox="<br> answer:<input type='text' id='ans'>"
checkbutton="<br><br><button class='btn btn-success' onclick='check()'>check</button>";
row=questionword + ipbox +checkbutton;
document.getElementById("output").innerHTML=row;
document.getElementById("number").value="";
}