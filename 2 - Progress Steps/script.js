// get the elements 
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

var currentActive = 1;
// create click event on next button
next.addEventListener('click',() =>{
    currentActive++
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    updateClass()
});

// create click event on Prev button
prev.addEventListener('click',() =>{
    currentActive--
    if (currentActive < 1) {
        currentActive = 1;
    }
    updateClass()
});

function updateClass() {
    circles.forEach((circle, index) => {
        if(index < currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })

    var activeCircles = document.querySelectorAll('.active');

    progress.style.width = (activeCircles.length -1) / (circles.length -0.9) * 100 + '%';
    
    if(currentActive ===1 ){
        prev.disabled = true;
    }else if(currentActive === circles.length){
        next.disabled = true
    }else{
        prev.disabled = false;
        next.disabled = false
    }
}
