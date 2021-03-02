
const closedFace=document.querySelector('.closed');
const openFace=document.querySelector('.open');
//const mouthFace=document.querySelector('.mouth');



closedFace.addEventListener('click', () =>{
    if (openFace.classList.contains('open')){
        openFace.classList.add('active');
        closedFace.classList.remove('active');
        console.log(closedFace);
    }
});

openFace.addEventListener('click', () =>{
    if (closedFace.classList.contains('closed')){
        closedFace.classList.add('active');
        openFace.classList.remove('active');
        console.log(closedFace);
    }
});