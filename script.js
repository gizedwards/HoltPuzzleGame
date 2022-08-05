const draggable = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

//makes things draggable
draggable.forEach(draggable => {
    draggable.addEventListener('dragstart', () =>{
        draggable.classList.add('dragging')
    })

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
    })

})

containers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(container, e.clientY)
        const draggable = document.querySelector('.dragging')        
        if (afterElement == null) {
            container.appendChild(draggable)
        } else {
            container.insertBefore(draggable, afterElement)
        }       
    })
})

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child }
        }   else {
            return closest
        }
        }, { offset: Number.NEGATIVE_INFINITY }).element
}

//Create a random number either -1, or +1
let randomNumber = Math.floor(Math.random() *2) +1;
if (randomNumber == 1) {
    randomNumber = -1;
} else (randomNumber = 1);

//Choose a random person.
let listOfPeople = ['Amy', 'Boyle', 'Doug', 'Gina', 'Hitchcock', 'Holt', 'Jake', 'Kevin', 'Pimento', 'Rosa', 'Scully', 'Terry'];
let randomPerson = listOfPeople[Math.floor(Math.random() * listOfPeople.length)];

function creatingTheCulprit() {
if (randomPerson == 'Amy') {
    culprit = Amy.classList.add('culprit');
}
if (randomPerson == 'Boyle') {
    culprit = Boyle.classList.add('culprit');
}
if (randomPerson == 'Doug') {
    culprit = Doug.classList.add('culprit');
}
if (randomPerson == 'Gina') {
    culprit = Gina.classList.add('culprit');
}
if (randomPerson == 'Hitchcock') {
    culprit = Hitchcock.classList.add('culprit');
}
if (randomPerson == 'Holt') {
    culprit = Holt.classList.add('culprit');
}
if (randomPerson == 'Jake') {
    culprit = Jake.classList.add('culprit');
}
if (randomPerson == 'Kevin') {
    culprit = Kevin.classList.add('culprit');
}
if (randomPerson == 'Pimento') {
    culprit = Pimento.classList.add('culprit');
}
if (randomPerson == 'Rosa') {
    culprit = Rosa.classList.add('culprit');
}
if (randomPerson == 'Scully') {
    culprit = Scully.classList.add('culprit');
}
if (randomPerson == 'Terry') {
    culprit = Terry.classList.add('culprit');
}
}

console.log(randomPerson);
console.log(randomNumber);

function clickToWeigh() {
    creatingTheCulprit();
    const leftside = document.getElementById('leftside');
    const rightside = document.getElementById('rightside');
    let leftcount = leftside.children.length;
    let rightcount = rightside.children.length;
    
    if (leftside.querySelector('.culprit')) {
        leftcount = leftcount + randomNumber;
    }
    else if (rightside.querySelector('.culprit')) {
        rightcount = rightcount + randomNumber;
    }

    if (leftcount == rightcount){
        console.log('equal weight')
    } else if (leftcount > rightcount) {
        console.log('left heavier')
    } else if (leftcount < rightcount) {
        console.log('right heavier')
    }
}