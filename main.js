const search = document.querySelector('.search');
const li = document.querySelectorAll('li');

const findTheDrink = e => {
    const text = e.target.value.toLowerCase();
    setTimeout(() => {
    li.forEach(li => {
        if(li.textContent.toLowerCase().indexOf(text) !== -1){
            li.style.display = 'block'
            
        } else {
            li.style.display = 'none'
        }
    })
}, 1000);
}



search.addEventListener('keyup', findTheDrink);