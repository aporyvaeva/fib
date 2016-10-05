function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
function res(){
document.getElementById("result").innerHTML="result:" + fib(document.getElementById("num").value);
}