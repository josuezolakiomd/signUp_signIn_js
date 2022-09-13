'use strict'

import { Validator } from "./Validator.js";

const validator = new Validator();

const loginSection = document.querySelector('#loginSection');
const contentSection = document.querySelector('#contentSection');

const createAccountBtn = document.querySelector('#createBtn');
const loginAccountBtn = document.querySelector('#loginBtn');

const SignUpForm = document.querySelector('.SignUpForm');
const SignInForm = document.querySelector('#SignInForm');

const createAccount = () => {
  createAccountBtn.addEventListener('click', () => {
    const signupInputText = document.querySelector('#signupInputText').value;
    const signupInputPass = document.querySelector('#signupInputPass').value;

    if(signupInputText && validator.typeofInputValidate(signupInputText) === 'string' && signupInputPass) {
      localStorage.setItem('username', signupInputText);
      localStorage.setItem('password', signupInputPass);
      validator.refreshNow();
      validator.deleteRefreshSession();
    } else {
      console.log('Something is wrong!');
    }
  })
}

const signInAccount = () => {
  const username = localStorage.getItem('username');
  const password = localStorage.getItem('password');

  if(username && password) {
    if(SignUpForm.hasAttribute('class')) {
      SignUpForm.setAttribute('class', 'hide');
      SignInForm.setAttribute('class', 'show');
    } 

    loginAccountBtn.addEventListener('click', () => {
      const signinInputText = document.querySelector('#signinInputText').value;
      const signinInputPass = document.querySelector('#signinInputPass').value;

      if(username === signinInputText && password === signinInputPass) {
        validator.sessionLogged(); 
      } 
    })

    if(sessionStorage.getItem('isLogged') === 'true') {
      if(loginSection.hasAttribute('class')) {
        loginSection.setAttribute('class', 'hide');
        contentSection.setAttribute('class', 'show');
      }
    } else {
      contentSection.setAttribute('class', 'hide');
    }
  } 
}

createAccount();
signInAccount();