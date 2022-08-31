import { AbNote, ANote, BbNote, BNote, CNote, DbNote, DNote, EbNote, ENote, FNote, GbNote, GNote } from "./fretboard.js";
import { inputSynch } from './input-synch.js';

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
            $(obj).addClass('show-note');
            for (let j = 0; j < obj.length; j++) {
                obj[j].innerHTML = note;
            };
            $(obj).on('click', function () {
                toggle.toggle = false;
                $(obj).removeClass('show-note').addClass('selected-note');
            });
        } else if (!toggle.toggle) {
            $(obj).on('click', function () {
                toggle.toggle = true;
                $(obj).removeClass('selected-note').addClass('show-note');
            })
        }
        inputSynch(note, toggle.toggle, 'onHover');
    }
}

function offHover(note, toggle, obj) {
    if (window.location.pathname == '/input.html') {
        if (toggle.toggle) {
            $(obj).removeClass('show-note');
            for (let j = 0; j < obj.length; j++) {
                obj[j].innerHTML = '';
            };
        }
        inputSynch(note, toggle.toggle, 'offHover');
    }
}

$(function () {
    /* #region  hover */
    $(AbNote).hover(
        function () {
            onHover('Ab', AbNote, AbToggle);
        }, function () {
            offHover('Ab', AbToggle, AbNote);
        }
    );
    $(ANote).hover(
        function () {
            onHover('A', ANote, AToggle);
        }, function () {
            offHover('A', AToggle, ANote);
        }
    );
    $(BbNote).hover(
        function () {
            onHover('Bb', BbNote, BbToggle);
        }, function () {
            offHover('Bb', BbToggle, BbNote);
        }
    );
    $(BNote).hover(
        function () {
            onHover('B', BNote, BToggle);
        }, function () {
            offHover('B', BToggle, BNote);
        }
    );
    $(CNote).hover(
        function () {
            onHover('C', CNote, CToggle);
        }, function () {
            offHover('C', CToggle, CNote);
        }
    );
    $(DbNote).hover(
        function () {
            onHover('Db', DbNote, DbToggle);
        }, function () {
            offHover('Db', DbToggle, DbNote);
        }
    );
    $(DNote).hover(
        function () {
            onHover('D', DNote, DToggle);
        }, function () {
            offHover('D', DToggle, DNote);
        }
    );
    $(EbNote).hover(
        function () {
            onHover('Eb', EbNote, EbToggle);
        }, function () {
            offHover('Eb', EbToggle, EbNote);
        }
    );
    $(ENote).hover(
        function () {
            onHover('E', ENote, EToggle);
        }, function () {
            offHover('E', EToggle, ENote);
        }
    );
    $(FNote).hover(
        function () {
            onHover('F', FNote, FToggle);
        }, function () {
            offHover('F', FToggle, FNote);
        }
    );
    $(GbNote).hover(
        function () {
            onHover('Gb', GbNote, GbToggle);
        }, function () {
            offHover('Gb', GbToggle, GbNote);
        }
    );
    $(GNote).hover(
        function () {
            onHover('G', GNote, GToggle);
        }, function () {
            offHover('G', GToggle, GNote);
        }
    );
    /* #endregion */


});

export {onHover, offHover};