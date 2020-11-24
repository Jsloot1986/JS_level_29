//Utility functions

//function to check length
const hasRightLength = (str) => (str.length < 9) ? true : false;


// function to check not to be null
const isNotNull = (str) => (str) ? true : false;


//function to check 1 uppercase
const hasUpperCaseCharacter = (str) => {
    let totalUpperCase = 0;
    for (i=0; i < str.length; i++)
        if ((str.charAt(i) === str.charAt(i).toUpperCase())&& isNaN(str.charAt(i)))
            totalUpperCase++;
    if (totalUpperCase >= 1)
    return true; 
    else return false
};

//function to check 1 lowercase
const hasLowerCaseCharacter = (str) => {
    let totalLowerCase = 0;
    for (i=0; i < str.length; i++)
        if ((str.charAt(i) === str.charAt(i).toLowerCase())&& isNaN(str.charAt(i)))
            totalLowerCase++;
    if (totalLowerCase >= 1)
    return true; 
    else return false
};

//function to check 1 number
const hasNumber = (str) => {
    let totalNumbers = 0;
    for (i=0; i < str.length; i++)
    if (isNaN(str.charAt(i))){}else totalNumbers++;
    if (totalNumbers >= 1)
    return true;
    else return false;
}
// function to check the conditions
const minconditionsReached = conditions =>{
    trueConditions = conditions.filter(bool => bool);
    return trueConditions.length >= 3;
}

//function to combine the other functions
const verifyPassword = password =>{
    const conditions =[
        hasRightLength(password),
        isNotNull(password),
        hasUpperCaseCharacter(password),
        hasLowerCaseCharacter(password),
        hasNumber(password)
    ];
    const result = minconditionsReached(conditions) && hasLowerCaseCharacter(password);
    return result;
};
    
    module.exports = {
        verifyPassword,
        hasRightLength,
        isNotNull,
        hasUpperCaseCharacter,
        hasLowerCaseCharacter,
        hasNumber,
        verifyPassword
    };