// let fibonacis : Array<number> = [];
// function getFibonacis(number : number): Array<number> {
//
//     return
// }
// function getFibonacis(number : number) {
//     fibonacis.push(1);
//     fibonacis.push(1);
//     for (let i=2; i<number; i++){
//         fibonacis.push(fibonacis[i-2]+fibonacis[i-1]);
//     }
// }
//
// getFibonacis(5);
// let sum : number = 0;
// for (let j=0; j<fibonacis.length; j++){
//     console.log(fibonacis[j]);
//     sum+=fibonacis[j];
// }
var num1 = 0;
var num2 = 1;
// console.log(num1)
console.log(num2);
var sum = 1;
function getSum(n) {
    if (n == 1) {
        return sum;
    }
    else {
        var num3 = num1 + num2;
        console.log(num3);
        sum = sum + num3;
        num1 = num2;
        num2 = num3;
        return getSum(n - 1);
    }
}
console.log("Tong la: " + getSum(5));
