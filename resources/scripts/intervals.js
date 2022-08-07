
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
});