function getAccounts(callback) {
    let a = callback(null, 'venky');
    console.log(a)
}
function changeValue(aObj, funcArg) {
    let b = funcArg(null, 'swaroop');
		return b;
}
getAccounts(
    function (error, accounts) {
        if (accounts) {
            //return accounts;
        }
        changeValue('dfd', function (error, result) {
            //console.log(JSON.stringify(result));
            return result;

        });
});


// user/login 

// user/createuser
