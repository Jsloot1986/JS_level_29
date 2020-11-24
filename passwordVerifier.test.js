const verifyPassword = require('./passwordVerifier.js');

let password = "Jo12am";

//test length
test ('password has right Length', () =>
    expect(verifyPassword.hasRightLength(password)).toBeTruthy());


//test not to be NULL
test ('password is not NULL', () =>
    expect(verifyPassword.isNotNull(password)).toBeTruthy());

// test uppercase
test ('password has a Uppercase character', () =>
    expect(verifyPassword.hasUpperCaseCharacter(password)).toBeTruthy());

// test lowercase
test ('password has a Lowercase character', () =>
    expect(verifyPassword.hasLowerCaseCharacter(password)).toBeTruthy());

// test number
test ('password has a number', () =>
    expect(verifyPassword.hasNumber(password)).toBeTruthy());

// test if password is correct
test ('is password correct', ()=>
    expect(verifyPassword.verifyPassword(password)).toBeTruthy());