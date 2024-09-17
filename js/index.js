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
const focusImg = document.querySelector('.text-content h2');
focusImg.addEventListener('focus', (event) => {
    event.target.style.backgroundColor = 'orange';    
});
focusImg.addEventListener('blur', (event) => {
    event.target.style.backgroundColor = '';
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

//keyup
function kKey(event){
    if(event.key === 'k'){
        alert('Hello');
    }
}
document.addEventListener('keyup', kKey);

//keypress
function eKey(event) {
    if (event.key === 'e') {
        alert('Hola')
    }
}
document.addEventListener('keypress', eKey)

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

//mouse enter
const imgSmall = document.querySelector('img');
imgSmall.addEventListener('mouseenter', function (event) {
    event.target.style.width = "50%";
    setTimeout(function(){
        event.target.style.width = '';
    }, 2000);
})

//on drag
const imgDrag = document.querySelector('.img-fluid');
imgDrag.addEventListener('drag', function(event){
    event.target.style.opacity = .5;
    setTimeout(function(){
        event.target.style.opacity = '';
    }, 2000);
});

//dragend
const imgEnd = document.querySelector('.content-destination img');
imgEnd.addEventListener('dragend', function(event){
    event.target.style.border = 'dashed';
    setTimeout(function(){
        event.target.style.border = '';
    }, 2000);
});
