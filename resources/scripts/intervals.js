
//index numbers as intervals
let I = 0;
let ii = 1;
let II = 2;
let iii = 3;
let III = 4;
let iv = 5;
let PIV = 6;
let tritone = 7;
let PV = 8;
let vi = 9;
let VI = 10;
let vii = 11;
let VII = 12;


//main class
class Note {
    constructor(notes, sig) {
        this.notes = notes;
        this.sig = sig;
        this.major;
        this.naturalMinor;
        this.melodicMinor;
        this.harmonicMinor;
        this.dorian;
        this.phyrigian;
        this.lydian;
        this.mixolydian;
        this.aeolian;
        this.locrian;
    }
    generateMajor() {
        this.major = [this.notes[I], this.notes[II], this.notes[III], this.notes[PIV], this.notes[PV], this.notes[VI], this.notes[VII]];
    }
    generateNaturalMinor() {
        this.naturalMinor = [this.notes[I], this.notes[II], this.notes[iii], this.notes[PIV], this.notes[PV], this.notes[vi], this.notes[vii]];
    }
    generateMelodicMinor() {
        this.melodicMinor = [this.notes[I], this.notes[II], this.notes[iii], this.notes[PIV], this.notes[PV], this.notes[VI], this.notes[VII]];
    }
    generateHarmonicMinor() {
        this.harmonicMinor = [this.notes[I], this.notes[II], this.notes[iii], this.notes[PIV], this.notes[PV], this.notes[vi], this.notes[VII]];
    }
    generateDorian() {
        this.dorian = [this.notes[I], this.notes[II], this.notes[iii], this.notes[PIV], this.notes[PV], this.notes[VI], this.notes[vii]];
    }
    generatePhyrigian() {
        this.phyrigian = [this.notes[I], this.notes[ii], this.notes[iii], this.notes[PIV], this.notes[PV], this.notes[vi], this.notes[vii]];
    }
    generateLydian() {
        if (this.notes[PIV].includes('#')) {
            const sharp4 = this.notes[PIV].concat('', '#');
            this.lydian = [this.notes[I], this.notes[II], this.notes[III], sharp4, this.notes[PV], this.notes[VI], this.notes[VII]];
        } else if (this.notes[PIV].includes('b')) {
            const sharp4 = this.notes[PIV].slice(0, 1);
            this.lydian = [this.notes[I], this.notes[II], this.notes[III], sharp4, this.notes[PV], this.notes[VI], this.notes[VII]];
        }
        else {
            const sharp4 = this.notes[PIV].concat('', '#');
            this.lydian = [this.notes[I], this.notes[II], this.notes[III], sharp4, this.notes[PV], this.notes[VI], this.notes[VII]];
        }
    }
    generateMixolydian() {
        this.mixolydian = [this.notes[I], this.notes[II], this.notes[III], this.notes[PIV], this.notes[PV], this.notes[VI], this.notes[vii]];
    }
    generateAeolian() {
        this.aeolian = this.naturalMinor;
    }
    generateLocrian() {
        this.locrian = [this.notes[I], this.notes[ii], this.notes[iii], this.notes[PIV], this.notes[tritone], this.notes[vi], this.notes[vii]];
    }
}

let Ab = new Note(['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G'], 'flat');
let A = new Note(['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'], 'sharp');
let Bb = new Note(['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'], 'flat');
let B = new Note(['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'], 'sharp');
let C = new Note(['C', 'D', 'E', 'F', 'G', 'A', 'B'], 'natural');
let Csharp = new Note(['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#',], 'sharp');
let Db = new Note (['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C'], 'flat');
let D = new Note (['D', 'E', 'F#', 'G', 'A', 'B', 'C#'], 'sharp');
let Eb = new Note(['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'], 'flat');
let E = new Note(['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'], 'sharp');
let F = new Note(['F', 'G', 'A', 'Bb', 'C', 'D', 'E'], 'flat');
let Fsharp = new Note(['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#'], 'sharp');
let Gb = new Note(['Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F'], 'flat');
let G = new Note(['G', 'A', 'B', 'C', 'D', 'E', 'F#'], 'sharp');

let noteArray = [Ab, A, Bb, B, C, Csharp, Db, D, Eb, E, F, Fsharp, Gb, G];

function addIntervals(noteObject) {
    if (noteObject.sig === 'flat') {
        let m2 = noteObject.notes[ii].concat('', 'b');
        noteObject.notes.splice(ii, 0, m2);

        let m3 = noteObject.notes[iii].concat('', 'b');
        noteObject.notes.splice(iii, 0, m3);

        let d4 = noteObject.notes[iv].concat('', 'b');
        noteObject.notes.splice(iv, 0, d4);

        let d5 = noteObject.notes[tritone].concat('', 'b');
        noteObject.notes.splice(tritone, 0, d5);

        let m6 = noteObject.notes[vi].concat('', 'b');
        noteObject.notes.splice(vi, 0, m6);

        let m7 = noteObject.notes[vii].concat('', 'b');
        noteObject.notes.splice(vii, 0, m7);

        //console.log(noteObject.notes);

    } else if (noteObject.sig === 'sharp') {
        if (noteObject.notes[ii].includes('#')) {
            let m2 = noteObject.notes[ii].slice(0, 1);
            noteObject.notes.splice(ii, 0, m2);
        } else {
            let m2 = noteObject.notes[ii].concat('', 'b');
            noteObject.notes.splice(ii, 0, m2);
        }


        if (noteObject.notes[iii].includes('#')) {
            let m3 = noteObject.notes[iii].slice(0, 1);
            noteObject.notes.splice(iii, 0, m3);
        } else {
            let m3 = noteObject.notes[iii].concat('', 'b');
            noteObject.notes.splice(iii, 0, m3);
        }


        if (noteObject.notes[iv].includes('#')) {
            let d4 = noteObject.notes[iv].slice(0, 1);
            noteObject.notes.splice(iv, 0, d4);
        } else {
            let d4 = noteObject.notes[iv].concat('', 'b');
            noteObject.notes.splice(iv, 0, d4);
        }


        if (noteObject.notes[tritone].includes('#')) {
            let d5 = noteObject.notes[tritone].slice(0, 1);
            noteObject.notes.splice(tritone, 0, d5);
        } else {
            let d5 = noteObject.notes[tritone].concat('', 'b');
            noteObject.notes.splice(tritone, 0, d5);
        }


        if (noteObject.notes[vi].includes('#')) {
            let m6 = noteObject.notes[vi].slice(0, 1);
            noteObject.notes.splice(vi, 0, m6);
        } else {
            let m6 = noteObject.notes[vi].concat('', 'b');
            noteObject.notes.splice(vi, 0, m6);
        }


        if (noteObject.notes[vii].includes('#')) {
            let m7 = noteObject.notes[vii].slice(0, 1);
            noteObject.notes.splice(vii, 0, m7);
        } else {
            let m7 = noteObject.notes[vii].concat('', 'b');
            noteObject.notes.splice(vii, 0, m7);
        }


        console.log(noteObject.notes);

    } else if (noteObject.sig === 'natural') {
        let m2 = noteObject.notes[ii].concat('', 'b');
        noteObject.notes.splice(ii, 0, m2);

        let m3 = noteObject.notes[iii].concat('', 'b');
        noteObject.notes.splice(iii, 0, m3);

        let d4 = noteObject.notes[iv].concat('', 'b');
        noteObject.notes.splice(iv, 0, d4);

        let d5 = noteObject.notes[tritone].concat('', 'b');
        noteObject.notes.splice(tritone, 0, d5);

        let m6 = noteObject.notes[vi].concat('', 'b');
        noteObject.notes.splice(vi, 0, m6);

        let m7 = noteObject.notes[vii].concat('', 'b');
        noteObject.notes.splice(vii, 0, m7);
    }
    return noteObject;
}

noteArray.forEach(element => {
    addIntervals(element);
    element.generateMajor();
    element.generateNaturalMinor();
    element.generateMelodicMinor();
    element.generateHarmonicMinor();
    element.generateDorian();
    element.generatePhyrigian();
    element.generateLydian();
    element.generateMixolydian();
    element.generateAeolian();
    element.generateLocrian();
});



//button functionality stuff
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


let container = document.getElementById('scales-container');
let majorDisplay = document.getElementById('major-scale');
let naturalDisplay = document.getElementById('natural-minor');
let melodicDisplay = document.getElementById('melodic-minor');
let harmonicDisplay = document.getElementById('harmonic-minor');


AbButton.addEventListener('click', function() {
    container.style.display = 'block';
    majorDisplay.innerHTML = Ab.major;
    naturalDisplay.innerHTML = Ab.naturalMinor;
    melodicDisplay.innerHTML = Ab.melodicMinor;
    harmonicDisplay.innerHTML = Ab.harmonicMinor;
});

AButton.addEventListener('click', function() {
    container.style.display = 'block';
    majorDisplay.innerHTML = A.major;
    naturalDisplay.innerHTML = A.naturalMinor;
    melodicDisplay.innerHTML = A.melodicMinor;
    harmonicDisplay.innerHTML = A.harmonicMinor;
});

BbButton.addEventListener('click', function() {
    container.style.display = 'block';
    majorDisplay.innerHTML = Bb.major;
    naturalDisplay.innerHTML = Bb.naturalMinor;
    melodicDisplay.innerHTML = Bb.melodicMinor;
    harmonicDisplay.innerHTML = Bb.harmonicMinor;
});

BButton.addEventListener('click', function() {
    container.style.display = 'block';
    majorDisplay.innerHTML = B.major;
    naturalDisplay.innerHTML = B.naturalMinor;
    melodicDisplay.innerHTML = B.melodicMinor;
    harmonicDisplay.innerHTML = B.harmonicMinor;
});

CButton.addEventListener('click', function() {
    container.style.display = 'block';
    majorDisplay.innerHTML = C.major;
    naturalDisplay.innerHTML = C.naturalMinor;
    melodicDisplay.innerHTML = C.melodicMinor;
    harmonicDisplay.innerHTML = C.harmonicMinor;
});

CsharpButton.addEventListener('click', function() {
    container.style.display = 'block';
    majorDisplay.innerHTML = Csharp.major;
    naturalDisplay.innerHTML = Csharp.naturalMinor;
    melodicDisplay.innerHTML = Csharp.melodicMinor;
    harmonicDisplay.innerHTML = Csharp.harmonicMinor;
});

DbButton.addEventListener('click', function() {
    container.style.display = 'block';
    majorDisplay.innerHTML = Db.major;
    naturalDisplay.innerHTML = Db.naturalMinor;
    melodicDisplay.innerHTML = Db.melodicMinor;
    harmonicDisplay.innerHTML = Db.harmonicMinor;
});

DButton.addEventListener('click', function() {
    container.style.display = 'block';
    majorDisplay.innerHTML = D.major;
    naturalDisplay.innerHTML = D.naturalMinor;
    melodicDisplay.innerHTML = D.melodicMinor;
    harmonicDisplay.innerHTML = D.harmonicMinor;
});

EbButton.addEventListener('click', function() {
    container.style.display = 'block';
    majorDisplay.innerHTML = Eb.major;
    naturalDisplay.innerHTML = Eb.naturalMinor;
    melodicDisplay.innerHTML = Eb.melodicMinor;
    harmonicDisplay.innerHTML = Eb.harmonicMinor;
});

EButton.addEventListener('click', function() {
    container.style.display = 'block';
    majorDisplay.innerHTML = E.major;
    naturalDisplay.innerHTML = E.naturalMinor;
    melodicDisplay.innerHTML = E.melodicMinor;
    harmonicDisplay.innerHTML = E.harmonicMinor;
});

FButton.addEventListener('click', function() {
    container.style.display = 'block';
    majorDisplay.innerHTML = F.major;
    naturalDisplay.innerHTML = F.naturalMinor;
    melodicDisplay.innerHTML = F.melodicMinor;
    harmonicDisplay.innerHTML = F.harmonicMinor;
});

FsharpButton.addEventListener('click', function() {
    container.style.display = 'block';
    majorDisplay.innerHTML = Fsharp.major;
    naturalDisplay.innerHTML = Fsharp.naturalMinor;
    melodicDisplay.innerHTML = Fsharp.melodicMinor;
    harmonicDisplay.innerHTML = Fsharp.harmonicMinor;
});

GbButton.addEventListener('click', function() {
    container.style.display = 'block';
    majorDisplay.innerHTML = Gb.major;
    naturalDisplay.innerHTML = Gb.naturalMinor;
    melodicDisplay.innerHTML = Gb.melodicMinor;
    harmonicDisplay.innerHTML = Gb.harmonicMinor;
});

GButton.addEventListener('click', function() {
    container.style.display = 'block';
    majorDisplay.innerHTML = G.major;
    naturalDisplay.innerHTML = G.naturalMinor;
    melodicDisplay.innerHTML = G.melodicMinor;
    harmonicDisplay.innerHTML = G.harmonicMinor;
});