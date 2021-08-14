// All h2 color change
const h2ColorChanges = document.getElementsByTagName('h2');
for (const h2ColorChange of h2ColorChanges) {
    h2ColorChange.style.color = 'tomato';
}
// Backpack Background color change
document.getElementById('backpack').style.backgroundColor = 'lightblue';
// All cards border radius change
const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = '30px';
}
// btn clicked added console using function
function btnClicked() {
    console.log('you clicked the button');
}
// remove an btn clicking that button using event handler
const buyNowBtns = document.getElementsByClassName('panda-btn-buy-now');
for (const buyNowBtn of buyNowBtns) {
    buyNowBtn.addEventListener('click', function () {
        buyNowBtn.parentNode.removeChild(buyNowBtn);
    })
}
// Submit btn disabling using event handler
document.getElementById('submit-confirm').addEventListener('keyup', function(){
    const submitBtn = document.getElementById('submit-btn');
    if(event.target.value == 'email'){
        submitBtn.removeAttribute('disabled');
    }
    else{
        submitBtn.setAttribute('disabled', true);
    }
});
//Backpack image change using event handler
const backpackImg = document.getElementById('backpack-img');
backpackImg.addEventListener('mouseenter', function () {
    backpackImg.src = "images/bags/bag-4.jfif";
})
// Subscribe background color change
const subscribe = document.getElementById('subscribe');
subscribe.addEventListener('dblclick', function () {
    subscribe.style.backgroundColor = 'tomato';
})