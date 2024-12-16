const submiteRateButton = document.querySelector('.submit-btn button');
const ratingBox = document.querySelector('.rating-box');
const thankYouBox = document.querySelector('.thank-you-box');
const ratingBtn = document.querySelectorAll('.rating-btn');
let ratingResult = document.querySelector('.rating-result');

let ratingValue = "";



ratingBtn.forEach(element => {
    element.addEventListener('click', (e)=>{
        ratingValue = e.target.value; // Get the value of the clicked button
        console.log(ratingValue);
        
         // Remove 'active' class from all buttons
         ratingBtn.forEach(btn => btn.classList.remove('active'));

         // Add 'active' class to the clicked button
         e.target.classList.add('active');
         document.querySelector('.error').classList.add('hidden');
    });
});


submiteRateButton.addEventListener('click',()=>{
    if(ratingValue != ""){
        ratingBox.classList.add('hidden');
        thankYouBox.classList.remove('hidden');
        ratingResult.textContent = ratingValue;
    }else{
        document.querySelector('.error').classList.remove('hidden');
    }
    
    
});
