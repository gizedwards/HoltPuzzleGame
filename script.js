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

//appends dropped to class
draggable.forEach(draggable => {
    draggable.addEventListener('dragend',() => {
        draggable.classList += (' dropped')
    }
    )}
)

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

//turned the id of each islander into their own let

let Amy = document.getElementById('#Amy');
let Boyle = document.getElementById('#Boyle');
let Doug = document.getElementById('#Doug');
let Gina = document.getElementById('#Gina');
let Hitchcock = document.getElementById('#Hitchcock');
let Holt = document.getElementById('#Holt');
let Jake = document.getElementById('#Jake');
let Kevin = document.getElementById('#Kevin');
let Pimento = document.getElementById('#Pimento');
let Rosa = document.getElementById('#Rosa');
let Scully = document.getElementById('#Scully');
let Terry = document.getElementById('#Terry');


//turned the islander let into a number, all equal. 
Amy = 10;
Boyle = 10;
Doug = 10;
Gina = 10;
Hitchcock = 10;
Holt = 10;
Jake = 10;
Kevin = 10;
Pimento = 10;
Rosa = 10;
Scully = 10;
Terry = 10;

//created a random number between 1-2, 
//if it was 1 then it ='-10'
//if it was anything but 1 ='10'

let randomNumber = Math.floor(Math.random() *2) +1;
if (randomNumber == 1) {
    randomNumber = -10;
} else (randomNumber = 10);

//need to choose a random person.
let listOfPeople = ['Amy', 'Boyle', 'Doug', 'Gina', 'Hitchcock', 'Holt', 'Jake', 'Kevin', 'Pimento', 'Rosa', 'Scully', 'Terry'];
let randomPerson = listOfPeople[Math.floor(Math.random() * listOfPeople.length)];
let oddOneOut = randomPerson

//out of the list of random people I assigned the randomnumber to their value
if (randomPerson == 'Amy') {
    randomPerson = Amy + randomNumber
}
else if (randomPerson == 'Boyle') {
    randomPerson = Boyle + randomNumber
}
else if (randomPerson == 'Doug') {
    randomPerson = Doug + randomNumber
}
else if (randomPerson == 'Gina') {
    randomPerson = Gina + randomNumber
}
else if (randomPerson == 'Hitchcock') {
    randomPerson = Hitchcock + randomNumber
}
else if (randomPerson == 'Holt') {
    randomPerson = Holt + randomNumber
}
else if (randomPerson == 'Jake') {
    randomPerson = Jake + randomNumber
}
else if (randomPerson == 'Kevin') {
    randomPerson = Kevin + randomNumber
}
else if (randomPerson == 'Pimento') {
    randomPerson = Pimento + randomNumber
}
else if (randomPerson == 'Rosa') {
    randomPerson = Rosa + randomNumber
}
else if (randomPerson == 'Scully') {
    randomPerson = Scully + randomNumber
}
else if (randomPerson == 'Terry') {
    randomPerson = Terry + randomNumber
}

console.log(randomPerson);
console.log(oddOneOut);


// need to add people's weight onto the see saw
//need to add event listener to button

// poss add an apend to the class

//makes the button clickable
function clickbutton () {
    console.log();
   }

//this could be the answer to the problem id stuff.
//https://stackoverflow.com/questions/71311826/how-to-check-which-element-is-dropped-in-which-drag-zone-in-javascript