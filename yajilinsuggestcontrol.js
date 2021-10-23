const hintsnumber = document.getElementById("hintsnumber");
const button1 = document.getElementById("button1");
button1.addEventListener("click", (e) => {
    e.preventDefault();
    var c = "000000000011111111111111111111122222222222222233333333334445";
    var d = "↑↓→←"
    var cl = c.length;
    var dl = d.length;
    var r = "";
    var result = document.getElementById("result");
    for(var i = 0;i < hintsnumber.value;i++){
	r += "<input type='checkbox' id='hints'><label for='hints'>";
	r += c[Math.floor(Math.random() * cl)];
	r += d[Math.floor(Math.random() * dl)];
	r += "</label><br>";
    }
    result.innerHTML = r;
});
