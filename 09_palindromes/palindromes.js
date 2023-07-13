const palindromes = function (potential) {
    potential = potential.toLowerCase();
    let splitted = potential.split("");
    let alphabet = 'qwertyuiopasdfghjklzxcvbnm'
    let result = "";
    for (let i = 0; i < splitted.length; i++){
        for (let j in alphabet){
            if (splitted[i] == alphabet[j]) {
                result += splitted[i]
            }
        }
    }

    let reversed = "";
    for (let i = result.length-1; i >= 0; i--){
        reversed += result[i]
    }
    console.log(reversed)
    console.log(result)

    for (let i = 0; i < result.length; i++){
            if (result[i] != reversed[i]) {
                return false;
            }
    }

    return true;
    
};

console.log(palindromes('r3ace3car'))

// Do not edit below this line
module.exports = palindromes;
