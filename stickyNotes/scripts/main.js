class StickyNotesApp {
    constructor(){
        this.noteMessageInput = document.getElementById('message');
        this.addNoteButton = document.getElementById('save');
        this.notesSectionTitle = document.querySelector('.first');

        this.addNoteButton.addEventListener('click', () => this.saveNote());
        this.noteMessageInput.addEventListener('keyup', () => this.toggleButton());
        for (let key in localStorage) {
            if(!isNaN(parseInt(key))) this.displayNote(key, localStorage[key]);
        }
    }
    saveNote() {
        if (this.noteMessageInput.value) {
            const key = Date.now().toString();
            localStorage.setItem(key, this.noteMessageInput.value);
            this.displayNote(key, this.noteMessageInput.value);
            this.noteMessageInput.value = "";
            this.toggleButton();
        }
    };
    displayNote(key, message) {
        let note = document.getElementById(key);
        if (!note) {
            note = document.createElement('sticky-note');
            note.id = key;
            this.notesSectionTitle.appendChild(note);
        }
        if (!message) {
            return note.deleteNote();
        }
        note.setMessage(message);
    };
    toggleButton() {
        if (this.noteMessageInput.value) {
            this.addNoteButton.removeAttribute('disabled');
        } else {
            this.addNoteButton.setAttribute('disabled', 'true');
        }
    };
}

// On load start the app.
window.addEventListener('load', () => new StickyNotesApp() );

// A Sticky Note custom element that extends HTMLElement.
var StickyNote = Object.create(HTMLElement.prototype);

// Initial content of the element.
StickyNote.TEMPLATE =
    `<div class="yellow  stickyNote">
        <div class="message"></div>
        <div class="date"></div>
        <button class="btn text-right delete">Delete</button>
     </div>`;

// StickyNote elements top level style classes.
StickyNote.CLASSES = ['gray', 'mb-5', 'mt-5'];

// List of shortened month names.
StickyNote.MONTHS = [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Ноябрь', 'Декабрь' ];


// Fires when an instance of the element is created.
StickyNote.createdCallback = function() {
    this.classList.add(...StickyNote.CLASSES);
    this.innerHTML = StickyNote.TEMPLATE;
    this.messageElement = this.querySelector('.message');
    this.dateElement = this.querySelector('.date');
    this.deleteButton = this.querySelector('.delete');
    this.deleteButton.addEventListener('click', () => this.deleteNote());
};

// Fires when an attribute of the element is added/deleted/modified.
StickyNote.attributeChangedCallback = function(attributeName) {
    // We display/update the created date message if the id changes.
    if (attributeName == 'id') {
        if (this.id) {
            var date = new Date(parseInt(this.id));
        } else {
            var date = new Date();
        }
        var month = StickyNote.MONTHS[date.getMonth()];
        this.dateElement.textContent = 'Created on ' + month + ' ' + date.getDate();
    }
};

// Sets the message of the note.
StickyNote.setMessage = function(message) {
    this.messageElement.textContent = message;
    // Replace all line breaks by <br>.
    this.messageElement.innerHTML = this.messageElement.innerHTML.replace(/\n/g, '<br>');
};

// Deletes the note by removing the element from the DOM and the data from localStorage.
StickyNote.deleteNote = function() {
    localStorage.removeItem(this.id);
    this.parentNode.removeChild(this);
};

document.registerElement('sticky-note', {
    prototype: StickyNote
});
