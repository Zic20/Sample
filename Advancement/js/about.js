let more = document.getElementById('more');
let dots = document.getElementById('dots');
let btn = document.querySelector('.read-more');

btn.addEventListener('click',showmore);

function showmore(){
    if(dots.style.display === 'none'){
        dots.style.display = 'inline';
        btn.innerHTML = "Read More";
        more.style.display = 'none';
    } else {
        dots.style.display = 'none';
        btn.innerHTML = "Read Less";
        more.style.display = 'inline';
    }
}
