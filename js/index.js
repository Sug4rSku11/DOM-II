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

//.btn
//resize

//copy
//p
const para = document.querySelector('p');
para.addEventListener('copy', function (event){
   para.style.backgroundColor = '#ffde9c';
   setTimeout(function(){
       event.target.style.backgroundColor = '';
   }, 2000);
}, false);

