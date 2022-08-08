
//index numbers as intervals
/* #region  intervals */
let I = 0;
let ii = 1;
let II = 2;
let iii = 3;
let III = 4;
let PIV = 5;
let tritone = 6;
let PV = 7;
let vi = 8;
let VI = 9;
let vii = 10;
let VII = 11;
/* #endregion */


//main class
class Note {
    constructor(notes, sig) {
        this.notes = notes;
        this.sig = sig;

        //scales/modes
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
    generateMajorTriad(interval) {
        let majorTriad = [];
        let root = this.notes[interval];
        if (root.includes('#')) {
            root = root[0].concat('', 'sharp');
        } else if (root.includes('bb')) {
            root = root[0];
            let letterIndex = letterArray.indexOf(root) - 1;
            if (letterIndex < 0) {
                letterIndex = 6;
            }
            root = letterArray[letterIndex];
        }
        root = eval(root);
        majorTriad[0] = root.notes[I];
        majorTriad[1] = root.notes[III];
        majorTriad[2] = root.notes[PV];
        return majorTriad;
    }
    generateMinorTriad(interval) {
        let minorTriad = [];
        let root = this.notes[interval];
        if (root.includes('#')) {
            root = root[0].concat('', 'sharp');
        } else if (root.includes('bb')) {
            root = root[0];
            let letterIndex = letterArray.indexOf(root) - 1;
            if (letterIndex < 0) {
                letterIndex = 6;
            }
            root = letterArray[letterIndex];
        }
        root = eval(root);
        minorTriad[0] = root.notes[I];
        minorTriad[1] = root.notes[iii];
        minorTriad[2] = root.notes[PV];
        return minorTriad;
    }
}

/* #region  noteObjects */
let Ab = new Note(['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G'], 'flat');
let A = new Note(['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'], 'sharp');
let Bb = new Note(['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'], 'flat');
let B = new Note(['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'], 'sharp');
let C = new Note(['C', 'D', 'E', 'F', 'G', 'A', 'B'], 'natural');
let Csharp = new Note(['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#',], 'sharp');
let Db = new Note(['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C'], 'flat');
let D = new Note(['D', 'E', 'F#', 'G', 'A', 'B', 'C#'], 'sharp');
let Eb = new Note(['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'], 'flat');
let E = new Note(['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'], 'sharp');
let F = new Note(['F', 'G', 'A', 'Bb', 'C', 'D', 'E'], 'flat');
let Fsharp = new Note(['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#'], 'sharp');
let Gb = new Note(['Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F'], 'flat');
let G = new Note(['G', 'A', 'B', 'C', 'D', 'E', 'F#'], 'sharp');
/* #endregion */

let letterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
let noteArray = [Ab, A, Bb, B, C, Csharp, Db, D, Eb, E, F, Fsharp, Gb, G];

function addIntervals(noteObject) {
    if (noteObject.sig === 'flat') {
        let m2 = noteObject.notes[ii].concat('', 'b');
        noteObject.notes.splice(ii, 0, m2);

        let m3 = noteObject.notes[iii].concat('', 'b');
        noteObject.notes.splice(iii, 0, m3);

       /* let d4 = noteObject.notes[iv].concat('', 'b');
        noteObject.notes.splice(iv, 0, d4);*/

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


        /*if (noteObject.notes[iv].includes('#')) {
            let d4 = noteObject.notes[iv].slice(0, 1);
            noteObject.notes.splice(iv, 0, d4);
        } else {
            let d4 = noteObject.notes[iv].concat('', 'b');
            noteObject.notes.splice(iv, 0, d4);
        }*/


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


        //console.log(noteObject.notes);

    } else if (noteObject.sig === 'natural') {
        let m2 = noteObject.notes[ii].concat('', 'b');
        noteObject.notes.splice(ii, 0, m2);

        let m3 = noteObject.notes[iii].concat('', 'b');
        noteObject.notes.splice(iii, 0, m3);

        /*let d4 = noteObject.notes[iv].concat('', 'b');
        noteObject.notes.splice(iv, 0, d4);

        let d5 = noteObject.notes[tritone].concat('', 'b');
        noteObject.notes.splice(tritone, 0, d5);

        let m6 = noteObject.notes[vi].concat('', 'b');
        noteObject.notes.splice(vi, 0, m6);

        let m7 = noteObject.notes[vii].concat('', 'b');
        noteObject.notes.splice(vii, 0, m7);*/
    }
    return noteObject;
}

for (let i = 0; i < noteArray.length; i++) {
    addIntervals(noteArray[i]);
    noteArray[i].generateMajor();
    noteArray[i].generateNaturalMinor();
    noteArray[i].generateMelodicMinor();
    noteArray[i].generateHarmonicMinor();
    noteArray[i].generateDorian();
    noteArray[i].generatePhyrigian();
    noteArray[i].generateLydian();
    noteArray[i].generateMixolydian();
    noteArray[i].generateAeolian();
    noteArray[i].generateLocrian();
}

export { noteArray, Ab, A, Bb, B, C, Csharp, Db, D, Eb, E, F, Fsharp, Gb, G, addIntervals, Note, letterArray };

console.log(D.notes);
console.log(D.generateMinorTriad(I));