import { AbNote, ANote, BbNote, BNote, CNote, DbNote, DNote, EbNote, ENote, FNote, GbNote, GNote } from "./fretboard.js";
import { inputSynch } from './input-synch.js';
import { noteArray } from './intervals.js';
import { gridContainer } from './dropdowns.js';

/* #region  objects */
let AbToggle = {
    toggle: true
}
let AToggle = {
    toggle: true
}
let BToggle = {
    toggle: true
}
let BbToggle = {
    toggle: true
}
let CToggle = {
    toggle: true
}
let DbToggle = {
    toggle: true
}
let DToggle = {
    toggle: true
}
let EbToggle = {
    toggle: true
}
let EToggle = {
    toggle: true
}
let FToggle = {
    toggle: true
}
let GbToggle = {
    toggle: true
}
let GToggle = {
    toggle: true
}
/* #endregion */

function onHover(note, obj, toggle) {
    if (window.location.pathname == '/input.html') {
        if (toggle.toggle) {

           // for (let j = 0; j < obj.length; j++) {
                obj.innerHTML = note;
                $(obj).addClass('show-note');
            //};
            /*$(obj).on('click', function (event) {
                console.log(event.target);
                console.log(obj[0].classList)
                toggle.toggle = false;
                for (let j = 0; j < obj.length; j++) {
                    $(obj[j]).removeClass('show-note').addClass('selected-note');
                }

            });*/
        } /*else if (!toggle.toggle) {
            $(obj).on('click', function () {
                toggle.toggle = true;
                $(obj).removeClass('selected-note').addClass('show-note');
            })
        }*/
        inputSynch(note, toggle.toggle, 'onHover');
    }
}

function noteClick(obj, toggle) {
    if (obj.classList[1] == 'show-note') {
        toggle.toggle = false;
        $(obj).removeClass('show-note').addClass('selected-note');
    } else if (obj.classList[1] == 'selected-note') {
        toggle.toggle = true;
        $(obj).removeClass('selected-note').addClass('show-note');
    }
}

/*function onHover(note, obj, toggle) {
    if (window.location.pathname == '/input.html') {
        if (toggle.toggle) {


        }
    }
}*/

function offHover(note, toggle, obj) {
    if (window.location.pathname == '/input.html') {
        if (toggle.toggle) {

            //for (let j = 0; j < obj.length; j++) {
                obj.innerHTML = '';
                $(obj).removeClass('show-note');
            //};
        } 


        inputSynch(note, toggle.toggle, 'offHover');
    }
}

let gridLength = 78;
let gridCount = 0;
let noteCount = 0;
let fretNoteArray = [];
let gridContainerFret = document.getElementById('grid-container');


for (let i = 0; i < gridLength; i++) {

    let currentNote = noteArray[noteCount];
    let noteName = currentNote.major[0];

    let newElement = document.createElement('p');
    newElement.setAttribute('class', 'note');
    newElement.setAttribute('id', 'note-' + gridCount.toString());

    $(newElement).appendTo(gridContainerFret);

    let noteToggle = { 
        toggle: true
    };

    $(newElement).hover(
        function () {
            onHover(noteName, newElement, noteToggle);
        }, function () {
            offHover(noteName, noteToggle, newElement);
        }
    )

    $(newElement).on('click', function(event) {
        noteClick(event.target, noteToggle);
    })

    fretNoteArray.push(newElement);

    gridCount++;
    noteCount++;

    if (noteCount > noteArray.length - 1) {
        noteCount = 0;
    }

}



$(function () {
    /* #region  hover */
    /*$(AbNote).hover(
        function (event) {
            onHover('Ab', AbNote, AbToggle);
        }, function (event) {
            offHover('Ab', AbToggle, AbNote);
        }
    );
    $(ANote).hover(
        function (event) {
            onHover('A', ANote, AToggle);
        }, function (event) {
            offHover('A', AToggle, ANote);
        }
    );
    $(BbNote).hover(
        function (event) {
            onHover('Bb', BbNote, BbToggle);
        }, function (event) {
            offHover('Bb', BbToggle, BbNote);
        }
    );
    $(BNote).hover(
        function (event) {
            onHover('B', BNote, BToggle);
        }, function (event) {
            offHover('B', BToggle, BNote);
        }
    );
    $(CNote).hover(
        function (event) {
            onHover('C', CNote, CToggle);
        }, function (event) {
            offHover('C', CToggle, CNote);
        }
    );
    $(DbNote).hover(
        function (event) {
            onHover('Db', DbNote, DbToggle);
        }, function (event) {
            offHover('Db', DbToggle, DbNote);
        }
    );
    $(DNote).hover(
        function (event) {
            onHover('D', DNote, DToggle);
        }, function (event) {
            offHover('D', DToggle, DNote);
        }
    );
    $(EbNote).hover(
        function (event) {
            onHover('Eb', EbNote, EbToggle);
        }, function (event) {
            offHover('Eb', EbToggle, EbNote);
        }
    );
    $(ENote).hover(
        function (event) {
            onHover('E', ENote, EToggle);
        }, function (event) {
            offHover('E', EToggle, ENote);
        }
    );
    $(FNote).hover(
        function (event) {
            onHover('F', FNote, FToggle);
        }, function (event) {
            offHover('F', FToggle, FNote);
        }
    );
    $(GbNote).hover(
        function (event) {
            onHover('Gb', GbNote, GbToggle);
        }, function (event) {
            offHover('Gb', GbToggle, GbNote);
        }
    );
    $(GNote).hover(
        function (event) {
            onHover('G', GNote, GToggle);
        }, function (event) {
            offHover('G', GToggle, GNote);
        }
    );
    /* #endregion */



});

export {onHover, offHover, fretNoteArray};