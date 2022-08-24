import { AbNote, ANote, BbNote, BNote, CNote, DbNote, DNote, EbNote, ENote, FNote, GbNote, GNote } from "./fretboard.js";


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
}

function offHover(toggle, obj) {
    if (toggle.toggle) {
        $(obj).removeClass('show-note');
        for (let j = 0; j < obj.length; j++) {
            obj[j].innerHTML = '';
        };
    }
}

$(function () {



    /* #region  hover */
    $(AbNote).hover(
        function () {
            onHover('Ab', AbNote, AbToggle);
        }, function () {
            offHover(AbToggle, AbNote);
        }
    );

    $(ANote).hover(
        function () {
            onHover('A', ANote, AToggle);
        }, function () {
            offHover(AToggle, ANote);
        }
    );

    $(BbNote).hover(
        function () {
            onHover('Bb', BbNote, BbToggle);
        }, function () {
            offHover(BbToggle, BbNote);
        }
    );

    $(BNote).hover(
        function () {
            onHover('B', BNote, BToggle);
        }, function () {
            offHover(BToggle, BNote);
        }
    );

    $(CNote).hover(
        function () {
            onHover('C', CNote, CToggle);
        }, function () {
            offHover(CToggle, CNote);
        }
    );

    $(DbNote).hover(
        function () {
            onHover('Db', DbNote, DbToggle);
        }, function () {
            offHover(DbToggle, DbNote);
        }
    );

    $(DNote).hover(
        function () {
            onHover('D', DNote, DToggle);
        }, function () {
            offHover(DToggle, DNote);
        }
    );

    $(EbNote).hover(
        function () {
            onHover('Eb', EbNote, EbToggle);
        }, function () {
            offHover(EbToggle, EbNote);
        }
    );

    $(ENote).hover(
        function () {
            onHover('E', ENote, EToggle);
        }, function () {
            offHover(EToggle, ENote);
        }
    );

    $(FNote).hover(
        function () {
            onHover('F', FNote, FToggle);
        }, function () {
            offHover(FToggle, FNote);
        }
    );

    $(GbNote).hover(
        function () {
            onHover('Gb', GbNote, GbToggle);
        }, function () {
            offHover(GbToggle, GbNote);
        }
    );

    $(GNote).hover(
        function () {
            onHover('G', GNote, GToggle);
        }, function () {
            offHover(GToggle, GNote);
        }
    );
    /* #endregion */


});

export {onHover, offHover};