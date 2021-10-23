function create() {
    var c = "ぶんすうかい";
    var cl = c.length;
    var r = "";
    for (var i = 0;i < 11;i++) {
	r += c[Math.floor(Math.random() * cl)];
    }
    target = document.getElementById("output");
    target.innerHTML = r;
}
