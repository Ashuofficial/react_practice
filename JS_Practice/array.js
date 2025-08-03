
function sum(){
    console.log('ashok durunde from Pune');
}

sum()

function isPalindrome(str){
    return str===str.split('').reverse().join('');
}

console.log(isPalindrome('aassaa'))

// closures
function alpha(){
    let a=10
    return{
        beta : function(){
        console.log(a);
        return a;
    }
    }
    
}

const gamma=alpha();
console.log('closure', gamma.beta());