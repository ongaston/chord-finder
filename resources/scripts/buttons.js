import { noteArray, Ab, A, Bb, B, C, Csharp, Db, D, Eb, E, F, Fsharp, Gb, G, I, ii, II, iii, III, PIV, tritone, PV, vi, VI, vii, VII, Note, letterArray, addIntervals } from './intervals.js';
import { fretboardFunction, notesArrayFrets } from './fretboard.js';
import { fretboardToggle, keyboardToggle, staffToggle, globalScale } from './dropdowns.js';
import { keyboardFunction, notesArrayKeys } from './keyboard.js';
import { staffFunction, notesArrayStaff } from './staff.js';

//button functionality stuff
/* #region note-button-objects */
const AbButton = document.getElementById('Ab');
const AButton = document.getElementById('A');
const BbButton = document.getElementById('Bb');
const BButton = document.getElementById('B');
const CButton = document.getElementById('C');
const CsharpButton = document.getElementById('C#');
const DbButton = document.getElementById('Db');
const DButton = document.getElementById('D');
const EbButton = document.getElementById('Eb');
const EButton = document.getElementById('E');
const FButton = document.getElementById('F');
const FsharpButton = document.getElementById('F#');
const GbButton = document.getElementById('Gb');
const GButton = document.getElementById('G');
let buttonArray = [AbButton, AButton, BbButton, BButton, CButton, CsharpButton, DbButton, DButton, EbButton, EButton, FButton, FsharpButton, GbButton, GButton];
/* #endregion */


/* #region  scale-html-objects */
let container = document.getElementById('scales-container');
let modeContainer = document.getElementById('modes-container');
let M1interval = document.getElementsByClassName('M1-interval');
let M2interval = document.getElementsByClassName('M2-interval');
let M3interval = document.getElementsByClassName('M3-interval');
let P4interval = document.getElementsByClassName('P4-interval');
let P5interval = document.getElementsByClassName('P5-interval');
let M6interval = document.getElementsByClassName('M6-interval');
let M7interval = document.getElementsByClassName('M7-interval');

let m2interval = document.getElementsByClassName('m2-interval');
let m3interval = document.getElementsByClassName('m3-interval');
let aug4interval = document.getElementsByClassName('aug4-interval');
let dim5interval = document.getElementsByClassName('dim5-interval');
let aug5interval = document.getElementsByClassName('aug5-interval');
let m6interval = document.getElementsByClassName('m6-interval');
let dim7interval = document.getElementsByClassName('dim7-interval');
let m7interval = document.getElementsByClassName('m7-interval');
let key = '';
/* #endregion */

/* #region  other variable declarations */
let modeContainers = document.getElementsByClassName('mode-container');
let scaleContainers = document.getElementsByClassName('scale-container');
let chordContainers = document.getElementsByClassName('chord-container');
/* #endregion */

function buttonFunction(tonic) {
    container.style.display = 'inline-flex';
    modeContainer.style.display = 'inline-flex';
    key = tonic;
    if (!key == '') {
        for (let i = 0; i < modeContainers.length; i++) {
            $(modeContainers[i]).css({
                backgroundColor: 'hsla(171, 17%, 90%, 1)',
                borderRadius: '2px',
                boxShadow: '2px 2px 2px 1px'
            });
        }
        for (let i = 0; i < scaleContainers.length; i++) {
            $(scaleContainers[i]).css({
                backgroundColor: 'hsla(171, 17%, 90%, 1)',
                borderRadius: '2px',
                boxShadow: '2px 2px 2px 1px'
            });
        }
        for (let i = 0; i < chordContainers.length; i++) {
            $(chordContainers[i]).css({
                backgroundColor: 'hsla(171, 17%, 90%, 1)',
                borderRadius: '2px',
                boxShadow: '2px 2px 2px 1px'
            });
        }
    }
    if ((!key == '' && !globalScale == '') && !fretboardToggle) {
        for (let i = 0; i < notesArrayFrets.length; i++) {
            for (let j = 0; j < notesArrayFrets[i].length; j++) {
                notesArrayFrets[i][j].innerHTML = '';
            }
        }
        fretboardFunction(globalScale);
    } else if (!key == '' && !fretboardToggle) {
        fretboardFunction('major');
    }
    if ((!key == '' && !globalScale == '') && !keyboardToggle) {
        for (let i = 0; i < notesArrayKeys.length; i++) {
            for (let j = 0; j < notesArrayKeys[i].length; j++) {
                notesArrayKeys[i][j].innerHTML = '';
            }
        }
        keyboardFunction(globalScale);
    }
    else if (!key == '' & !keyboardToggle) {
        keyboardFunction('major');
    }

    if ((!key == '' && !globalScale == '') && !staffToggle) {
        staffFunction(globalScale);
    }
    else if (!key == '' & !staffToggle) {
        staffFunction('major');
    }

    for (let i = 0; i < M1interval.length; i++) {
        M1interval[i].innerHTML = key.notes[I];
    }
    for (let i = 0; i < M2interval.length; i++) {
        M2interval[i].innerHTML = key.notes[II];
    }
    for (let i = 0; i < M3interval.length; i++) {
        M3interval[i].innerHTML = key.notes[III];
    }
    for (let i = 0; i < P4interval.length; i++) {
        P4interval[i].innerHTML = key.notes[PIV];
    }
    for (let i = 0; i < P5interval.length; i++) {
        P5interval[i].innerHTML = key.notes[PV];
    }
    for (let i = 0; i < M6interval.length; i++) {
        M6interval[i].innerHTML = key.notes[VI];
    }
    for (let i = 0; i < M7interval.length; i++) {
        M7interval[i].innerHTML = key.notes[VII];
    }
    for (let i = 0; i < m3interval.length; i++) {
        m3interval[i].innerHTML = key.notes[iii];
    }
    for (let i = 0; i < m6interval.length; i++) {
        m6interval[i].innerHTML = key.notes[vi];
    }
    for (let i = 0; i < m7interval.length; i++) {
        m7interval[i].innerHTML = key.notes[vii];
    }
    for (let i = 0; i < m2interval.length; i++) {
        m2interval[i].innerHTML = key.notes[ii];
    }
    for (let i = 0; i < aug4interval.length; i++) {
        aug4interval[i].innerHTML = key.notes[tritone];
    }
    for (let i = 0; i < dim5interval.length; i++) {
        dim5interval[i].innerHTML = key.notes[tritone];
    }
    for (let i = 0; i < aug5interval.length; i++) {
        aug5interval[i].innerHTML = key.generateAug5();
    }
    for (let i = 0; i < dim7interval.length; i++) {
        dim7interval[i].innerHTML = key.generateDim7();
    }
}

/* #region  note-button-event-listeners */

AbButton.addEventListener('click', function () {
    buttonFunction(Ab);
});

AButton.addEventListener('click', function () {
    buttonFunction(A);
})

BbButton.addEventListener('click', function () {
    buttonFunction(Bb);
})

BButton.addEventListener('click', function () {
    buttonFunction(B);
})

CButton.addEventListener('click', function () {
    buttonFunction(C);
})

CsharpButton.addEventListener('click', function () {
    buttonFunction(Csharp);
})

DbButton.addEventListener('click', function () {
    buttonFunction(Db);
})

DButton.addEventListener('click', function () {
    buttonFunction(D);
})

EbButton.addEventListener('click', function () {
    buttonFunction(Eb);
})

EButton.addEventListener('click', function () {
    buttonFunction(E);
})

FButton.addEventListener('click', function () {
    buttonFunction(F);
})

FsharpButton.addEventListener('click', function () {
    buttonFunction(Fsharp);
})

GbButton.addEventListener('click', function () {
    buttonFunction(Gb);
})
GButton.addEventListener('click', function () {
    buttonFunction(G);
})
/* #endregion */

export { key };