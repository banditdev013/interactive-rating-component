const feedback_card = document.querySelector('.feedback-card')
const rating_container = document.querySelector('.rating-container')
const ratingBtns = document.querySelectorAll('.rating')
const submit = document.getElementById('submit')
const textShowSelectRate = document.getElementById('text-select-rate')
const thankUCard = document.getElementById('thx-u-card')

let selectedRating
rating_container.addEventListener('click', (e)=>{
    if(e.target.classList.contains('rating')){
        removeActive()
        e.target.classList.add('active')
        selectedRating = e.target.value
    }
})

function removeActive(){
    for(let i=0; i<ratingBtns.length; i++){
        ratingBtns[i].classList.remove('active')
    }
}

submit.addEventListener('click', ()=>{
    feedback_card.style.display = 'none'
    thankUCard.style.display = 'flex'
    textShowSelectRate.innerText = `You selected ${selectedRating} out of 5`
})
