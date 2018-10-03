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
        this.dragSrcEl = {};
        this.containers = document.querySelectorAll('.cont');
        this.containers.forEach( container => {
            container.addEventListener('dragenter', this.handleDragEnter, false);
            container.addEventListener('dragover', this.handleDragOver, false);
            container.addEventListener('dragleave', this.handleDragLeave, false);
            container.addEventListener('drop', (e) => this.handleDrop(e, this.dragSrcEl), false);
        });

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
            note.draggable = true;
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

            note.addEventListener('dragstart', (e) => this.handleDragStart(e, this.dragSrcEl, note), false);
            note.addEventListener('dragend', this.handleDragEnd, false);

            note.appendChild(btn);
            this.notesSectionTitle.insertBefore(note, this.notesSectionTitle.firstChild);
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
//    Drag and Drop
    handleDragStart(e, dragSrcEl, note) {
        note.style.opacity = '0.4';  // this / e.target is the source node.
        // this.dragSrcEl = this.id;
        dragSrcEl.id = note.id;
        console.log("this.dragSrcEl-s", dragSrcEl);
        e.dataTransfer.effectAllowed = 'move';
        // e.dataTransfer.setData('text/html', this.innerHTML);
        setTimeout(() => note.style.display = "none", 0);
    }
    handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault(); // Necessary. Allows us to drop.
        }
        e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
        return false;
    }
    handleDragEnter(e) {
        // this / e.target is the current hover target.
        this.classList.add('over');
    }
    handleDragLeave(e) {
        this.classList.remove('over');  // this / e.target is previous target element.
    }
    handleDrop(e, dragSrcEl) {
        if (e.stopPropagation) {
            e.stopPropagation(); // Stops some browsers from redirecting.
        }
        // Don't do anything if dropping the same column we're dragging.
        console.log("this.dragSrcEl - end", dragSrcEl);
        // Set the source column's HTML to the HTML of the column we dropped on.
        if (dragSrcEl != this) {
            // dragSrcEl.innerHTML = this.innerHTML;
            // this.innerHTML = e.dataTransfer.getData('text/html');
            console.log("e", e);
            // console.log("this22", this.innerHTML);

        }
        e.target.appendChild(document.getElementById(dragSrcEl.id));
        return false;
    }
    handleDragEnd(e) {
        // this/e.target is the source node.
        document.querySelectorAll('.stickyNote')
            .forEach((note) => {
                note.style.opacity = "1";
            });
        document.querySelectorAll('.cont').forEach(cont => cont.classList.remove('over'));
        this.style.display = "block";
    }

}

window.addEventListener('load', () => new StickyNotesApp() );