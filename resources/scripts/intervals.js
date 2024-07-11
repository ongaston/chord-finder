
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
        this.toggle = true;

        //scales/modes
        this.major;
        this.naturalMinor;
        this.melodicMinor;
        this.harmonicMinor;
        this.minorPentatonic;
        this.majorPentatonic;
        this.blues;
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
    generateMinorPentatonic() {
        this.minorPentatonic = [this.notes[I], this.notes[iii], this.notes[PIV], this.notes[PV], this.notes[vii]];
    }
    generateMajorPentatonic() {
        this.majorPentatonic = [this.notes[I], this.notes[II], this.notes[III], this.notes[PV], this.notes[VI]];
    }
    generateBluesScale() {
        this.blues = [this.notes[I], this.notes[iii], this.notes[PIV], this.notes[tritone], this.notes[PV], this.notes[vii]];
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
    static enharmonic(note) {
        if (this.sig == 'sharp' && (note.includes('b') && note.length < 3)) {
            let letter = note[0];
            let indexOfLetter = letterArray.indexOf(letter) - 1;
            if (indexOfLetter < 0) {
                indexOfLetter = 6;
            }
            let newLetter = letterArray[indexOfLetter];
            let newNote = newLetter.concat('', '#');
            return newNote;
         } else if (this.sig == 'sharp' && note.includes('b')) {
            let letter = note[0];
            let indexOfLetter = letterArray.indexOf(letter) - 1;
            if (indexOfLetter < 0) {
                indexOfLetter = 6;
            }
            let newLetter = letterArray[indexOfLetter];
            return newLetter;
        } else if (this.sig == 'flat' && note.includes('#')) {
            let letter = note[0];
            let indexOfLetter = letterArray.indexOf(letter) + 1;
            if (indexOfLetter > 6) {
                indexOfLetter = 0;
            }
            let newLetter = letterArray[indexOfLetter];
            let newNote = newLetter.concat('', 'b');
            return newNote;
        }
         else {
            return note;
        }
    }
    generateRoot(interval) {
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
        return root;
    }
    generateMajorTriad() {
        let majorTriad = [];
        majorTriad[0] = this.notes[I];
        majorTriad[1] = Note.enharmonic(this.notes[III]);
        majorTriad[2] = Note.enharmonic(this.notes[PV]);
        return majorTriad;
    }
    generateMinorTriad(interval) {
        let minorTriad = [];
        minorTriad[0] = this.notes[I];
        minorTriad[1] = Note.enharmonic(this.notes[iii]);
        minorTriad[2] = Note.enharmonic(this.notes[PV]);
        return minorTriad;
    }
    generateDiminishedTriad(interval) {
        let diminishedTriad = [];
        diminishedTriad[0] = this.notes[I];
        diminishedTriad[1] = Note.enharmonic(this.notes[iii]);
        diminishedTriad[2] = Note.enharmonic(this.notes[tritone]);
        return diminishedTriad;
    }
    generateAugmentedTriad(interval) {
        let augmentedTriad = [];
        let augmentedFifth = this.notes[PV].concat('', '#');
        if (augmentedFifth.includes('b') && augmentedFifth.includes('#')) {
            augmentedFifth = augmentedFifth[0];
        }
        augmentedTriad[0] = this.notes[I];
        augmentedTriad[1] = Note.enharmonic(this.notes[III]);
        augmentedTriad[2] = Note.enharmonic(augmentedFifth);
        return augmentedTriad;
    }
    generateMajorSeventh(interval) {
        let majorTriad = this.generateMajorTriad(interval);
        let majorSeventh = [];
        for (let i = 0; i < majorTriad.length; i++) {
            majorSeventh.push(majorTriad[i]);
        }
        majorSeventh[3] = Note.enharmonic(this.notes[VII]);
        return majorSeventh;
    }
    generateMinorSeventh(interval) {
        let minorTriad = this.generateMinorTriad(interval);
        let minorSeventh = [];
        for (let i = 0; i < minorTriad.length; i++) {
            minorSeventh.push(minorTriad[i]);
        }
        minorSeventh[3] = Note.enharmonic(this.notes[vii]);
        return minorSeventh;
    }
    generateDiminishedSeventh(interval) {
        let diminishedTriad = this.generateDiminishedTriad(interval);
        let diminishedSeventh = [];
        for (let i = 0; i < diminishedTriad.length; i++) {
            diminishedSeventh.push(diminishedTriad[i]);
        }
        let diminishedSeventhInterval = this.notes[vii].concat('', 'b');
        diminishedSeventh[3] = Note.enharmonic(diminishedSeventhInterval);
        return diminishedSeventh;
    }
    generateDominantSeventh(interval) {
        let majorTriad = this.generateMajorTriad(interval);
        let dominantSeventh = [];
        for (let i = 0; i < majorTriad.length; i++) {
            dominantSeventh.push(majorTriad[i]);
        }
        dominantSeventh[3] = Note.enharmonic(this.notes[vii]);
        return dominantSeventh;
    }
    generateMajorSixth(interval) {
        let majorTriad = this.generateMajorTriad(interval);
        let majorSixth = [];
        for (let i = 0; i < majorTriad.length; i++) {
            majorSixth.push(majorTriad[i]);
        }
        majorSixth[3] = Note.enharmonic(this.notes[VI]);
        return majorSixth;
    }
    generateMinorSixth(interval) {
        let minorTriad = this.generateMinorTriad(interval);
        let minorSixth = [];
        for (let i = 0; i < minorTriad.length; i++) {
            minorSixth.push(minorTriad[i]);
        }
        minorSixth[3] = Note.enharmonic(this.notes[VI]);
        return minorSixth;
    }
    generateMajorNinth(interval) {
        let majorSeventh = this.generateMajorSeventh(interval);
        let majorNinth = [];
        for (let i = 0; i < majorSeventh.length; i++) {
            majorNinth.push(majorSeventh[i]);
        }
        majorNinth[4] = Note.enharmonic(this.notes[II]);
        return majorNinth;
    }
    generateMajorAddNinth(interval) {
        let majorTriad = this.generateMajorTriad(interval);
        let majorAddNinth = [];
        for (let i = 0; i < majorTriad.length; i++) {
            majorAddNinth.push(majorTriad[i]);
        }
        majorAddNinth[3] = Note.enharmonic(this.notes[II]);
        return majorAddNinth;
    }
    generateMinorNinth(interval) {
        let minorSeventh =  this.generateMinorSeventh(interval);
        let minorNinth = [];
        for (let i = 0; i < minorSeventh.length; i++) {
            minorNinth.push(minorSeventh[i]);
        }
        minorNinth.push(Note.enharmonic(this.notes[II]));
        return minorNinth;
    }
    generateMinorAddNinth(interval) {
        let minorTriad = this.generateMinorTriad(interval);
        let minorAddNinth = [];
        for (let i = 0; i < minorTriad.length; i++) {
            minorAddNinth.push(minorTriad[i]);
        }
        minorAddNinth[3] = Note.enharmonic(this.notes[II]);
        return minorAddNinth;
    }
    generateDominantNinth(interval) {
        let dominantSeventh = this.generateDominantSeventh(interval);
        let dominantNinth = [];
        for (let i = 0; i < dominantSeventh.length; i++) {
            dominantNinth.push(dominantSeventh[i]);
        }
        dominantNinth[4] = Note.enharmonic(this.notes[II]);
        return dominantNinth;
    }
    generateDominantEleventh(interval) {
        let dominantNinth = this.generateDominantNinth(interval);
        let dominantEleventh = [];
        for (let i = 0; i < dominantNinth.length; i++) {
            dominantEleventh.push(dominantNinth[i]);
        }
        dominantEleventh[5] = Note.enharmonic(this.notes[PIV]);
        return dominantEleventh;
    }
    generateDominantThirteenth(interval) {
        let dominantEleventh = this.generateDominantEleventh(interval);
        let dominantThirteenth = [];
        for (let i = 0; i < dominantEleventh.length; i++) {
            dominantThirteenth.push(dominantEleventh[i]);
        }
        dominantThirteenth[6] = Note.enharmonic(this.notes[VI]);
        return dominantThirteenth;
    }
    generateHalfDiminished(interval) {
        let diminishedTriad = this.generateDiminishedTriad(interval);
        let halfDiminished = [];
        for (let i = 0; i < diminishedTriad.length; i++) {
            halfDiminished.push(diminishedTriad[i]);
        }
        halfDiminished[3] = Note.enharmonic(this.notes[vii]);
        return halfDiminished;
    }
    generateMajorSixOverNine(interval) {
        let majorSixth = this.generateMajorSixth(interval);
        let majorSixOverNine = [];
        for (let i = 0; i < majorSixth.length; i++) {
            majorSixOverNine.push(majorSixth[i]);
        }
        majorSixOverNine[4] = Note.enharmonic(this.notes[II]);
        return majorSixOverNine;
    }
    generateMinorSixOverNine(interval) {
        let minorSixth = this.generateMinorSixth(interval);
        let minorSixOverNine = [];
        for (let i = 0; i < minorSixth.length; i++) {
            minorSixOverNine.push(minorSixth[i]);
        }
        minorSixOverNine[4] = Note.enharmonic(this.notes[II]);
        return minorSixOverNine;
    }
    generateSus2(interval) {
        let sus2 = [];
        sus2[0] = this.notes[I];
        sus2[1] = Note.enharmonic(this.notes[II]);
        sus2[2] = Note.enharmonic(this.notes[PV]);
        return sus2;
    }
    generateSus4(interval) {
        let sus4 = [];
        sus4[0] = this.notes[I];
        sus4[1] = Note.enharmonic(this.notes[PIV]);
        sus4[2] = Note.enharmonic(this.notes[PV]);
        return sus4;
    }
    generateAug5() {
        let aug5 = this.notes[PV].concat('', '#');
        if (aug5.includes('b')) {
            aug5 = aug5[0];
        }
        return aug5;
    }
    generateDim7() {
        let dim7 = this.notes[vii].concat('', 'b');
        if (dim7.includes('#')) {
            dim7 = dim7[0].concat('', 'b');
        } 
        return dim7;
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
let noteStringArray = ['Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G'];
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
        noteObject.notes.splice(iv, 0, d4);*/

        let d5 = noteObject.notes[tritone].concat('', 'b');
        noteObject.notes.splice(tritone, 0, d5);

        let m6 = noteObject.notes[vi].concat('', 'b');
        noteObject.notes.splice(vi, 0, m6);

        let m7 = noteObject.notes[vii].concat('', 'b');
        noteObject.notes.splice(vii, 0, m7);
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
    noteArray[i].generateMinorPentatonic();
    noteArray[i].generateMajorPentatonic();
    noteArray[i].generateBluesScale();
}

export { noteArray, Ab, A, Bb, B, C, Csharp, Db, D, Eb, E, F, Fsharp, Gb, G, I, ii, II, iii, III, PIV, tritone, PV, vi, VI, vii, VII, addIntervals, Note, letterArray, noteStringArray };

//console.log(Ab.notes);
//console.log(Ab.major);
//console.log(Ab.generateDim7(I));
