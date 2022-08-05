const draggable = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

//makes the images draggable
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
let listOfPeople = ['Amy', 'Boyle', /*'Doug', 'Gina', 'Hitchcock', 'Holt', 'Jake', 'Kevin', 'Pimento', 'Rosa', 'Scully', 'Terry'*/];
let randomPerson = listOfPeople[Math.floor(Math.random() * listOfPeople.length)];

//creates the culprit (I do not know how this is connecting to the id tags in the divs... I just know that it is.)
//There is also probably a better way of doing this. Refactoring, I just do not know what that would be yet.
function creatingTheCulprit() {
    switch (randomPerson){
        case ('Amy'): culprit = Amy.classList.add('culprit');
            break;
        case ('Boyle'): culprit = Boyle.classList.add('culprit');
            break;
        case ('Doug'): culprit = Doug.classList.add('culprit');
            break;
        case ('Gina'): culprit = Gina.classList.add('culprit');
            break;
        case ('Hitchcock'): culprit = Hitchcock.classList.add('culprit');
            break;
        case ('Holt'): culprit = Holt.classList.add('culprit');
            break;
        case ('Jake'): culprit = Jake.classList.add('culprit');
            break;
        case ('Kevin'): culprit = Kevin.classList.add('culprit');
            break;
        case ('Pimento'): culprit = Pimento.classList.add('culprit');
            break;
        case ('Rosa'): culprit = Rosa.classList.add('culprit');
            break;
        case ('Scully'): culprit = Scully.classList.add('culprit');
            break;
        case ('Terry'): culprit = Terry.classList.add('culprit');
            break;
    }
}
//this is just for me to debug.
//console.log(randomPerson);
//console.log(randomNumber);

//after dragging the people onto the seesaw, click the 'weigh' button and it will weigh everone on both sides
//it will then add the .culprit class onto the side and add the random number too
//it will then spit out a console.log for; equal weight, left heavier, or right heavier. 
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

//to do list...
//create a new game button (refresh).
//limit the weigh button to three attempts.
//have a character selector function. (who are you guessing is either heavier or lighter...)
//character selector limited to one guess.
//make some attempt at beautifying the design. 
//perhaps add some css animation if I can figure out how. Maybe an actual seesaw?