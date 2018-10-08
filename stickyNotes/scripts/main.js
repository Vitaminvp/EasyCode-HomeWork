class StickyNotesApp {
    constructor(){
        this.noteMessageInput = document.getElementById('message');
        this.addNoteButton = document.getElementById('save');
        this.notesSectionFirst = document.querySelector('.first');
        this.notesSectionSecond = document.querySelector('.second');
        this.notesSectionThird = document.querySelector('.third');
        this.addNoteButton.addEventListener('click', () => this.saveNote());
        this.noteMessageInput.addEventListener('keyup', () => this.toggleButton());
        this.dragSrcEl = {};
        for (let key in localStorage) {
            if(!isNaN(parseInt(key))) {
                const loc = JSON.parse(localStorage[key]);
                this.displayNote(key, loc.value, loc.stat);
            }
        }
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
            localStorage.setItem(key, JSON.stringify({value: this.noteMessageInput.value, stat: 'new'}));
            this.displayNote(key, this.noteMessageInput.value);
            this.noteMessageInput.value = "";
            this.toggleButton();
        }
    };
    displayNote(key, message, stat) {
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
            let shortDate = new Intl.DateTimeFormat("en-US", { year: 'numeric', month: 'numeric', day: 'numeric',
                                                    hour: 'numeric', minute: 'numeric', second: 'numeric',
                                                    hour12: false }).format(date);
            const data = document.createElement('div');
            data.className = "date";
            data.innerHTML = `Created on ${shortDate}`;
            note.appendChild(data);
            const mess = document.createElement('div');
            mess.className = "message";
            mess.innerHTML = message;
            mess.addEventListener('dblclick', (e) => this.editMessage(e, note.id));
            note.appendChild(mess);

            const messCnt = document.createElement('div');
            messCnt.className = "hide";
            note.appendChild(messCnt);

            const changeMess = document.createElement('textArea');
            changeMess.className = "form-control";
            changeMess.innerHTML = message;
            messCnt.appendChild(changeMess);
            const btnOk = document.createElement('button');
            btnOk.className = "btn ok w-100 mb-5 mt-1";
            btnOk.innerHTML = "ok";
            btnOk.addEventListener('click', (e) => this.saveChange(e, note.id));
            messCnt.appendChild(btnOk);

            const btn = document.createElement('button');
            btn.className = "btn text-right delete";
            btn.innerHTML = "&times";

            note.addEventListener('dragstart', (e) => this.handleDragStart(e, this.dragSrcEl, note), false);
            note.addEventListener('dragend', this.handleDragEnd, false);
            note.appendChild(btn);

            if( stat == 'inProcess' ){
                this.notesSectionSecond.insertBefore(note, this.notesSectionSecond.firstChild);
            }else if( stat == 'done' ){
                this.notesSectionThird.insertBefore(note, this.notesSectionThird.firstChild);
            }else{
                this.notesSectionFirst.insertBefore(note, this.notesSectionFirst.firstChild);
            }

            this.deleteButton = note.querySelector('.delete');
            this.deleteButton.addEventListener('click', () => this.deleteNote(note));
        }
        if (!message) {
            return () => this.deleteNote(note);
        }
    };
    saveChange(e, id){
        const loc = JSON.parse(localStorage.getItem(id));
        localStorage.setItem(id, JSON.stringify({...loc, value: e.target.previousElementSibling.value}));
        e.target.parentNode.classList.add('hide');
        e.target.parentNode.previousElementSibling.innerHTML = e.target.previousElementSibling.value;
        e.target.parentNode.previousElementSibling.classList.remove('hide');
    }
    editMessage(e, id){
        const loc = JSON.parse(localStorage.getItem(id));
        if(loc.stat !== 'done') {
            e.target.classList.add('hide');
            e.target.nextElementSibling.classList.remove('hide');
        }
    }
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
        dragSrcEl.id = note.id;
        if(e.target.parentNode.classList.contains('second')){
            dragSrcEl.stat = 'inProcess';
        }else if(e.target.parentNode.classList.contains('third')){
            dragSrcEl.stat = 'done';
        }else{
            dragSrcEl.stat = 'new';
        }
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
        this.classList.add('over');
    }
    handleDragLeave(e) {
        this.classList.remove('over');  // this / e.target is previous target element.
    }
    handleDrop(e, dragSrcEl) {
        if (e.stopPropagation) {
            e.stopPropagation(); // Stops some browsers from redirecting.
        }
        if (e.target.classList.contains('third')){
            if (dragSrcEl.stat == 'inProcess') {
                e.target.appendChild(document.getElementById(dragSrcEl.id));
                dragSrcEl.stat = 'done';
                const loc = JSON.parse(localStorage.getItem(dragSrcEl.id));
                localStorage.setItem(dragSrcEl.id, JSON.stringify({...loc, stat: dragSrcEl.stat}));
            }
        }else if(e.target.classList.contains('second')){
            if (dragSrcEl.stat == 'new') {
                e.target.appendChild(document.getElementById(dragSrcEl.id));
                dragSrcEl.stat = 'inProcess';
                const loc = JSON.parse(localStorage.getItem(dragSrcEl.id));
                localStorage.setItem(dragSrcEl.id, JSON.stringify({...loc, stat: dragSrcEl.stat}));
            }
        }else if(e.target.classList.contains('first')){
            if (dragSrcEl.stat == 'inProcess') {
                e.target.appendChild(document.getElementById(dragSrcEl.id));
                dragSrcEl.stat = 'new';
                const loc = JSON.parse(localStorage.getItem(dragSrcEl.id));
                localStorage.setItem(dragSrcEl.id, JSON.stringify({...loc, stat: dragSrcEl.stat}));
            }
        }
        return false;
    }
    handleDragEnd(e) {
        document.querySelectorAll('.stickyNote')
            .forEach((note) => {
                note.style.opacity = "1";
            });
        document.querySelectorAll('.cont').forEach(cont => cont.classList.remove('over'));
        this.style.display = "block";
    }

}

window.addEventListener('load', () => new StickyNotesApp() );