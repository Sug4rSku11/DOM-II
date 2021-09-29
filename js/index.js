// Your code goes here
//mouseover
//logo-heading
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseover', function (event){
    event.target.style.color = 'orange';
    setTimeout(function(){
        event.target.style.color = ''
    }, 500);
}, false);

//focus
//.intro img
const focusImg = document.querySelector('.intro img');
focusImg.addEventListener('focus', (event) => {
    event.target.style.background = 'orange';    
});
focusImg.addEventListener('blur', (event) => {
    event.target.style.background = '';
})


//copy
//p
const para = document.querySelector('p');
para.addEventListener('copy', function (event){
   para.style.backgroundColor = '#ffde9c';
   setTimeout(function(){
       event.target.style.backgroundColor = '';
   }, 2000);
}, false);

//keydown
function dKey(event){
    if(event.key === 'd'){
        alert('Hi');
    }
} 
document.addEventListener('keydown', dKey);

//doubleclick
const signUp = document.querySelector('.btn');
signUp.addEventListener('dblclick', function (event) {
    event.target.style.color = '#75ba76';
    setTimeout(function(){
        event.target.style.color = '';
    }, 2000);
}, false);


//click

const welcome = document.querySelector('header h2');
welcome.addEventListener('click', function (event){
    event.target.style.border = 'dotted';
    setTimeout(function(){
        event.target.style.border = '';
    }, 2000);
})
