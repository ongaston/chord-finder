
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


//interval list
class Note {
    constructor(notes, sig) {
        this.notes = notes;
        this.sig = sig;
    }
    get notes() {
        return this.notes;
    }
    get sig() {
        return this.sig;
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

function addIntervals(noteObject) {
    if (noteObject.sig === 'flat') {

    } else if (noteObject.sig === 'sharp') {

    } else if (noteObject.sig === 'natural') {
        
    }
}