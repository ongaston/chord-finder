
import { key } from './buttons.js';
import { gridContainer, fretboardToggle } from './dropdowns.js';

/* #region  variable declarations */
let AbNote = document.getElementsByClassName('Ab');
let ANote = document.getElementsByClassName('A');
let BbNote = document.getElementsByClassName('Bb');
let BNote = document.getElementsByClassName('B');
let CNote = document.getElementsByClassName('C');
let DbNote = document.getElementsByClassName('Db');
let DNote = document.getElementsByClassName('D');
let EbNote = document.getElementsByClassName('Eb');
let ENote = document.getElementsByClassName('E');
let FNote = document.getElementsByClassName('F');
let GbNote = document.getElementsByClassName('Gb');
let GNote = document.getElementsByClassName('G');
let notesArrayFrets = [AbNote, ANote, BbNote, BNote, CNote, DbNote, DNote, EbNote, ENote, FNote, GbNote, GNote];

let majorScale = document.getElementById('major-scale-title');
let majorToggle = false;

let naturalMinorScale = document.getElementById('natural-minor-title');
let naturalToggle = false;

let melodicMinorScale = document.getElementById('melodic-minor-title');
let melodicToggle = false;

let harmonicMinorScale = document.getElementById('harmonic-minor-title');
let harmonicToggle = false;

let minorPentatonicScale = document.getElementById('minor-pentatonic-title');
let minorPentatonicToggle = false;

let majorPentatonicScale = document.getElementById('major-pentatonic-title');
let majorPentatonicToggle = false;

let bluesScales = document.getElementById('blues-title');
let bluesToggle = false;

let dorianMode = document.getElementById('dorian-mode-title');
let dorianToggle = false;

let phyrigianMode = document.getElementById('phyrigian-mode-title');
let phyrigianToggle = false;

let lydianMode = document.getElementById('lydian-mode-title');
let lydianToggle = false;

let mixolydianMode = document.getElementById('mixolydian-mode-title');
let mixolydianToggle = false;

let aeolianMode = document.getElementById('aeolian-mode-title');
let aeolianToggle = false;

let locrianMode = document.getElementById('locrian-mode-title');
let locrianToggle = false;
/* #endregion */

function fretboardFunction (scale) {

    for (let k = 0; k < key[scale].length; k++) {
        switch (key[scale][k]) {
            case 'Ab':
                for (let j = 0; j < AbNote.length; j++) {
                    AbNote[j].innerHTML = 'Ab';
                };
                break;
            case 'A':
                for (let j = 0; j < ANote.length; j++) {
                    ANote[j].innerHTML = 'A';
                };
                break;
            case 'A#':
                for (let j = 0; j < BbNote.length; j++) {
                    BbNote[j].innerHTML = 'A#';
                };
                break;
            case 'Bbb': 
                for (let j = 0; j < ANote.length; j++) {
                    ANote[j].innerHTML = 'Bbb';
                };
                break;
            case 'Bb':
                for (let j = 0; j < BbNote.length; j++) {
                    BbNote[j].innerHTML = 'Bb';
                };
                break;
            case 'B':
                for (let j = 0; j < BNote.length; j++) {
                    BNote[j].innerHTML = 'B';
                };
                break;
            case 'C':
                for (let j = 0; j < CNote.length; j++) {
                    CNote[j].innerHTML = 'C';
                };
                break;
            case 'C#': 
                for (let j = 0; j < DbNote.length; j++) {
                    DbNote[j].innerHTML = 'C#';
                };
                break;
            case 'Dbb':
                for (let j = 0; j < CNote.length; j++) {
                    CNote[j].innerHTML = 'Dbb';
                };
                break;
            case 'Db':
                for (let j = 0; j < DbNote.length; j++) {
                    DbNote[j].innerHTML = 'Db';
                };
                break;
            case 'D':
                for (let j = 0; j < DNote.length; j++) {
                    DNote[j].innerHTML = 'D';
                };
                break;
            case 'D#':
                for (let j = 0; j < EbNote.length; j++) {
                    EbNote[j].innerHTML = 'D#';
                };
                break;
            case 'Ebb':
                for (let j = 0; j < ENote.length; j++) {
                    ENote[j].innerHTML = 'Ebb';
                };
                break;
            case 'Eb':
                for (let j = 0; j < EbNote.length; j++) {
                    EbNote[j].innerHTML = 'Eb';
                };
                break;
            case 'E':
                for (let j = 0; j < ENote.length; j++) {
                    ENote[j].innerHTML = 'E';
                };
                break;
            case 'E#':
                for (let j = 0; j < FNote.length; j++) {
                    FNote[j].innerHTML = 'E#';
                };
                break;
            case 'F':
                for (let j = 0; j < FNote.length; j++) {
                    FNote[j].innerHTML = 'F';
                };
                break;
            case 'F#':
                for (let j = 0; j < GbNote.length; j++) {
                    GbNote[j].innerHTML = 'F#';
                };
                break;
            case 'Gb':
                for (let j = 0; j < GbNote.length; j++) {
                    GbNote[j].innerHTML = 'Gb';
                };
                break;
            case 'G':
                for (let j = 0; j < GNote.length; j++) {
                    GNote[j].innerHTML = 'G';
                };
                break;
            case 'G#':
                for (let j = 0; j < AbNote.length; j++) {
                    AbNote[j].innerHTML = 'G#';
                };
                break;
    
            }
    };

    
};

$(function () {

    $(majorScale).on('click', function () {
        if ((!majorToggle && !key == '') && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('major');
        }
    });

    $(naturalMinorScale).on('click', function() {
        if ((!naturalToggle && !key == '') && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('naturalMinor');
        }
    })

    $(melodicMinorScale).on('click', function() {
        if ((!melodicToggle && !key == '') && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('melodicMinor');
        }
    })

    $(harmonicMinorScale).on('click', function() {
        if ((!harmonicToggle && !key == '') && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('harmonicMinor');
        }
    })

    $(minorPentatonicScale).on('click', function() {
        if ((!minorPentatonicToggle && !key == '') && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('minorPentatonic');
        }
    })

    $(majorPentatonicScale).on('click', function () {
        if ((!majorPentatonicToggle && !key == '') && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('majorPentatonic');
        }
    })

    $(bluesScales).on('click', function() {
        if ((!bluesToggle && !key == '') && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('blues');
        }
    })

    $(dorianMode).on('click', function() {
        if ((!dorianToggle && !key == '') && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('dorian');
        }
    })

    $(phyrigianMode).on('click', function() {
        if ((!phyrigianToggle && !key == '') && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('phyrigian');
        }
    })

    $(lydianMode).on('click', function() {
        if ((!lydianToggle && !key == '') && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('lydian');
        }
    })

    $(mixolydianMode).on('click', function() {
        if ((!mixolydianToggle && !key == '') && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('mixolydian');
        }
    })

    $(aeolianMode).on('click', function() {
        if ((!aeolianToggle && !key == '') && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('aeolian');
        }
    })

    $(locrianMode).on('click', function() {
        if ((!locrianToggle && !key == '') && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('locrian');
        }
    })
    

});

export { notesArrayFrets, fretboardFunction, majorToggle };