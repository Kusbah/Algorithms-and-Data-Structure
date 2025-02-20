//Basic Function
function welcom(){
    console.log("Welcome to coding!");
}
welcom();
//With Arguments
function square(number){
    console.log(number*number);
}
square(5)
//With Return Value
function convertToCelsius(temperature){
    return (temperature -32 ) * 5/9;
}
console.log(convertToCelsius(50))
//Reusable Function
function isEven (number){
    if(number%2===0)
        return true
    else
        return false
}
console.log(isEven(3)) 