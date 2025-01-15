function calcDigits(number){
    var sum =0;
    while(number){
        sum += (number%10);
        number=  Math.floor(number/10);
    }
    return sum;
}
console.log("Testing calcDigits(23) = " + calcDigits(23))
//auioe

function calcVowels(str){
    word = {
        'a':0,
        'u':0,
        'i':0,
        'o':0,
        'e':0
    }

    str = str.toLowerCase();
    for(var i=0;i<str.length;i++){
        var c = str[i]; 
        if(c == 'a' || c == 'u' || c == 'i' || c == 'o' || c == 'e'){ // [].includes(c)
            word[c]++;
        }
    }
    return word
}
console.log("Testing calcVowels('Basmala') = " + JSON.stringify(calcVowels("Basmala")));

function calcOccurences(str, ch){
    var count =0;
    str = str.toLowerCase();
    for(var i=0;i<str.length;i++){
        var c = str[i]; 
        if(c === ch){
            count++;
        }
    }
    return count;
}

console.log("Testing calcOccurences('Basmala','a') = " + calcOccurences("Basmala",'a'));