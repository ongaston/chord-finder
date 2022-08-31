import { Ab, A, Bb, B, C, Csharp, Db, D, Eb, E, F, Fsharp, Gb, G, I, ii, II, iii, III, PIV, tritone, PV, vi, VI, vii, VII, addIntervals, Note, letterArray, noteArray } from './intervals.js';
import { key } from './buttons.js';

function enharmonicFunction (startNote) {
    let indexNumber;
    let startLetter = startNote[0];
    let enharmonicLetter;
    let enharmonicKey;
    if ((startNote.includes('sharp') || startNote.includes('#')) && !(startNote == 'E#' || startNote == 'B#')) {
        indexNumber = letterArray.indexOf(startLetter) + 1;
        if (indexNumber > 6) {
            indexNumber = 0;
        }
        enharmonicLetter = letterArray[indexNumber];
        enharmonicKey = enharmonicLetter.concat('', 'b');
    }

    else if (startNote == 'E#' || startNote == 'B#') {
        indexNumber = letterArray.indexOf(startLetter) + 1;
        if (indexNumber > 6) {
            indexNumber = 0;
        }
        enharmonicKey = letterArray[indexNumber];
    }

    else if ((startNote.includes('b') && startNote.length < 3) && !(startNote == 'Fb' || startNote == 'Cb')) {
        indexNumber = letterArray.indexOf(startLetter) - 1;
        if (indexNumber < 0) {
            indexNumber = 6;
        }
        enharmonicLetter = letterArray[indexNumber];
        enharmonicKey = enharmonicLetter.concat('', '#');
    } 

    else if (startNote.includes('bb') || (startNote == 'Fb' || startNote == 'Cb')) {
        indexNumber = letterArray.indexOf(startLetter) - 1;
        if (indexNumber < 0) {
            indexNumber = 6;
        }
        enharmonicKey = letterArray[indexNumber];
    }

    else {
        enharmonicKey = startNote;
    }
    return enharmonicKey;
}

function getEnharmonicKey(note) {

    let newNotesArray =[];
    let sig;

    let enharmonicKey = enharmonicFunction(note);
    enharmonicKey = eval(enharmonicKey);

    for (let i = 0; i < enharmonicKey.notes.length; i++) {
        newNotesArray.push(enharmonicFunction(enharmonicKey.notes[i]));
    }


    if (note.includes('#')) {
        sig = 'sharp';
    } else if (note.includes('b')) {
        sig = 'flat';
    } else {
        sig = 'natural';
    }

    if (enharmonicKey == F || enharmonicKey == C) {
        newNotesArray[0] = note;
    }

        let newKey = new Note(newNotesArray, sig);
        return newKey;
    
}


export { getEnharmonicKey };