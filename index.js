/*************************** References ***************************/

// form
const form = document.querySelector('form');

// div reference: for hiding and displaying the `input` block
const rememberDiv = document.querySelector('.remember');

// div reference: for hiding and displaying the `forget` block
const forgetDiv = document.querySelector('.forget');
forgetDiv.setAttribute('style', 'display: none');

// input
const save = document.querySelector('#entername');

// submit button
const saveBtn = document.querySelector('#submitname');

// h1: Our website
const h1 = document.querySelector('h1');

// p tag: Welcome to our website.
const p = document.querySelector('p');

// reset button
const forgetBtn = document.querySelector('#forgetname');

//

/*************************** Event Handler functions ***************************/

// prevents page reload on form submission
form.addEventListener('submit', (e) => e.preventDefault());

saveBtn.addEventListener('click', () => {
    const name = save.value.trim();
    if (name !== '') {
        saveName(name);
    }

});

forgetBtn.addEventListener('click', () => {
    localStorage.removeItem('name');
    updateUI();
});

//

/*************************** Helper functions ***************************/


// helper function: saves name to the local storage
/**
 * @param {String} name The date
 */
function saveName(name) {
    localStorage.setItem('name', name);
    updateUI('name');
}

// helper function: updates the UI
/**
 * @param {String} name The date
 */
function updateUI(name) {
    if (name !== undefined) {
        const localName = localStorage.getItem(name);

        h1.textContent = `Welcome, ${localName}`;
        p.textContent = `Welcome to our website, ${localName}! We hope you have fun while you are here.`;

        // hide the input block
        rememberDiv.setAttribute('style', 'display: none');

        // unhide the forget block
        forgetDiv.setAttribute('style', 'display: block');

    } else {

        h1.textContent = 'Our website';
        p.textContent = 'Welcome to our website.';

        // unhide the `input` block
        rememberDiv.setAttribute('style', 'display: block');

        // hide the `forget` block
        forgetDiv.setAttribute('style', 'display: none');

    }
}
