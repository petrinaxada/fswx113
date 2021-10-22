const lang = 'JavaScript'

// Create an event listener for the submit button that adds all 'input' elements to 
// a single array using the spread operator. Call the chkLang() function, passing in 
// the array as an argument.
document.querySelector("#submit").addEventListener("click", function() {
    theArr = [...document.querySelectorAll('input')].map(i => (i.value))
    console.log(theArr)
    chkLang(theArr);
}); 
    function chkLang(langs) {
    // use an array method to check whether the user included 'JavaScript' in their
        // list of languages
    var result = langs.some((e, i) => (langs[i].toLowerCase() == lang.toLowerCase()));

   var obj = document.querySelector('#TestResult')
    if (result == true) 
        obj.innerText = `Congratulations!\nYou know ${lang}.`
    else
        obj.innerText = `Sorry,\nyou don't know ${lang}.`
}