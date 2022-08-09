import { noteArray, Ab, A, Bb, B, C, Csharp, Db, D, Eb, E, F, Fsharp, Gb, G, I, ii, II, iii, III, PIV, tritone, PV, vi, VI, vii, VII, Note, letterArray, addIntervals } from './intervals.js';


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
let m6interval = document.getElementsByClassName('m6-interval');
let m7interval = document.getElementsByClassName('m7-interval');
/* #endregion */



/* #region  note-button-event-listeners */
AbButton.addEventListener('click', function () {
    container.style.display = 'block';
    modeContainer.style.display = 'block';
    for (let i = 0; i < M1interval.length; i++) {
        M1interval[i].innerHTML = Ab.notes[I];
    }
    for (let i = 0; i < M2interval.length; i++) {
        M2interval[i].innerHTML = Ab.notes[II];
    }
    for (let i = 0; i < M3interval.length; i++) {
        M3interval[i].innerHTML = Ab.notes[III];
    }
    for (let i = 0; i < P4interval.length; i++) {
        P4interval[i].innerHTML = Ab.notes[PIV];
    }
    for (let i = 0; i < P5interval.length; i++) {
        P5interval[i].innerHTML = Ab.notes[PV];
    }
    for (let i = 0; i < M6interval.length; i++) {
        M6interval[i].innerHTML = Ab.notes[VI];
    }
    for (let i = 0; i < M7interval.length; i++) {
        M7interval[i].innerHTML = Ab.notes[VII];
    }
    for (let i = 0; i < m3interval.length; i++) {
        m3interval[i].innerHTML = Ab.notes[iii];
    }
    for (let i = 0; i < m6interval.length; i++) {
        m6interval[i].innerHTML = Ab.notes[vi];
    }
    for (let i = 0; i < m7interval.length; i++) {
        m7interval[i].innerHTML = Ab.notes[vii];
    }
    for (let i = 0; i < m2interval.length; i++) {
        m2interval[i].innerHTML = Ab.notes[ii];
    }
    for (let i = 0; i < aug4interval.length; i++) {
        aug4interval[i].innerHTML = Ab.notes[tritone];
    }
    for (let i = 0; i < dim5interval.length; i++) {
        dim5interval[i].innerHTML = Ab.notes[tritone];
    }
});

AButton.addEventListener('click', function () {
    container.style.display = 'block';
    modeContainer.style.display = 'block';
    for (let i = 0; i < M1interval.length; i++) {
        M1interval[i].innerHTML = A.notes[I];
    }
    for (let i = 0; i < M2interval.length; i++) {
        M2interval[i].innerHTML = A.notes[II];
    }
    for (let i = 0; i < M3interval.length; i++) {
        M3interval[i].innerHTML = A.notes[III];
    }
    for (let i = 0; i < P4interval.length; i++) {
        P4interval[i].innerHTML = A.notes[PIV];
    }
    for (let i = 0; i < P5interval.length; i++) {
        P5interval[i].innerHTML = A.notes[PV];
    }
    for (let i = 0; i < M6interval.length; i++) {
        M6interval[i].innerHTML = A.notes[VI];
    }
    for (let i = 0; i < M7interval.length; i++) {
        M7interval[i].innerHTML = A.notes[VII];
    }
    for (let i = 0; i < m3interval.length; i++) {
        m3interval[i].innerHTML = A.notes[iii];
    }
    for (let i = 0; i < m6interval.length; i++) {
        m6interval[i].innerHTML = A.notes[vi];
    }
    for (let i = 0; i < m7interval.length; i++) {
        m7interval[i].innerHTML = A.notes[vii];
    }
    for (let i = 0; i < m2interval.length; i++) {
        m2interval[i].innerHTML = A.notes[ii];
    }
    for (let i = 0; i < aug4interval.length; i++) {
        aug4interval[i].innerHTML = A.notes[tritone];
    }
    for (let i = 0; i < dim5interval.length; i++) {
        dim5interval[i].innerHTML = A.notes[tritone];
    }
});

BbButton.addEventListener('click', function () {
    container.style.display = 'block';
    modeContainer.style.display = 'block';
    for (let i = 0; i < M1interval.length; i++) {
        M1interval[i].innerHTML = Bb.notes[I];
    }
    for (let i = 0; i < M2interval.length; i++) {
        M2interval[i].innerHTML = Bb.notes[II];
    }
    for (let i = 0; i < M3interval.length; i++) {
        M3interval[i].innerHTML = Bb.notes[III];
    }
    for (let i = 0; i < P4interval.length; i++) {
        P4interval[i].innerHTML = Bb.notes[PIV];
    }
    for (let i = 0; i < P5interval.length; i++) {
        P5interval[i].innerHTML = Bb.notes[PV];
    }
    for (let i = 0; i < M6interval.length; i++) {
        M6interval[i].innerHTML = Bb.notes[VI];
    }
    for (let i = 0; i < M7interval.length; i++) {
        M7interval[i].innerHTML = Bb.notes[VII];
    }
    for (let i = 0; i < m3interval.length; i++) {
        m3interval[i].innerHTML = Bb.notes[iii];
    }
    for (let i = 0; i < m6interval.length; i++) {
        m6interval[i].innerHTML = Bb.notes[vi];
    }
    for (let i = 0; i < m7interval.length; i++) {
        m7interval[i].innerHTML = Bb.notes[vii];
    }
    for (let i = 0; i < m2interval.length; i++) {
        m2interval[i].innerHTML = Bb.notes[ii];
    }
    for (let i = 0; i < aug4interval.length; i++) {
        aug4interval[i].innerHTML = Bb.notes[tritone];
    }
    for (let i = 0; i < dim5interval.length; i++) {
        dim5interval[i].innerHTML = Bb.notes[tritone];
    }
});

BButton.addEventListener('click', function () {
    container.style.display = 'block';
    modeContainer.style.display = 'block';
    for (let i = 0; i < M1interval.length; i++) {
        M1interval[i].innerHTML = B.notes[I];
    }
    for (let i = 0; i < M2interval.length; i++) {
        M2interval[i].innerHTML = B.notes[II];
    }
    for (let i = 0; i < M3interval.length; i++) {
        M3interval[i].innerHTML = B.notes[III];
    }
    for (let i = 0; i < P4interval.length; i++) {
        P4interval[i].innerHTML = B.notes[PIV];
    }
    for (let i = 0; i < P5interval.length; i++) {
        P5interval[i].innerHTML = B.notes[PV];
    }
    for (let i = 0; i < M6interval.length; i++) {
        M6interval[i].innerHTML = B.notes[VI];
    }
    for (let i = 0; i < M7interval.length; i++) {
        M7interval[i].innerHTML = B.notes[VII];
    }
    for (let i = 0; i < m3interval.length; i++) {
        m3interval[i].innerHTML = B.notes[iii];
    }
    for (let i = 0; i < m6interval.length; i++) {
        m6interval[i].innerHTML = B.notes[vi];
    }
    for (let i = 0; i < m7interval.length; i++) {
        m7interval[i].innerHTML = B.notes[vii];
    }
    for (let i = 0; i < m2interval.length; i++) {
        m2interval[i].innerHTML = B.notes[ii];
    }
    for (let i = 0; i < aug4interval.length; i++) {
        aug4interval[i].innerHTML = B.notes[tritone];
    }
    for (let i = 0; i < dim5interval.length; i++) {
        dim5interval[i].innerHTML = B.notes[tritone];
    }
});

CButton.addEventListener('click', function () {
    container.style.display = 'block';
    modeContainer.style.display = 'block';
    for (let i = 0; i < M1interval.length; i++) {
        M1interval[i].innerHTML = C.notes[I];
    }
    for (let i = 0; i < M2interval.length; i++) {
        M2interval[i].innerHTML = C.notes[II];
    }
    for (let i = 0; i < M3interval.length; i++) {
        M3interval[i].innerHTML = C.notes[III];
    }
    for (let i = 0; i < P4interval.length; i++) {
        P4interval[i].innerHTML = C.notes[PIV];
    }
    for (let i = 0; i < P5interval.length; i++) {
        P5interval[i].innerHTML = C.notes[PV];
    }
    for (let i = 0; i < M6interval.length; i++) {
        M6interval[i].innerHTML = C.notes[VI];
    }
    for (let i = 0; i < M7interval.length; i++) {
        M7interval[i].innerHTML = C.notes[VII];
    }
    for (let i = 0; i < m3interval.length; i++) {
        m3interval[i].innerHTML = C.notes[iii];
    }
    for (let i = 0; i < m6interval.length; i++) {
        m6interval[i].innerHTML = C.notes[vi];
    }
    for (let i = 0; i < m7interval.length; i++) {
        m7interval[i].innerHTML = C.notes[vii];
    }
    for (let i = 0; i < m2interval.length; i++) {
        m2interval[i].innerHTML = C.notes[ii];
    }
    for (let i = 0; i < aug4interval.length; i++) {
        aug4interval[i].innerHTML = C.notes[tritone];
    }
    for (let i = 0; i < dim5interval.length; i++) {
        dim5interval[i].innerHTML = C.notes[tritone];
    }
});

CsharpButton.addEventListener('click', function () {
    container.style.display = 'block';
    modeContainer.style.display = 'block';
    for (let i = 0; i < M1interval.length; i++) {
        M1interval[i].innerHTML = Csharp.notes[I];
    }
    for (let i = 0; i < M2interval.length; i++) {
        M2interval[i].innerHTML = Csharp.notes[II];
    }
    for (let i = 0; i < M3interval.length; i++) {
        M3interval[i].innerHTML = Csharp.notes[III];
    }
    for (let i = 0; i < P4interval.length; i++) {
        P4interval[i].innerHTML = Csharp.notes[PIV];
    }
    for (let i = 0; i < P5interval.length; i++) {
        P5interval[i].innerHTML = Csharp.notes[PV];
    }
    for (let i = 0; i < M6interval.length; i++) {
        M6interval[i].innerHTML = Csharp.notes[VI];
    }
    for (let i = 0; i < M7interval.length; i++) {
        M7interval[i].innerHTML = Csharp.notes[VII];
    }
    for (let i = 0; i < m3interval.length; i++) {
        m3interval[i].innerHTML = Csharp.notes[iii];
    }
    for (let i = 0; i < m6interval.length; i++) {
        m6interval[i].innerHTML = Csharp.notes[vi];
    }
    for (let i = 0; i < m7interval.length; i++) {
        m7interval[i].innerHTML = Csharp.notes[vii];
    }
    for (let i = 0; i < m2interval.length; i++) {
        m2interval[i].innerHTML = Csharp.notes[ii];
    }
    for (let i = 0; i < aug4interval.length; i++) {
        aug4interval[i].innerHTML = Csharp.notes[tritone];
    }
    for (let i = 0; i < dim5interval.length; i++) {
        dim5interval[i].innerHTML = Csharp.notes[tritone];
    }
});

DbButton.addEventListener('click', function () {
    container.style.display = 'block';
    modeContainer.style.display = 'block';
    for (let i = 0; i < M1interval.length; i++) {
        M1interval[i].innerHTML = Db.notes[I];
    }
    for (let i = 0; i < M2interval.length; i++) {
        M2interval[i].innerHTML = Db.notes[II];
    }
    for (let i = 0; i < M3interval.length; i++) {
        M3interval[i].innerHTML = Db.notes[III];
    }
    for (let i = 0; i < P4interval.length; i++) {
        P4interval[i].innerHTML = Db.notes[PIV];
    }
    for (let i = 0; i < P5interval.length; i++) {
        P5interval[i].innerHTML = Db.notes[PV];
    }
    for (let i = 0; i < M6interval.length; i++) {
        M6interval[i].innerHTML = Db.notes[VI];
    }
    for (let i = 0; i < M7interval.length; i++) {
        M7interval[i].innerHTML = Db.notes[VII];
    }
    for (let i = 0; i < m3interval.length; i++) {
        m3interval[i].innerHTML = Db.notes[iii];
    }
    for (let i = 0; i < m6interval.length; i++) {
        m6interval[i].innerHTML = Db.notes[vi];
    }
    for (let i = 0; i < m7interval.length; i++) {
        m7interval[i].innerHTML = Db.notes[vii];
    }
    for (let i = 0; i < m2interval.length; i++) {
        m2interval[i].innerHTML = Db.notes[ii];
    }
    for (let i = 0; i < aug4interval.length; i++) {
        aug4interval[i].innerHTML = Db.notes[tritone];
    }
    for (let i = 0; i < dim5interval.length; i++) {
        dim5interval[i].innerHTML = Db.notes[tritone];
    }
});

DButton.addEventListener('click', function () {
    container.style.display = 'block';
    modeContainer.style.display = 'block';
    for (let i = 0; i < M1interval.length; i++) {
        M1interval[i].innerHTML = D.notes[I];
    }
    for (let i = 0; i < M2interval.length; i++) {
        M2interval[i].innerHTML = D.notes[II];
    }
    for (let i = 0; i < M3interval.length; i++) {
        M3interval[i].innerHTML = D.notes[III];
    }
    for (let i = 0; i < P4interval.length; i++) {
        P4interval[i].innerHTML = D.notes[PIV];
    }
    for (let i = 0; i < P5interval.length; i++) {
        P5interval[i].innerHTML = D.notes[PV];
    }
    for (let i = 0; i < M6interval.length; i++) {
        M6interval[i].innerHTML = D.notes[VI];
    }
    for (let i = 0; i < M7interval.length; i++) {
        M7interval[i].innerHTML = D.notes[VII];
    }
    for (let i = 0; i < m3interval.length; i++) {
        m3interval[i].innerHTML = D.notes[iii];
    }
    for (let i = 0; i < m6interval.length; i++) {
        m6interval[i].innerHTML = D.notes[vi];
    }
    for (let i = 0; i < m7interval.length; i++) {
        m7interval[i].innerHTML = D.notes[vii];
    }
    for (let i = 0; i < m2interval.length; i++) {
        m2interval[i].innerHTML = D.notes[ii];
    }
    for (let i = 0; i < aug4interval.length; i++) {
        aug4interval[i].innerHTML = D.notes[tritone];
    }
    for (let i = 0; i < dim5interval.length; i++) {
        dim5interval[i].innerHTML = D.notes[tritone];
    }
});

EbButton.addEventListener('click', function () {
    container.style.display = 'block';
    modeContainer.style.display = 'block';
    for (let i = 0; i < M1interval.length; i++) {
        M1interval[i].innerHTML = Eb.notes[I];
    }
    for (let i = 0; i < M2interval.length; i++) {
        M2interval[i].innerHTML = Eb.notes[II];
    }
    for (let i = 0; i < M3interval.length; i++) {
        M3interval[i].innerHTML = Eb.notes[III];
    }
    for (let i = 0; i < P4interval.length; i++) {
        P4interval[i].innerHTML = Eb.notes[PIV];
    }
    for (let i = 0; i < P5interval.length; i++) {
        P5interval[i].innerHTML = Eb.notes[PV];
    }
    for (let i = 0; i < M6interval.length; i++) {
        M6interval[i].innerHTML = Eb.notes[VI];
    }
    for (let i = 0; i < M7interval.length; i++) {
        M7interval[i].innerHTML = Eb.notes[VII];
    }
    for (let i = 0; i < m3interval.length; i++) {
        m3interval[i].innerHTML = Eb.notes[iii];
    }
    for (let i = 0; i < m6interval.length; i++) {
        m6interval[i].innerHTML = Eb.notes[vi];
    }
    for (let i = 0; i < m7interval.length; i++) {
        m7interval[i].innerHTML = Eb.notes[vii];
    }
    for (let i = 0; i < m2interval.length; i++) {
        m2interval[i].innerHTML = Eb.notes[ii];
    }
    for (let i = 0; i < aug4interval.length; i++) {
        aug4interval[i].innerHTML = Eb.notes[tritone];
    }
    for (let i = 0; i < dim5interval.length; i++) {
        dim5interval[i].innerHTML = Eb.notes[tritone];
    }
});

EButton.addEventListener('click', function () {
    container.style.display = 'block';
    modeContainer.style.display = 'block';
    for (let i = 0; i < M1interval.length; i++) {
        M1interval[i].innerHTML = E.notes[I];
    }
    for (let i = 0; i < M2interval.length; i++) {
        M2interval[i].innerHTML = E.notes[II];
    }
    for (let i = 0; i < M3interval.length; i++) {
        M3interval[i].innerHTML = E.notes[III];
    }
    for (let i = 0; i < P4interval.length; i++) {
        P4interval[i].innerHTML = E.notes[PIV];
    }
    for (let i = 0; i < P5interval.length; i++) {
        P5interval[i].innerHTML = E.notes[PV];
    }
    for (let i = 0; i < M6interval.length; i++) {
        M6interval[i].innerHTML = E.notes[VI];
    }
    for (let i = 0; i < M7interval.length; i++) {
        M7interval[i].innerHTML = E.notes[VII];
    }
    for (let i = 0; i < m3interval.length; i++) {
        m3interval[i].innerHTML = E.notes[iii];
    }
    for (let i = 0; i < m6interval.length; i++) {
        m6interval[i].innerHTML = E.notes[vi];
    }
    for (let i = 0; i < m7interval.length; i++) {
        m7interval[i].innerHTML = E.notes[vii];
    }
    for (let i = 0; i < m2interval.length; i++) {
        m2interval[i].innerHTML = E.notes[ii];
    }
    for (let i = 0; i < aug4interval.length; i++) {
        aug4interval[i].innerHTML = E.notes[tritone];
    }
    for (let i = 0; i < dim5interval.length; i++) {
        dim5interval[i].innerHTML = E.notes[tritone];
    }
});

FButton.addEventListener('click', function () {
    container.style.display = 'block';
    modeContainer.style.display = 'block';
    for (let i = 0; i < M1interval.length; i++) {
        M1interval[i].innerHTML = F.notes[I];
    }
    for (let i = 0; i < M2interval.length; i++) {
        M2interval[i].innerHTML = F.notes[II];
    }
    for (let i = 0; i < M3interval.length; i++) {
        M3interval[i].innerHTML = F.notes[III];
    }
    for (let i = 0; i < P4interval.length; i++) {
        P4interval[i].innerHTML = F.notes[PIV];
    }
    for (let i = 0; i < P5interval.length; i++) {
        P5interval[i].innerHTML = F.notes[PV];
    }
    for (let i = 0; i < M6interval.length; i++) {
        M6interval[i].innerHTML = F.notes[VI];
    }
    for (let i = 0; i < M7interval.length; i++) {
        M7interval[i].innerHTML = F.notes[VII];
    }
    for (let i = 0; i < m3interval.length; i++) {
        m3interval[i].innerHTML = F.notes[iii];
    }
    for (let i = 0; i < m6interval.length; i++) {
        m6interval[i].innerHTML = F.notes[vi];
    }
    for (let i = 0; i < m7interval.length; i++) {
        m7interval[i].innerHTML = F.notes[vii];
    }
    for (let i = 0; i < m2interval.length; i++) {
        m2interval[i].innerHTML = F.notes[ii];
    }
    for (let i = 0; i < aug4interval.length; i++) {
        aug4interval[i].innerHTML = F.notes[tritone];
    }
    for (let i = 0; i < dim5interval.length; i++) {
        dim5interval[i].innerHTML = F.notes[tritone];
    }
});

FsharpButton.addEventListener('click', function () {
    container.style.display = 'block';
    modeContainer.style.display = 'block';
    for (let i = 0; i < M1interval.length; i++) {
        M1interval[i].innerHTML = Fsharp.notes[I];
    }
    for (let i = 0; i < M2interval.length; i++) {
        M2interval[i].innerHTML = Fsharp.notes[II];
    }
    for (let i = 0; i < M3interval.length; i++) {
        M3interval[i].innerHTML = Fsharp.notes[III];
    }
    for (let i = 0; i < P4interval.length; i++) {
        P4interval[i].innerHTML = Fsharp.notes[PIV];
    }
    for (let i = 0; i < P5interval.length; i++) {
        P5interval[i].innerHTML = Fsharp.notes[PV];
    }
    for (let i = 0; i < M6interval.length; i++) {
        M6interval[i].innerHTML = Fsharp.notes[VI];
    }
    for (let i = 0; i < M7interval.length; i++) {
        M7interval[i].innerHTML = Fsharp.notes[VII];
    }
    for (let i = 0; i < m3interval.length; i++) {
        m3interval[i].innerHTML = Fsharp.notes[iii];
    }
    for (let i = 0; i < m6interval.length; i++) {
        m6interval[i].innerHTML = Fsharp.notes[vi];
    }
    for (let i = 0; i < m7interval.length; i++) {
        m7interval[i].innerHTML = Fsharp.notes[vii];
    }
    for (let i = 0; i < m2interval.length; i++) {
        m2interval[i].innerHTML = Fsharp.notes[ii];
    }
    for (let i = 0; i < aug4interval.length; i++) {
        aug4interval[i].innerHTML = Fsharp.notes[tritone];
    }
    for (let i = 0; i < dim5interval.length; i++) {
        dim5interval[i].innerHTML = Fsharp.notes[tritone];
    }
});

GbButton.addEventListener('click', function () {
    container.style.display = 'block';
    modeContainer.style.display = 'block';
    for (let i = 0; i < M1interval.length; i++) {
        M1interval[i].innerHTML = Gb.notes[I];
    }
    for (let i = 0; i < M2interval.length; i++) {
        M2interval[i].innerHTML = Gb.notes[II];
    }
    for (let i = 0; i < M3interval.length; i++) {
        M3interval[i].innerHTML = Gb.notes[III];
    }
    for (let i = 0; i < P4interval.length; i++) {
        P4interval[i].innerHTML = Gb.notes[PIV];
    }
    for (let i = 0; i < P5interval.length; i++) {
        P5interval[i].innerHTML = Gb.notes[PV];
    }
    for (let i = 0; i < M6interval.length; i++) {
        M6interval[i].innerHTML = Gb.notes[VI];
    }
    for (let i = 0; i < M7interval.length; i++) {
        M7interval[i].innerHTML = Gb.notes[VII];
    }
    for (let i = 0; i < m3interval.length; i++) {
        m3interval[i].innerHTML = Gb.notes[iii];
    }
    for (let i = 0; i < m6interval.length; i++) {
        m6interval[i].innerHTML = Gb.notes[vi];
    }
    for (let i = 0; i < m7interval.length; i++) {
        m7interval[i].innerHTML = Gb.notes[vii];
    }
    for (let i = 0; i < m2interval.length; i++) {
        m2interval[i].innerHTML = Gb.notes[ii];
    }
    for (let i = 0; i < aug4interval.length; i++) {
        aug4interval[i].innerHTML = Gb.notes[tritone];
    }
    for (let i = 0; i < dim5interval.length; i++) {
        dim5interval[i].innerHTML = Gb.notes[tritone];
    }
});

GButton.addEventListener('click', function () {
    container.style.display = 'block';
    modeContainer.style.display = 'block';
    for (let i = 0; i < M1interval.length; i++) {
        M1interval[i].innerHTML = G.notes[I];
    }
    for (let i = 0; i < M2interval.length; i++) {
        M2interval[i].innerHTML = G.notes[II];
    }
    for (let i = 0; i < M3interval.length; i++) {
        M3interval[i].innerHTML = G.notes[III];
    }
    for (let i = 0; i < P4interval.length; i++) {
        P4interval[i].innerHTML = G.notes[PIV];
    }
    for (let i = 0; i < P5interval.length; i++) {
        P5interval[i].innerHTML = G.notes[PV];
    }
    for (let i = 0; i < M6interval.length; i++) {
        M6interval[i].innerHTML = G.notes[VI];
    }
    for (let i = 0; i < M7interval.length; i++) {
        M7interval[i].innerHTML = G.notes[VII];
    }
    for (let i = 0; i < m3interval.length; i++) {
        m3interval[i].innerHTML = G.notes[iii];
    }
    for (let i = 0; i < m6interval.length; i++) {
        m6interval[i].innerHTML = G.notes[vi];
    }
    for (let i = 0; i < m7interval.length; i++) {
        m7interval[i].innerHTML = G.notes[vii];
    }
    for (let i = 0; i < m2interval.length; i++) {
        m2interval[i].innerHTML = G.notes[ii];
    }
    for (let i = 0; i < aug4interval.length; i++) {
        aug4interval[i].innerHTML = G.notes[tritone];
    }
    for (let i = 0; i < dim5interval.length; i++) {
        dim5interval[i].innerHTML = G.notes[tritone];
    }
});
/* #endregion */

