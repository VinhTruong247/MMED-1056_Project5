  
let iconSet = document.querySelectorAll('.container')

function whenClicked(EventObject) {
    let clickedIcon = EventObject.currentTarget;

    console.log(`the id of the svg clicked is ${clickedIcon.id}`)
    
    clickedIcon.classList.toggle('selected')
}

iconSet.forEach(function(icon) {
    icon.addEventListener('click', whenClicked, true)
})