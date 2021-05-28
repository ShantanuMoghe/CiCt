//regex with replace.
function convertToUrlString(inputString){
    var convertedStr="";
    const regex = / /ig;
    convertedStr = inputString.replace(regex,'%20');
    console.log(convertedStr) ;
}

//with for loop
function convertToUrlString(inputString){
    var convertedStr='';
    var toArr = inputString.split('');
    for(let i in toArr){
        if(toArr[i]===' '){
            toArr[i] = '%20'
        }
    }
    convertedStr = toArr.join('');
    
    convertedStr = toArr.join('');
    console.log(convertedStr);
}

convertToUrlString(' string with spaces '); //OP - string%20with%20spaces%20