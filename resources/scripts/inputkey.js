import { AbNoteKeys, ANoteKeys, BbNoteKeys, BNoteKeys, CNoteKeys, DbNoteKeys, DNoteKeys, EbNoteKeys, ENoteKeys, FNoteKeys, GbNoteKeys, GNoteKeys } from './keyboard.js';
import { onHover, offHover, noteClick } from './inputfret.js';

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

$(function () {



    /* #region  hover */
    $(AbNoteKeys).hover(
        function () {
            onHover('Ab', AbNoteKeys, AbToggle);
        }, function () {
            offHover('Ab', AbToggle, AbNoteKeys);
        }
    );

    $(ANoteKeys).hover(
        function () {
            onHover('A', ANoteKeys, AToggle);
        }, function () {
            offHover('A', AToggle, ANoteKeys);
        }
    );

    $(BbNoteKeys).hover(
        function () {
            onHover('Bb', BbNoteKeys, BbToggle);
        }, function () {
            offHover('Bb', BbToggle, BbNoteKeys);
        }
    );

    $(BNoteKeys).hover(
        function () {
            onHover('B', BNoteKeys, BToggle);
        }, function () {
            offHover('B', BToggle, BNoteKeys);
        }
    );

    $(CNoteKeys).hover(
        function () {
            onHover('C', CNoteKeys, CToggle);
        }, function () {
            offHover('C', CToggle, CNoteKeys);
        }
    );

    $(DbNoteKeys).hover(
        function () {
            onHover('Db', DbNoteKeys, DbToggle);
        }, function () {
            offHover('Db', DbToggle, DbNoteKeys);
        }
    );

    $(DNoteKeys).hover(
        function () {
            onHover('D', DNoteKeys, DToggle);
        }, function () {
            offHover('D', DToggle, DNoteKeys);
        }
    );

    $(EbNoteKeys).hover(
        function () {
            onHover('Eb', EbNoteKeys, EbToggle);
        }, function () {
            offHover('Eb', EbToggle, EbNoteKeys);
        }
    );

    $(ENoteKeys).hover(
        function () {
            onHover('E', ENoteKeys, EToggle);
        }, function () {
            offHover('E', EToggle, ENoteKeys);
        }
    );

    $(FNoteKeys).hover(
        function () {
            onHover('F', FNoteKeys, FToggle);
        }, function () {
            offHover('F', FToggle, FNoteKeys);
        }
    );

    $(GbNoteKeys).hover(
        function () {
            onHover('Gb', GbNoteKeys, GbToggle);
        }, function () {
            offHover('Gb', GbToggle, GbNoteKeys);
        }
    );

    $(GNoteKeys).hover(
        function () {
            onHover('G', GNoteKeys, GToggle);
        }, function () {
            offHover('G', GToggle, GNoteKeys);
        }
    );
    /* #endregion */


}); 