import { key } from './buttons.js';
import { staffToggle, modifyGlobalScale } from './dropdowns.js';

/* #region  variables */

let ANoteStaff = document.getElementsByClassName('Astaff');
let BNoteStaff = document.getElementsByClassName('Bstaff');
let CNoteStaff = document.getElementsByClassName('Cstaff');
let DNoteStaff = document.getElementsByClassName('Dstaff');
let ENoteStaff = document.getElementsByClassName('Estaff');
let FNoteStaff = document.getElementsByClassName('Fstaff');
let GNoteStaff = document.getElementsByClassName('Gstaff');


let c4 = document.getElementById('c4');
let d4 = document.getElementById('d4');
let e4 = document.getElementById('e4');
let f4 = document.getElementById('f4');
let g4 = document.getElementById('g4');
let a5 = document.getElementById('a5');
let b5 = document.getElementById('b5');
let c5 = document.getElementById('c5');
let d5 = document.getElementById('d5');
let e5 = document.getElementById('e5');
let f5 = document.getElementById('f5');
let g5 = document.getElementById('g5');
let a6 = document.getElementById('a6');
let b6 = document.getElementById('b6');
let notesArrayStaff = [c4, d4, e4, f4, g4, a5, b5, c5, d5, e5, f5, g5, a6, b6];

let Bsig = document.getElementById('Bsig');
let Esig = document.getElementById('Esig');
let Asig = document.getElementById('Asig');
let Dsig = document.getElementById('Dsig');
let Gsig = document.getElementById('Gsig');
let Csig = document.getElementById('Csig');
let Fsig = document.getElementById('Fsig');
let sigArray = document.getElementsByClassName('sig');
let toggle = false;
/* #endregion */


function staffFunction (scale) {
    modifyGlobalScale(scale);
    for (let i = 0; i < notesArrayStaff.length; i++) {
        $(notesArrayStaff[i]).removeClass('sharp natural flat');
    }
    for (let i = 0; i < key[scale].length; i++) {
        let currentNote = key[scale][i].toLowerCase();
        let currentLetter = currentNote[0].toLowerCase();
        let rootLetter = key.notes[0][0];
        let startingNumber;

        switch (rootLetter) {
            case 'C':
            case 'D':
            case 'E':
            case 'F':
            case 'G':
                startingNumber = 4;
                rootLetter = rootLetter.concat(startingNumber.toString());
                break;
            case 'A':
            case 'B':
                startingNumber = 5;
                rootLetter = rootLetter.concat(startingNumber.toString());
                break;
        }
        if (currentLetter == 'a' && i !== 0) {
            toggle = true;

        }
        if (toggle ) {
            startingNumber++;
        }
        let currentHTML = eval(currentLetter.concat(startingNumber.toString()));
        switch (currentNote) {
                case 'ab':
                case 'bb':
                case 'cb':
                case 'db':
                case 'eb':
                case 'fb':
                case 'gb':
                        $(currentHTML).removeClass('sharp').removeClass('natural').addClass('flat');
                    break;
                case 'a':
                case 'b':
                case 'c':
                case 'd':
                case 'e':
                case 'f':
                case 'g':
                        $(currentHTML).removeClass('sharp').removeClass('flat').addClass('natural');
                    break;
                case 'a#':
                case 'b#':
                case 'c#':
                case 'd#':
                case 'e#':
                case 'f#':
                case 'g#':
                        $(currentHTML).removeClass('natural').removeClass('flat').addClass('sharp');
                    break;
                case 'Bbb': 
                    for (let j = 0; j < ANoteStaff.length; j++) {
                        ANoteStaff[j].innerHTML = 'Bbb';
                    };
                    break;
                case 'Dbb':
                    for (let j = 0; j < CNoteStaff.length; j++) {
                        CNoteStaff[j].innerHTML = 'Dbb';
                    };
                    break;
               
                case 'Ebb':
                    for (let j = 0; j < DNoteStaff.length; j++) {
                        DNoteStaff[j].innerHTML = 'Ebb';
                    };
                    break;
               
        }
        let currentColumn = i + 9;
        currentHTML.style.gridColumn = currentColumn.toString() + ' / ' + currentColumn.toString();
    }
    switch(key.notes[0]) {
        case 'Ab':
            $(Bsig).removeClass('sharp-sig').addClass('flat-sig');
            $(Esig).removeClass('sharp-sig').addClass('flat-sig');
            $(Asig).removeClass('sharp-sig').addClass('flat-sig');
            $(Dsig).removeClass('sharp-sig').addClass('flat-sig');
            $(Gsig).removeClass('sharp-sig flat-sig');
            $(Csig).removeClass('sharp-sig flat-sig');
            $(Fsig).removeClass('sharp-sig flat-sig');
            break;
        case 'Gb':
            $(Bsig).removeClass('sharp-sig').addClass('flat-sig');
            $(Esig).removeClass('sharp-sig').addClass('flat-sig');
            $(Asig).removeClass('sharp-sig').addClass('flat-sig');
            $(Dsig).removeClass('sharp-sig').addClass('flat-sig');
            $(Gsig).removeClass('sharp-sig').addClass('flat-sig');
            $(Csig).removeClass('sharp-sig').addClass('flat-sig');
            $(Fsig).removeClass('sharp-sig flat-sig');
            break;
        case 'Db':
            $(Bsig).removeClass('sharp-sig').addClass('flat-sig');
            $(Esig).removeClass('sharp-sig').addClass('flat-sig');
            $(Asig).removeClass('sharp-sig').addClass('flat-sig');
            $(Dsig).removeClass('sharp-sig').addClass('flat-sig');
            $(Gsig).removeClass('sharp-sig').addClass('flat-sig');
            $(Csig).removeClass('sharp-sig flat-sig');
            $(Fsig).removeClass('sharp-sig flat-sig');
            break;
        case 'Eb':
            $(Bsig).removeClass('sharp-sig').addClass('flat-sig');
            $(Esig).removeClass('sharp-sig').addClass('flat-sig');
            $(Asig).removeClass('sharp-sig').addClass('flat-sig');
            $(Dsig).removeClass('sharp-sig flat-sig');
            $(Gsig).removeClass('sharp-sig flat-sig');
            $(Csig).removeClass('sharp-sig flat-sig');
            $(Fsig).removeClass('sharp-sig flat-sig');
            break;
        case 'Bb':
            $(Bsig).removeClass('sharp-sig').addClass('flat-sig');
            $(Esig).removeClass('sharp-sig').addClass('flat-sig');
            $(Asig).removeClass('sharp-sig flat-sig');
            $(Dsig).removeClass('sharp-sig flat-sig');
            $(Gsig).removeClass('sharp-sig flat-sig');
            $(Csig).removeClass('sharp-sig flat-sig');
            $(Fsig).removeClass('sharp-sig flat-sig');
            break;
        case 'F':
            $(Bsig).removeClass('sharp-sig').addClass('flat-sig');
            $(Esig).removeClass('sharp-sig flat-sig');
            $(Asig).removeClass('sharp-sig flat-sig');
            $(Dsig).removeClass('sharp-sig flat-sig');
            $(Gsig).removeClass('sharp-sig flat-sig');
            $(Csig).removeClass('sharp-sig flat-sig');
            $(Fsig).removeClass('sharp-sig flat-sig');
            break;
        case 'C#':
            $(Bsig).removeClass('flat-sig').addClass('sharp-sig');
            $(Esig).removeClass('flat-sig').addClass('sharp-sig');
            $(Asig).removeClass('flat-sig').addClass('sharp-sig');
            $(Dsig).removeClass('flat-sig').addClass('sharp-sig');
            $(Gsig).removeClass('flat-sig').addClass('sharp-sig');
            $(Csig).removeClass('flat-sig').addClass('sharp-sig');
            $(Fsig).removeClass('flat-sig').addClass('sharp-sig');
            break;
        case 'F#':
            $(Bsig).removeClass('flat-sig sharp-sig');
            $(Esig).removeClass('flat-sig').addClass('sharp-sig');
            $(Asig).removeClass('flat-sig').addClass('sharp-sig');
            $(Dsig).removeClass('flat-sig').addClass('sharp-sig');
            $(Gsig).removeClass('flat-sig').addClass('sharp-sig');
            $(Csig).removeClass('flat-sig').addClass('sharp-sig');
            $(Fsig).removeClass('flat-sig').addClass('sharp-sig');
            break;
        case 'B':
            $(Bsig).removeClass('flat-sig sharp-sig');
            $(Esig).removeClass('flat-sig sharp-sig');
            $(Asig).removeClass('flat-sig').addClass('sharp-sig');
            $(Dsig).removeClass('flat-sig').addClass('sharp-sig');
            $(Gsig).removeClass('flat-sig').addClass('sharp-sig');
            $(Csig).removeClass('flat-sig').addClass('sharp-sig');
            $(Fsig).removeClass('flat-sig').addClass('sharp-sig');
            break;
        case 'E':
            $(Bsig).removeClass('flat-sig sharp-sig');
            $(Esig).removeClass('flat-sig sharp-sig');
            $(Asig).removeClass('flat-sig sharp-sig');
            $(Dsig).removeClass('flat-sig').addClass('sharp-sig');
            $(Gsig).removeClass('flat-sig').addClass('sharp-sig');
            $(Csig).removeClass('flat-sig').addClass('sharp-sig');
            $(Fsig).removeClass('flat-sig').addClass('sharp-sig');
            break;
        case 'A':
            $(Bsig).removeClass('flat-sig sharp-sig');
            $(Esig).removeClass('flat-sig sharp-sig');
            $(Asig).removeClass('flat-sig sharp-sig');
            $(Dsig).removeClass('flat-sig sharp-sig');
            $(Gsig).removeClass('flat-sig').addClass('sharp-sig');
            $(Csig).removeClass('flat-sig').addClass('sharp-sig');
            $(Fsig).removeClass('flat-sig').addClass('sharp-sig');
            break;
        case 'D':
            $(Bsig).removeClass('flat-sig sharp-sig');
            $(Esig).removeClass('flat-sig sharp-sig');
            $(Asig).removeClass('flat-sig sharp-sig');
            $(Dsig).removeClass('flat-sig sharp-sig');
            $(Gsig).removeClass('flat-sig sharp-sig');
            $(Csig).removeClass('flat-sig').addClass('sharp-sig');
            $(Fsig).removeClass('flat-sig').addClass('sharp-sig');
            break;
        case 'G':
            $(Bsig).removeClass('flat-sig sharp-sig');
            $(Esig).removeClass('flat-sig sharp-sig');
            $(Asig).removeClass('flat-sig sharp-sig');
            $(Dsig).removeClass('flat-sig sharp-sig');
            $(Gsig).removeClass('flat-sig sharp-sig');
            $(Csig).removeClass('flat-sig sharp-sig');
            $(Fsig).removeClass('flat-sig').addClass('sharp-sig');
            break;
        case 'C':
            $(Bsig).removeClass('flat-sig sharp-sig');
            $(Esig).removeClass('flat-sig sharp-sig');
            $(Asig).removeClass('flat-sig sharp-sig');
            $(Dsig).removeClass('flat-sig sharp-sig');
            $(Gsig).removeClass('flat-sig sharp-sig');
            $(Csig).removeClass('flat-sig sharp-sig');
            $(Fsig).removeClass('flat-sig sharp-sig');
            break;
    }
    toggle = false;
}

$(function() {

    $("button[class~='major-scale']").on('click', function () {
        if (!key == '' && !staffToggle) {
            for (let i = 0; i < notesArrayStaff.length; i++) {
                for (let j = 0; j < notesArrayStaff[i].length; j++) {
                    notesArrayStaff[i][j].innerHTML = '';
                }
            }
            staffFunction('major');
        }
    });

    $("button[class~='natural-minor']").on('click', function() {
        if (!key == '' && !staffToggle) {
            for (let i = 0; i < notesArrayStaff.length; i++) {
                for (let j = 0; j < notesArrayStaff[i].length; j++) {
                    notesArrayStaff[i][j].innerHTML = '';
                }
            }
            staffFunction('naturalMinor');
        }
    })

    $("button[class~='melodic-minor']").on('click', function() {
        if (!key == '' && !staffToggle) {
            for (let i = 0; i < notesArrayStaff.length; i++) {
                for (let j = 0; j < notesArrayStaff[i].length; j++) {
                    notesArrayStaff[i][j].innerHTML = '';
                }
            }
            staffFunction('melodicMinor');
        }
    })

    $("button[class~='harmonic-minor']").on('click', function() {
        if (!key == '' && !staffToggle) {
            for (let i = 0; i < notesArrayStaff.length; i++) {
                for (let j = 0; j < notesArrayStaff[i].length; j++) {
                    notesArrayStaff[i][j].innerHTML = '';
                }
            }
            staffFunction('harmonicMinor');
        }
    })

    $("button[class~='minor-pentatonic']").on('click', function() {
        if (!key == '' && !staffToggle) {
            for (let i = 0; i < notesArrayStaff.length; i++) {
                for (let j = 0; j < notesArrayStaff[i].length; j++) {
                    notesArrayStaff[i][j].innerHTML = '';
                }
            }
            staffFunction('minorPentatonic');
        }
    })

    $("button[class~='major-pentatonic']").on('click', function () {
        if (!key == '' && !staffToggle) {
            for (let i = 0; i < notesArrayStaff.length; i++) {
                for (let j = 0; j < notesArrayStaff[i].length; j++) {
                    notesArrayStaff[i][j].innerHTML = '';
                }
            }
            staffFunction('majorPentatonic');
        }
    })

    $("button[class~='blues-scale']").on('click', function() {
        if (!key == '' && !staffToggle) {
            for (let i = 0; i < notesArrayStaff.length; i++) {
                for (let j = 0; j < notesArrayStaff[i].length; j++) {
                    notesArrayStaff[i][j].innerHTML = '';
                }
            }
            staffFunction('blues');
        }
    })

    $("button[class~='dorian']").on('click', function() {
        if (!key == '' && !staffToggle) {
            for (let i = 0; i < notesArrayStaff.length; i++) {
                for (let j = 0; j < notesArrayStaff[i].length; j++) {
                    notesArrayStaff[i][j].innerHTML = '';
                }
            }
            staffFunction('dorian');
        }
    })

    $("button[class~='phyrigian']").on('click', function() {
        if (!key == '' && !staffToggle) {
            for (let i = 0; i < notesArrayStaff.length; i++) {
                for (let j = 0; j < notesArrayStaff[i].length; j++) {
                    notesArrayStaff[i][j].innerHTML = '';
                }
            }
            staffFunction('phyrigian');
        }
    })

    $("button[class~='lydian']").on('click', function() {
        if (!key == '' && !staffToggle) {
            for (let i = 0; i < notesArrayStaff.length; i++) {
                for (let j = 0; j < notesArrayStaff[i].length; j++) {
                    notesArrayStaff[i][j].innerHTML = '';
                }
            }
            staffFunction('lydian');
        }
    })

    $("button[class~='mixolydian']").on('click', function() {
        if (!key == '' && !staffToggle) {
            for (let i = 0; i < notesArrayStaff.length; i++) {
                for (let j = 0; j < notesArrayStaff[i].length; j++) {
                    notesArrayStaff[i][j].innerHTML = '';
                }
            }
            staffFunction('mixolydian');
        }
    })

    $("button[class~='aeolian']").on('click', function() {
        if (!key == '' && !staffToggle) {
            for (let i = 0; i < notesArrayStaff.length; i++) {
                for (let j = 0; j < notesArrayStaff[i].length; j++) {
                    notesArrayStaff[i][j].innerHTML = '';
                }
            }
            staffFunction('aeolian');
        }
    })

    $("button[class~='locrian']").on('click', function() {
        if (!key == '' && !staffToggle) {
            for (let i = 0; i < notesArrayStaff.length; i++) {
                for (let j = 0; j < notesArrayStaff[i].length; j++) {
                    notesArrayStaff[i][j].innerHTML = '';
                }
            }
            staffFunction('locrian');
        }
    })

})

export { notesArrayStaff, staffFunction, sigArray };