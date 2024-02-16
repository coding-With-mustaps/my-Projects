// GETTING DOM ELEMENTS USING THE DATA SET NAME

const firstName = document.querySelector('[data-first-name]');
const lastName = document.querySelector('[data-last-name]');
const maleCheck = document.querySelector('[data-male-check]');
const femaleCheck = document.querySelector('[data-female-check]');
const formSubmit = document.querySelector('[data-form-submit]');
const password = document.querySelector('[data-password]');
const comfirmPassword = document.querySelector('[data-comfirm-password]');
const submitButton = document.querySelector('[data-submit-button]');
let firstNameError = document.querySelector('.first_name_error');
let lastNameError = document.querySelector('.last_name_error');
let passwordError1 = document.querySelector('.password_strength_p');
let passwordError2 = document.querySelector('.not-match');
let speedy_meter = document.querySelector('.password-strength');
let eyeIcon = document.querySelectorAll('.fa-eye-slash');

// The form event
let submittingFormEvent = (event) => {
    event.preventDefault();
    let passwordWeaknesses = checkingTheStrengthOfPassword(password.value.trim());

    let strength = 100;
    passwordError2.innerHTML = '';

    passwordWeaknesses.forEach(password => {
        // I will just do not thing if the weakness is not been defined to 
        /**
         * ! To avoid potential errors in the future
         */
        if (password === undefined) return;

        strength -= password.strengthDeduction;
        speedy_meter.style.setProperty('--strength', strength);

        let errorElement = document.createElement('div');
        errorElement.innerHTML = password.message;
        passwordError2.appendChild(errorElement);
    });

    checkNamesContainingNumberOrEmpty();
    checkingPassword();

};

/**
 * ! I added event listener to password input to be able to update the speedy_meter at real time
 * ? When the user is typing.
 */

let passwordInputEvent = (event) => {
    event.preventDefault();
    let passwordWeaknesses = checkingTheStrengthOfPassword(password.value.trim());

    let strength = 100;
    passwordError2.innerHTML = '';

    passwordWeaknesses.forEach(password => {
        if (password === undefined) return;

        strength -= password.strengthDeduction;
        speedy_meter.style.setProperty('--strength', strength);

        let errorElement = document.createElement('div');
        errorElement.innerHTML = password.message;
        passwordError2.appendChild(errorElement);
    });

}

/**
 * ! The function below is to check whether user names entered contain numbers or not
 */

let checkNamesContainingNumberOrEmpty = () => {
    let userFirstName = firstName.value.trim();
    let userLastName = lastName.value.trim();

    // RegEx for first name check
    let isFirstNameContainNum = userFirstName.match(/[0-9]/);
    let isFirstNameContainSym = userFirstName.match(/[&.;*()%$#@!~/><|?,"']/);

    // RegEx for last name check
    let isLastNameContainNum = userLastName.match(/[0-9]/);
    let isLastNameContainSym = userLastName.match(/[&.;*()%$#@!~/><|?,"']/);

    // CHECKING IF NAMES FIELD IS EMPTY

    /**
     * ! I also use the setTimeout() method to remove the error message in 4s time after showing the error.
     */
    if (userFirstName === '') {
        firstNameError.innerHTML = `first name field cann't be empty`;

        setTimeout(() => {
            firstNameError.innerHTML = '';
        }, 4000)

    } else if (userLastName === '') {
        lastNameError.innerHTML = `last name field cann't be empty`;

        setTimeout(() => {
            lastNameError.innerHTML = '';
        }, 4000);

    } else if (userFirstName === userLastName) {
        lastNameError.innerHTML = `First and Last name cann't be same.`;

        setTimeout(() => {
            lastNameError.innerHTML = '';
        }, 4000);

    };

    // CHECKING IF NAMES CONTAIN NUMBERS OR SYMBOLS

    /**
     * ! I first check for "null" because match() method always return null when there is no match.
     * ? For me to avoid some errors in the future I check to see if there is no match before trying to get access to the "length" of the match in an array form.
     */
    if (isFirstNameContainNum === null || isFirstNameContainNum || isFirstNameContainSym || isFirstNameContainSym === null) {
        firstNameError.innerHTML = `first name cann't contain numbers or symbols`;
        setTimeout(() => {
            firstNameError.innerHTML = '';
        }, 4000)
    } else if (isLastNameContainNum === null || isLastNameContainNum || isLastNameContainSym === null || isLastNameContainSym) {
        lastNameError.innerHTML = `last name cann't contain numbers`;
        setTimeout(() => {
            lastNameError.innerHTML = '';
        }, 4000)
    };

};

// CHECKING WHETHER PASSWORD FIELD IS EMPTY OR NOT 
let checkingPassword = () => {

    let passwordCheck = password.value.trim();
    let comfirmPasswordCheck = comfirmPassword.value.trim();

    if (passwordCheck === '') {
        passwordError1.innerHTML = `You must enter a security code`;

        setTimeout(() => {
            passwordError1.innerHTML = ``;
        }, 4000)
    } else if (comfirmPasswordCheck === '') {
        passwordError2.innerHTML = `You must comfirm your password`;

        setTimeout(() => {
            passwordError2.innerHTML = ``;
        }, 4000)
    } else if (passwordCheck !== comfirmPasswordCheck) {
        passwordError2.innerHTML = `Password did not match`;

        setTimeout(() => {
            passwordError2.innerHTML = ``;
        }, 4000)
    };
};

// This function will contain all the password weakness in the form of array.
let checkingTheStrengthOfPassword = (password) => {
    let weakness = [];

    weakness.push(upperCaseCheck(password));
    weakness.push(lowerCaseCheck(password));
    weakness.push(numberChecking(password));
    weakness.push(specialSymbolscheck(password));

    return weakness;
}


// Checking the length of the password
/**
 * ! IF THE LENGTH OF THE PASSWORD IS LESS THAN OR EQUAL TO 5 THEN I SUBSTRACT 50 OUT FROM THE STRENGTH WHICH WAS INITIALLY 100%
 **/
let checkingLength = (password) => {
    if (password.length <= 5) {
        return {
            message: `Password cann't be less than or equaty ${password.length}`,
            strengthDeduction: 50,
        }
    } else {
        return {
            message: ``,
            strengthDeduction: 5
        }
    }
};

// Functions to check for Uppercase, Lowercase and numbers of the user password and substract accordingly
let upperCaseCheck = (password) => functionHelper(password, /[A-Z]/g, 'upperCase');
let lowerCaseCheck = (password) => functionHelper(password, /[a-z]/g, 'lowerCase');
let numberChecking = (password) => functionHelper(password, /[0-9]/g, 'numbers')

// This is a function helper
let functionHelper = (password, regex, lowerOrUpper) => {
    let letPasswordMatch = password.match(regex);
    // let lowerCasePassword = password.match(/[a-z]/g);
    // let specialSymbols = password.match(/[@#(*&%!><?,|]/g);

    if (letPasswordMatch === null || letPasswordMatch.length === 0) {
        return {
            message: `Password must contain at least 2 ${lowerOrUpper} letters`,
            strengthDeduction: 30
        }
    };


    if (letPasswordMatch.length <= 2) {
        return {
            message: `Your password could contain more than 2 ${lowerOrUpper}`,
            strengthDeduction: 10,
        }
    } else {
        return {
            message: ``,
            strengthDeduction: 0
        }
    };

};

// This function is also to check for special symbols in the password and substract accordingly
let specialSymbolscheck = (password) => {
    let specialSymbols = password.match(/[@#(*&%!><?,|]/g);

    if (specialSymbols === null || specialSymbols.length === 0) {
        return {
            message: `Password must contain at least 2 special symbols`,
            strengthDeduction: 30
        }
    };


    if (specialSymbols < 2) {
        return {
            message: `Your password could contain more than ${specialSymbols.length} symbols`,
            strengthDeduction: 10
        }
    } else {
        return {
            message: ``,
            strengthDeduction: 0
        }
    }

}

// Showing the password as text
let makePasswordInView = () => {
    eyeIcon.forEach(eye => {
        console.log(eye);
        eye.addEventListener('click', (event) => {
            if (password.type === 'password' || comfirmPassword.type === 'password') {
                password.type = 'text';
                comfirmPassword.type = 'text';
            } else {
                password.type = 'password';
                comfirmPassword.type = 'password';
            }
        })
    })
}
makePasswordInView()

// These are the event listeners for the form and the password input field
formSubmit.addEventListener('submit', submittingFormEvent);
password.addEventListener('input', passwordInputEvent);