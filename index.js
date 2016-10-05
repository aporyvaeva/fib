function fib(n){
	var a = 1;
	var b = 1;
	if(n>2){
	for(var i = 3;i<=n;i++){
		var c = a+b;
		a=b;
		b=c;
	}
	}else return 1
	return c;
}
function res(){
document.getElementById("result").innerHTML="result:" + fib(document.getElementById("num").value);
}