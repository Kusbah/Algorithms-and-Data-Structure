//Print Numbers
for(var i = 0 ; i<=10;i++)
    console.log(i)
//Reverse Counting
for(var i = 10 ; i>=0;i--)
    console.log(i)
//Even Numbers
for(var i = 1 ; i<=20;i++){
    if(i%2==0)
        console.log(i)
}
//Odd Numbers
for(var i = 1 ; i<=20;i++){
    if(i%2==1)
        console.log(i)
}
//Sum of Numbers
var sum=0;
for(var i = 1; i<=10;i++){
    sum= sum+i;
}
console.log(sum)
//FizzBuzz
for(var i = 1 ; i<=30; i++){
    if(i%3==0&&i%5==0)
        console.log("FizzBuzz")
    else if(i%3==0)
        console.log("Fizz")
    else if(i%5==0)
        console.log("Buzz")
    else
        console.log(i)
}