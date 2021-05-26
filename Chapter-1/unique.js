//uses o(n^2) approach
function isUnique(givenString){
    var i = 0;
    var isUnique = false;
    var prevComb;

    for(i=0; i<givenString.length; i++)
    {
        var a;
        for(a=i+1; a< givenString.length ; a++ ){
            if(givenString[a]==givenString[i]){
                isUnique = true;
            }
        }
        
    }
     return isUnique;
}

//const isUniquestring = isUnique('abd'); flase
//const isUniquestring = isUnique('abddd'); true
//const isUniquestring = isUnique('aabd'); tests

console.log(isUniquestring);