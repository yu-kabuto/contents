//document.addEventListener('DOMContentLoaded',function(){
let correct = ['路','gasoline','石鹸'];
    var num;
    //var buttons = document.querySelectorAll("input[id='buttons']");
    function judgement(num){
	var answer = document.getElementById("a"+num).value;
	    if(answer == correct[num]){
		document.getElementById("b"+num).value = "正解です!";
	    } else {
		document.getElementById("b"+num).value = "不正解です";
	    }
    }
//},false);
