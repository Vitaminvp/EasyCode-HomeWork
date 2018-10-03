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
            note.className = "yellow  stickyNote draggable";
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
}
window.addEventListener('load', () => new StickyNotesApp() );


const DragManager = new function() {
    let dragObject = {};
    const self = this;
    function onMouseDown(e) {

        if (e.which != 1) return;

        const elem = e.target.closest('.draggable');
        if (!elem) return;

        dragObject.elem = elem;

        // запомним, что элемент нажат на текущих координатах pageX/pageY
        dragObject.downX = e.pageX;
        dragObject.downY = e.pageY;

        return false;
    }

    function onMouseMove(e) {
        if (!dragObject.elem) return; // элемент не зажат

        if (!dragObject.avatar) { // если перенос не начат...
            const moveX = e.pageX - dragObject.downX;
            const moveY = e.pageY - dragObject.downY;

            // если мышь передвинулась в нажатом состоянии недостаточно далеко
            if (Math.abs(moveX) < 5 && Math.abs(moveY) < 5) {
                return;
            }

            // начинаем перенос
            dragObject.avatar = createAvatar(e); // создать аватар
            if (!dragObject.avatar) { // отмена переноса, нельзя "захватить" за эту часть элемента
                dragObject = {};
                return;
            }

            // аватар создан успешно
            // создать вспомогательные свойства shiftX/shiftY
            const coords = getCoords(dragObject.avatar);
            dragObject.shiftX = dragObject.downX - coords.left;
            dragObject.shiftY = dragObject.downY - coords.top;

            startDrag(e); // отобразить начало переноса
        }

        // отобразить перенос объекта при каждом движении мыши
        dragObject.avatar.style.left = e.pageX - dragObject.shiftX + 'px';
        dragObject.avatar.style.top = e.pageY - dragObject.shiftY + 'px';

        return false;
    }

    function onMouseUp(e) {
        if (dragObject.avatar) { // если перенос идет
            finishDrag(e);
        }

        // перенос либо не начинался, либо завершился
        // в любом случае очистим "состояние переноса" dragObject
        dragObject = {};
    }

    function finishDrag(e) {
        const dropElem = findDroppable(e);

        if (!dropElem) {
            self.onDragCancel(dragObject);
        } else {
            self.onDragEnd(dragObject, dropElem);
        }
    }

    function createAvatar(e) {

        // запомнить старые свойства, чтобы вернуться к ним при отмене переноса
        const avatar = dragObject.elem;
        const old = {
            parent: avatar.parentNode,
            nextSibling: avatar.nextSibling,
            position: avatar.position || '',
            left: avatar.left || '',
            top: avatar.top || '',
            zIndex: avatar.zIndex || ''
        };

        // функция для отмены переноса
        avatar.rollback = function() {
            old.parent.insertBefore(avatar, old.nextSibling);
            avatar.style.position = old.position;
            avatar.style.left = old.left;
            avatar.style.top = old.top;
            avatar.style.zIndex = old.zIndex
        };

        return avatar;
    }

    function startDrag(e) {
        var avatar = dragObject.avatar;

        // инициировать начало переноса
        document.body.appendChild(avatar);
        avatar.style.zIndex = 9999;
        avatar.style.position = 'absolute';
    }

    function findDroppable(event) {
        // спрячем переносимый элемент
        dragObject.avatar.hidden = true;

        // получить самый вложенный элемент под курсором мыши
        const elem = document.elementFromPoint(event.clientX, event.clientY);

        // показать переносимый элемент обратно
        dragObject.avatar.hidden = false;

        if (elem == null) {
            // такое возможно, если курсор мыши "вылетел" за границу окна
            return null;
        }

        return elem.closest('.droppable');
    }

    document.onmousemove = onMouseMove;
    document.onmouseup = onMouseUp;
    document.onmousedown = onMouseDown;

    this.onDragEnd = function(dragObject, dropElem) {
        dropElem.appendChild(dragObject);
    };
    this.onDragCancel = function(dragObject) {};

};


function getCoords(elem) { // кроме IE8-
    var box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };

}
