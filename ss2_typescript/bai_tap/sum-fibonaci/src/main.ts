
let num1:number=0;
let num2:number=1;
console.log(num2)
let sum:number=1;
function getSum(n:number) :any {
    if (n==1){
        return sum;
    }else {
        let num3:number=num1+num2;
        console.log(num3)
        sum = sum+num3;
        num1=num2;
        num2=num3;
        return getSum(n-1);
    }
}
console.log("Tong la: "+getSum(5));
