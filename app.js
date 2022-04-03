 'use strict'

const deposit = document.getElementById('deposit'); // btn
const depositInput = document.getElementById('deposit-input'); // input
const deposited = document.getElementById('deposited'); // innerText
const withdraw = document.getElementById('withdraw'); // btn
const withdrawInput = document.getElementById('withdraw-input'); // input
const withdrawed = document.getElementById('withdrawed');// innerText

const total = document.getElementById('total');


function moneyCount(idName, inText ) {
    const getId = document.getElementById(idName);
    const value = parseFloat(getId.value); // input value
    const innerValue = parseFloat(inText.innerText); // innerText
    const updateDeposit = value + innerValue; // adding input value and innerText
    inText.innerText = updateDeposit; // set the added number to the innerText
  
}

function totalCount(idName, isAdd) {
    const getId = document.getElementById(idName);
    const value = parseFloat(getId.value);
    const innerValue = parseFloat(total.innerText); // innerText
    if(isAdd == true) {

        total.innerText = value + innerValue;
    } else {
        total.innerText =  innerValue - value;
    }
      getId.value = ''
}

//  click button for deposit
deposit.addEventListener('click', function () {
    moneyCount('deposit-input',  deposited)
    totalCount('deposit-input', true)
})
//  click button for withdraw
withdraw.addEventListener('click', function () {
    moneyCount('withdraw-input',  withdrawed)
    totalCount('withdraw-input', false)
})