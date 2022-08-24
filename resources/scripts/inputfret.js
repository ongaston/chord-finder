import { AbNote, ANote, BbNote, BNote, CNote, DbNote, DNote, EbNote, ENote, FNote, GbNote, GNote, notesArrayFrets } from "./fretboard.js";
import { AbNoteKeys, ANoteKeys, BbNoteKeys, BNoteKeys, CNoteKeys, DbNoteKeys, DNoteKeys, EbNoteKeys, ENoteKeys, FNoteKeys, GbNoteKeys, GNoteKeys, notesArrayKeys } from './keyboard.js';
import { keyboardToggle, fretboardToggle } from './dropdowns.js';

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



function onHover(note, obj, toggle, keyObj) {
    if (toggle.toggle && !fretboardToggle) {
        $(obj).addClass('show-note');
        for (let j = 0; j < obj.length; j++) {
            obj[j].innerHTML = note;
        };
        if (!keyboardToggle) {
            $(keyObj).addClass('show-note');
            console.log(keyObj)
            for (let j = 0; j < keyObj.length; j++) {

                keyObj[j].innerHTML = note;
            }
        }
        $(obj).on('click', function () {
            toggle.toggle = false;
            $(obj).removeClass('show-note').addClass('selected-note');
            if (!keyboardToggle) {
                $(keyObj).removeClass('show-note').addClass('selected-note');
            }
        });
        $(keyObj).on('click', function() {
            toggle.toggle = false;
            $(keyObj).removeClass('show-note').addClass('selected-note');
            $(obj).removeClass('show-note').addClass('selected-note');
        })
    } else if (!toggle.toggle && !fretboardToggle) {
        $(obj).on('click', function () {
            toggle.toggle = true;
            $(obj).removeClass('selected-note').addClass('show-note');
            if (!keyboardToggle) {
                $(keyObj).removeClass('selected-note').addClass('show-note');
            }
        })
        $(keyObj).on('click', function () {
            toggle.toggle = true;
            $(keyObj).removeClass('selected-note').addClass('show-note');
            $(obj).removeClass('selected-note').addClass('show-note');
        })
    }
}

function onHoverKeys(note, obj, toggle, keyObj) {
    if (toggle.toggle && !keyboardToggle) {
        $(obj).addClass('show-note');
        for (let j = 0; j < obj.length; j++) {
            obj[j].innerHTML = note;
        };
        if (!fretboardToggle) {
            $(keyObj).addClass('show-note');
            console.log(keyObj)
            for (let j = 0; j < keyObj.length; j++) {

                keyObj[j].innerHTML = note;
            }
        }
        $(obj).on('click', function () {
            toggle.toggle = false;
            $(obj).removeClass('show-note').addClass('selected-note');
            if (!fretboardToggle) {
                $(keyObj).removeClass('show-note').addClass('selected-note');
            }
        });
        $(keyObj).on('click', function() {
            toggle.toggle = false;
            $(keyObj).removeClass('show-note').addClass('selected-note');
            $(obj).removeClass('show-note').addClass('selected-note');
        })
    } else if (!toggle.toggle && !keyboardToggle) {
        $(obj).on('click', function () {
            toggle.toggle = true;
            $(obj).removeClass('selected-note').addClass('show-note');
            if (!fretboardToggle) {
                $(keyObj).removeClass('selected-note').addClass('show-note');
            }
        })
        $(keyObj).on('click', function () {
            toggle.toggle = true;
            $(keyObj).removeClass('selected-note').addClass('show-note');
            $(obj).removeClass('selected-note').addClass('show-note');
        })
    }
}

function offHoverKeys(toggle, obj, keyObj) {
    if (toggle.toggle) {
        $(obj).removeClass('show-note');
        for (let j = 0; j < obj.length; j++) {
            obj[j].innerHTML = '';
        };
        if (!fretboardToggle) {
            $(keyObj).removeClass('show-note');
            for (let j = 0; j < keyObj.length; j++) {
                keyObj[j].innerHTML = '';
            }
        }
    }
}

function offHover(toggle, obj, keyObj) {
    if (toggle.toggle) {
        $(obj).removeClass('show-note');
        for (let j = 0; j < obj.length; j++) {
            obj[j].innerHTML = '';
        };
        if (!keyboardToggle) {
            $(keyObj).removeClass('show-note');
            for (let j = 0; j < keyObj.length; j++) {
                keyObj[j].innerHTML = '';
            }
        }
    }
}

$(function () {



    /* #region  hover */
    $(AbNote).hover(
        function () {
            onHover('Ab', AbNote, AbToggle, AbNoteKeys);
        }, function () {
            offHover(AbToggle, AbNote, AbNoteKeys);
        }
    );

    $(AbNoteKeys).hover(
        function () {
            onHoverKeys('Ab', AbNoteKeys, AbToggle, AbNote);
        }, function () {
            offHoverKeys(AbToggle, AbNoteKeys, AbNote);
        }
    );

    $(ANote).hover(
        function () {
            onHover('A', ANote, AToggle, ANoteKeys);
        }, function () {
            offHover(AToggle, ANote, ANoteKeys);
        }
    );

    $(ANoteKeys).hover(
        function () {
            onHoverKeys('A', ANoteKeys, AToggle, ANote);
        }, function () {
            offHoverKeys(AToggle, ANoteKeys, ANote);
        }
    );

    $(BbNote).hover(
        function () {
            onHover('Bb', BbNote, BbToggle, BbNoteKeys);
        }, function () {
            offHover(BbToggle, BbNote, BbNoteKeys);
        }
    );

    $(BbNoteKeys).hover(
        function () {
            onHoverKeys('Bb', BbNoteKeys, BbToggle, BbNote);
        }, function () {
            offHoverKeys(BbToggle, BbNoteKeys, BbNote);
        }
    );

    $(BNote).hover(
        function () {
            onHover('B', BNote, BToggle, BNoteKeys);
        }, function () {
            offHover(BToggle, BNote, BNoteKeys);
        }
    );

    $(BNoteKeys).hover(
        function () {
            onHoverKeys('B', BNoteKeys, BToggle, BNote);
        }, function () {
            offHoverKeys(BToggle, BNoteKeys, BNote);
        }
    );

    $(CNote).hover(
        function () {
            onHover('C', CNote, CToggle, CNoteKeys);
        }, function () {
            offHover(CToggle, CNote, CNoteKeys);
        }
    );

    $(CNoteKeys).hover(
        function () {
            onHoverKeys('C', CNoteKeys, CToggle, CNote);
        }, function () {
            offHoverKeys(CToggle, CNoteKeys, CNote);
        }
    );

    $(DbNote).hover(
        function () {
            onHover('Db', DbNote, DbToggle, DbNoteKeys);
        }, function () {
            offHover(DbToggle, DbNote, DbNoteKeys);
        }
    );

    $(DbNoteKeys).hover(
        function () {
            onHoverKeys('Db', DbNoteKeys, DbToggle, DbNote);
        }, function () {
            offHoverKeys(DbToggle, DbNoteKeys, DbNote);
        }
    );

    $(DNote).hover(
        function () {
            onHover('D', DNote, DToggle, DNoteKeys);
        }, function () {
            offHover(DToggle, DNote, DNoteKeys);
        }
    );

    $(DNoteKeys).hover(
        function () {
            onHoverKeys('D', DNoteKeys, DToggle, DNote);
        }, function () {
            offHoverKeys(DToggle, DNoteKeys, DNote);
        }
    );

    $(EbNote).hover(
        function () {
            onHover('Eb', EbNote, EbToggle, EbNoteKeys);
        }, function () {
            offHover(EbToggle, EbNote, EbNoteKeys);
        }
    );

    $(EbNoteKeys).hover(
        function () {
            onHoverKeys('Eb', EbNoteKeys, EbToggle, EbNote);
        }, function () {
            offHoverKeys(EbToggle, EbNoteKeys, EbNote);
        }
    );

    $(ENote).hover(
        function () {
            onHover('E', ENote, EToggle, ENoteKeys);
        }, function () {
            offHover(EToggle, ENote, ENoteKeys);
        }
    );

    $(ENoteKeys).hover(
        function () {
            onHoverKeys('E', ENoteKeys, EToggle, ENote);
        }, function () {
            offHoverKeys(EToggle, ENoteKeys, ENote);
        }
    );

    $(FNote).hover(
        function () {
            onHover('F', FNote, FToggle, FNoteKeys);
        }, function () {
            offHover(FToggle, FNote, FNoteKeys);
        }
    );

    $(FNoteKeys).hover(
        function () {
            onHoverKeys('F', FNoteKeys, FToggle, FNote);
        }, function () {
            offHoverKeys(FToggle, FNoteKeys, FNote);
        }
    );

    $(GbNote).hover(
        function () {
            onHover('Gb', GbNote, GbToggle, GbNoteKeys);
        }, function () {
            offHover(GbToggle, GbNote, GbNoteKeys);
        }
    );

    $(GbNoteKeys).hover(
        function () {
            onHoverKeys('Gb', GbNoteKeys, GbToggle, GbNote);
        }, function () {
            offHoverKeys(GbToggle, GbNoteKeys, GbNote);
        }
    );

    $(GNote).hover(
        function () {
            onHover('G', GNote, GToggle, GNoteKeys);
        }, function () {
            offHover(GToggle, GNote, GNoteKeys);
        }
    );

    $(GNoteKeys).hover(
        function () {
            onHoverKeys('G', GNoteKeys, GToggle, GNote);
        }, function () {
            offHoverKeys(GToggle, GNoteKeys, GNote);
        }
    );

    /* #endregion */


});

export {onHover, offHover};