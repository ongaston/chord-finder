import { noteArray, Ab, A, Bb, B, C, Csharp, Db, D, Eb, E, F, Fsharp, Gb, G, Note } from './intervals.js';

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
/* #endregion */


/* #region  scale-html-objects */
let container = document.getElementById('scales-container');
let majorDisplay = document.getElementById('major-scale');
let naturalDisplay = document.getElementById('natural-minor');
let melodicDisplay = document.getElementById('melodic-minor');
let harmonicDisplay = document.getElementById('harmonic-minor');
let dorianDisplay = document.getElementById('dorian-mode');
let phyrigianDisplay = document.getElementById('phyrigian-mode');
let lydianDisplay = document.getElementById('lydian-mode');
let mixolydianDisplay = document.getElementById('mixolydian-mode');
let aeolianDisplay = document.getElementById('aeolian-mode');
let locrianDisplay = document.getElementById('locrian-mode');
/* #endregion */

/* #region  note-button-event-listeners */
AbButton.addEventListener('click', function () {
    container.style.display = 'block';
    majorDisplay.innerHTML = Ab.major;
    naturalDisplay.innerHTML = Ab.naturalMinor;
    melodicDisplay.innerHTML = Ab.melodicMinor;
    harmonicDisplay.innerHTML = Ab.harmonicMinor;
    dorianDisplay.innerHTML = Ab.dorian;
    phyrigianDisplay.innerHTML = Ab.phyrigian;
    lydianDisplay.innerHTML = Ab.lydian;
    mixolydianDisplay.innerHTML = Ab.mixolydian;
    aeolianDisplay.innerHTML = Ab.aeolian;
    locrianDisplay.innerHTML = Ab.locrian;
});

AButton.addEventListener('click', function () {
    container.style.display = 'block';
    majorDisplay.innerHTML = A.major;
    naturalDisplay.innerHTML = A.naturalMinor;
    melodicDisplay.innerHTML = A.melodicMinor;
    harmonicDisplay.innerHTML = A.harmonicMinor;
    dorianDisplay.innerHTML = A.dorian;
    phyrigianDisplay.innerHTML = A.phyrigian;
    lydianDisplay.innerHTML = A.lydian;
    mixolydianDisplay.innerHTML = A.mixolydian;
    aeolianDisplay.innerHTML = A.aeolian;
    locrianDisplay.innerHTML = A.locrian;
});

BbButton.addEventListener('click', function () {
    container.style.display = 'block';
    majorDisplay.innerHTML = Bb.major;
    naturalDisplay.innerHTML = Bb.naturalMinor;
    melodicDisplay.innerHTML = Bb.melodicMinor;
    harmonicDisplay.innerHTML = Bb.harmonicMinor;
    dorianDisplay.innerHTML = Bb.dorian;
    phyrigianDisplay.innerHTML = Bb.phyrigian;
    lydianDisplay.innerHTML = Bb.lydian;
    mixolydianDisplay.innerHTML = Bb.mixolydian;
    aeolianDisplay.innerHTML = Bb.aeolian;
    locrianDisplay.innerHTML = Bb.locrian;
});

BButton.addEventListener('click', function () {
    container.style.display = 'block';
    majorDisplay.innerHTML = B.major;
    naturalDisplay.innerHTML = B.naturalMinor;
    melodicDisplay.innerHTML = B.melodicMinor;
    harmonicDisplay.innerHTML = B.harmonicMinor;
    dorianDisplay.innerHTML = B.dorian;
    phyrigianDisplay.innerHTML = B.phyrigian;
    lydianDisplay.innerHTML = B.lydian;
    mixolydianDisplay.innerHTML = B.mixolydian;
    aeolianDisplay.innerHTML = B.aeolian;
    locrianDisplay.innerHTML = B.locrian;
});

CButton.addEventListener('click', function () {
    container.style.display = 'block';
    majorDisplay.innerHTML = C.major;
    naturalDisplay.innerHTML = C.naturalMinor;
    melodicDisplay.innerHTML = C.melodicMinor;
    harmonicDisplay.innerHTML = C.harmonicMinor;
    dorianDisplay.innerHTML = C.dorian;
    phyrigianDisplay.innerHTML = C.phyrigian;
    lydianDisplay.innerHTML = C.lydian;
    mixolydianDisplay.innerHTML = C.mixolydian;
    aeolianDisplay.innerHTML = C.aeolian;
    locrianDisplay.innerHTML = C.locrian;
});

CsharpButton.addEventListener('click', function () {
    container.style.display = 'block';
    majorDisplay.innerHTML = Csharp.major;
    naturalDisplay.innerHTML = Csharp.naturalMinor;
    melodicDisplay.innerHTML = Csharp.melodicMinor;
    harmonicDisplay.innerHTML = Csharp.harmonicMinor;
    dorianDisplay.innerHTML = Csharp.dorian;
    phyrigianDisplay.innerHTML = Csharp.phyrigian;
    lydianDisplay.innerHTML = Csharp.lydian;
    mixolydianDisplay.innerHTML = Csharp.mixolydian;
    aeolianDisplay.innerHTML = Csharp.aeolian;
    locrianDisplay.innerHTML = Csharp.locrian;
});

DbButton.addEventListener('click', function () {
    container.style.display = 'block';
    majorDisplay.innerHTML = Db.major;
    naturalDisplay.innerHTML = Db.naturalMinor;
    melodicDisplay.innerHTML = Db.melodicMinor;
    harmonicDisplay.innerHTML = Db.harmonicMinor;
    dorianDisplay.innerHTML = Db.dorian;
    phyrigianDisplay.innerHTML = Db.phyrigian;
    lydianDisplay.innerHTML = Db.lydian;
    mixolydianDisplay.innerHTML = Db.mixolydian;
    aeolianDisplay.innerHTML = Db.aeolian;
    locrianDisplay.innerHTML = Db.locrian;
});

DButton.addEventListener('click', function () {
    container.style.display = 'block';
    majorDisplay.innerHTML = D.major;
    naturalDisplay.innerHTML = D.naturalMinor;
    melodicDisplay.innerHTML = D.melodicMinor;
    harmonicDisplay.innerHTML = D.harmonicMinor;
    dorianDisplay.innerHTML = D.dorian;
    phyrigianDisplay.innerHTML = D.phyrigian;
    lydianDisplay.innerHTML = D.lydian;
    mixolydianDisplay.innerHTML = D.mixolydian;
    aeolianDisplay.innerHTML = D.aeolian;
    locrianDisplay.innerHTML = D.locrian;
});

EbButton.addEventListener('click', function () {
    container.style.display = 'block';
    majorDisplay.innerHTML = Eb.major;
    naturalDisplay.innerHTML = Eb.naturalMinor;
    melodicDisplay.innerHTML = Eb.melodicMinor;
    harmonicDisplay.innerHTML = Eb.harmonicMinor;
    dorianDisplay.innerHTML = Eb.dorian;
    phyrigianDisplay.innerHTML = Eb.phyrigian;
    lydianDisplay.innerHTML = Eb.lydian;
    mixolydianDisplay.innerHTML = Eb.mixolydian;
    aeolianDisplay.innerHTML = Eb.aeolian;
    locrianDisplay.innerHTML = Eb.locrian;
});

EButton.addEventListener('click', function () {
    container.style.display = 'block';
    majorDisplay.innerHTML = E.major;
    naturalDisplay.innerHTML = E.naturalMinor;
    melodicDisplay.innerHTML = E.melodicMinor;
    harmonicDisplay.innerHTML = E.harmonicMinor;
    dorianDisplay.innerHTML = E.dorian;
    phyrigianDisplay.innerHTML = E.phyrigian;
    lydianDisplay.innerHTML = E.lydian;
    mixolydianDisplay.innerHTML = E.mixolydian;
    aeolianDisplay.innerHTML = E.aeolian;
    locrianDisplay.innerHTML = E.locrian;
});

FButton.addEventListener('click', function () {
    container.style.display = 'block';
    majorDisplay.innerHTML = F.major;
    naturalDisplay.innerHTML = F.naturalMinor;
    melodicDisplay.innerHTML = F.melodicMinor;
    harmonicDisplay.innerHTML = F.harmonicMinor;
    dorianDisplay.innerHTML = F.dorian;
    phyrigianDisplay.innerHTML = F.phyrigian;
    lydianDisplay.innerHTML = F.lydian;
    mixolydianDisplay.innerHTML = F.mixolydian;
    aeolianDisplay.innerHTML = F.aeolian;
    locrianDisplay.innerHTML = F.locrian;
});

FsharpButton.addEventListener('click', function () {
    container.style.display = 'block';
    majorDisplay.innerHTML = Fsharp.major;
    naturalDisplay.innerHTML = Fsharp.naturalMinor;
    melodicDisplay.innerHTML = Fsharp.melodicMinor;
    harmonicDisplay.innerHTML = Fsharp.harmonicMinor;
    dorianDisplay.innerHTML = Fsharp.dorian;
    phyrigianDisplay.innerHTML = Fsharp.phyrigian;
    lydianDisplay.innerHTML = Fsharp.lydian;
    mixolydianDisplay.innerHTML = Fsharp.mixolydian;
    aeolianDisplay.innerHTML = Fsharp.aeolian;
    locrianDisplay.innerHTML = Fsharp.locrian;
});

GbButton.addEventListener('click', function () {
    container.style.display = 'block';
    majorDisplay.innerHTML = Gb.major;
    naturalDisplay.innerHTML = Gb.naturalMinor;
    melodicDisplay.innerHTML = Gb.melodicMinor;
    harmonicDisplay.innerHTML = Gb.harmonicMinor;
    dorianDisplay.innerHTML = Gb.dorian;
    phyrigianDisplay.innerHTML = Gb.phyrigian;
    lydianDisplay.innerHTML = Gb.lydian;
    mixolydianDisplay.innerHTML = Gb.mixolydian;
    aeolianDisplay.innerHTML = Gb.aeolian;
    locrianDisplay.innerHTML = Gb.locrian;
});

GButton.addEventListener('click', function () {
    container.style.display = 'block';
    majorDisplay.innerHTML = G.major;
    naturalDisplay.innerHTML = G.naturalMinor;
    melodicDisplay.innerHTML = G.melodicMinor;
    harmonicDisplay.innerHTML = G.harmonicMinor;
    dorianDisplay.innerHTML = G.dorian;
    phyrigianDisplay.innerHTML = G.phyrigian;
    lydianDisplay.innerHTML = G.lydian;
    mixolydianDisplay.innerHTML = G.mixolydian;
    aeolianDisplay.innerHTML = G.aeolian;
    locrianDisplay.innerHTML = G.locrian;
});
/* #endregion */

