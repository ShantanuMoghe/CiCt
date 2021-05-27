//check if the given string is permutation of other given string.

function isPermutation(str1,str2){
    var isPermutationVar = false;
    var count=0;
    var arr1 = str1.split('');
    arr1.forEach(element=> {
        var contains =str2.includes(element);
        if(contains === true)
        {
            count++;
            if(count===str1.length && str1.length === str2.length){
                isPermutationVar = true;
            }
        }
    });
    return isPermutationVar;
}

console.log(isPermutation('abcdefg','gbcadef'));//true
console.log(isPermutation('abc','gbcadef'));//false