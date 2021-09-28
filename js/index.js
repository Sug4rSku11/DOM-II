// Your code goes here
//logo-heading
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseover', function (event){
    event.target.style.color = 'orange';
    setTimeout(function(){
        event.target.style.color = ''
    }, 500);
}, false);