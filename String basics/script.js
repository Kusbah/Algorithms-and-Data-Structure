//1. Remove Blanks
function removeBlanks(str) {
    var removeblanks = str.split(" ");
    console.log(removeblanks.join(""))
}
removeBlanks(" Pl ayTha tF u nkyM usi c ");
removeBlanks("I can not BELIEVE it's not BUTTER");
//2. Get Digits
function getDigits(str) {
    var digits = "";
    for(var i = 0 ; i<str.length;i++){
        if(!isNaN(str[i])){
            digits+= str[i];
        }
    }
    
    return Number(digits);
    
}
console.log(getDigits("abc8c0d1ngd0j0!8"));
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0")); 
//3. Acronyms
function acronym(str) {
    var wordArray = str.split(" ")
    var text = ""
    for(var i = 0 ; i < wordArray.length ; i++ ){
        var word = wordArray[i];
        if(word !== ''){
        
        text += word[0];
        }
    }
    return text.toUpperCase();
}
console.log(acronym(" there's no free lunch - gotta pay yer way. "));
console.log(acronym("Live from New York, it's Saturday Night!"));
//4. Count Non-Spaces
function countNonSpaces(str) {
    var counter = 0;
    for(var i = 0 ; i< str.length;i++){
        if(str[i]!== ' ')
            counter += 1;
    }
    return counter;
}
console.log(countNonSpaces("Honey pie, you are driving me crazy"));
console.log(countNonSpaces("Hello world !"));
//5. Remove Shorter Strings
function removeShorterStrings(arr, minLength) {
    for(var i = 0 ; i<arr.length;i++){
        if(arr[i].length>=minLength)
            console.log(arr[i])
    }
}
removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4); 
removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3); 