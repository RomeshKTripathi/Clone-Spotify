const cards = document.querySelectorAll('.card');
cards.forEach(card =>{
    card.addEventListener('mouseover',()=>{
        card.children[1].style.display = 'block';
    })
    card.addEventListener('mouseout', ()=>{
        card.children[1].style.display = 'none';
    })
})