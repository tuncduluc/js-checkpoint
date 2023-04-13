// use addEventListener to handle form submit event
const form = document.querySelector('form')
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    
    const formPromise = new Promise ((resolve, reject) => {
        if(formValidation(name, surname, email, age)){
            resolve('congratz');
        } else {
            reject('error')
        }    
    })

    formPromise
        .then(() => {           
            addAttendee(name, surname, email, age);
        })
        .catch((error) =>{
            alert(error);
        })
});


function formValidation(name, surname, email, age) {
    if(name.length > 0 && surname.length > 0 && email.length > 0 && age >= 13) {
        return true;
    } else {
        return false;
    }
}

function addAttendee(name, surname, email, age) {
    const attendees = document.getElementById('attendees');
    const attendee = document.createElement('li');
    attendee.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-start');
    attendee.innerHTML = `<div class="ms-2 me-auto">
    <div class="fw-bold">${name} ${surname} (${age})</div>
    ${email}
    </div>
    <span class="badge bg-primary rounded-pill">M</span>`
    attendees.appendChild(attendee);
}

// Write a function called "formValidation" that validates the form where
//  (name is not empty)
//  (surname is not empty)
//  (email is not empty)
//  (age is greater or equal 13)

// Write another function "addAttendee" that adds an attendee to the list

// use a promise to execute the addAttendee as a resolver function / alert the validation error as a rejection function

