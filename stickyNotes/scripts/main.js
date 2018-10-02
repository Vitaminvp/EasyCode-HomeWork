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
            note = document.createElement('div');
            note.id = key;
            note.className = "yellow  stickyNote";
            let date;
            if (note.id) {
                date = new Date(parseInt(note.id));
            } else {
                date = new Date();
            }
            let shortDate = new Intl.DateTimeFormat("en-US", {day: 'numeric', month: 'short'}).format(date);
            const data = document.createElement('div');
            data.className = "date";
            data.innerHTML = `Created on ${shortDate}`;
            note.appendChild(data);
            const mess = document.createElement('div');
            mess.className = "message";
            mess.innerHTML = message;
            note.appendChild(mess);
            const btn = document.createElement('button');
            btn.className = "btn text-right delete";
            btn.innerHTML = "Delete";
            note.appendChild(btn);

            console.log("note", note);
            this.notesSectionTitle.appendChild(note);
            this.deleteButton = note.querySelector('.delete');
            this.deleteButton.addEventListener('click', () => this.deleteNote(note));
        }
        if (!message) {
            return () => this.deleteNote(note);
        }
    };
    toggleButton() {
        if (this.noteMessageInput.value) {
            this.addNoteButton.removeAttribute('disabled');
        } else {
            this.addNoteButton.setAttribute('disabled', 'true');
        }
    };
    deleteNote(note) {
        localStorage.removeItem(note.id);
        note.parentNode.removeChild(note);
    };
}

// On load start the app.
window.addEventListener('load', () => new StickyNotesApp() );

// A Sticky Note custom element that extends HTMLElement.
class StickyNote{
    constructor(){

    }


    // Fires when an instance of the element is created.
    createdCallback() {

    };

// Fires when an attribute of the element is added/deleted/modified.
    attributeChangedCallback(attributeName) {
        // We display/update the created date message if the id changes.

    };

// Sets the message of the note.
//     setMessage(message) {
//         this.messageElement.textContent = message;
//         // Replace all line breaks by <br>.
//         this.messageElement.innerHTML = this.messageElement.innerHTML.replace(/\n/g, '<br>');
//     };

// Deletes the note by removing the element from the DOM and the data from localStorage.


}



// document.registerElement('sticky-note', StickyNote);
