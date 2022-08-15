
import { key } from './buttons.js';
import { gridContainer } from './dropdowns.js';

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
let naturalMinorScale = document.getElementById('natural-minor-title');
let melodicMinorScale = document.getElementById('melodic-minor-title');
let harmonicMinorScale = document.getElementById('harmonic-minor-title');
let minorPentatonicScale = document.getElementById('minor-pentatonic-title');
let majorPentatonicScale = document.getElementById('major-pentatonic-title');
let bluesScales = document.getElementById('blues-title');
let dorianMode = document.getElementById('dorian-mode-title');
let phyrigianMode = document.getElementById('phyrigian-mode-title');
let lydianMode = document.getElementById('lydian-mode-title');
let mixolydianMode = document.getElementById('mixolydian-mode-title');
let aeolianMode = document.getElementById('aeolian-mode-title');
let locrianMode = document.getElementById('locrian-mode-title');

let currentScale = '';
/* #endregion */

function fretboardFunction (scale) {
    currentScale = scale;
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
            case 'B#':
                for (let j = 0; j < CNote.length; j++) {
                    CNote[j].innerHTML = 'B#';
                };
                break;
            case 'Cb':
                for (let j = 0; j < BNote.length; j++) {
                    BNote[j].innerHTML = 'Cb';
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
            case 'Fb':
                for (let j = 0; j < ENote.length; j++) {
                    ENote[j].innerHTML = 'Fb';
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
        if (!key == '' && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('major');
        }
    });

    $(naturalMinorScale).on('click', function() {
        if (!key == '' && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('naturalMinor');
        }
    })

    $(melodicMinorScale).on('click', function() {
        if (!key == '' && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('melodicMinor');
        }
    })

    $(harmonicMinorScale).on('click', function() {
        if (!key == '' && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('harmonicMinor');
        }
    })

    $(minorPentatonicScale).on('click', function() {
        if (!key == '' && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('minorPentatonic');
        }
    })

    $(majorPentatonicScale).on('click', function () {
        if (!key == '' && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('majorPentatonic');
        }
    })

    $(bluesScales).on('click', function() {
        if (!key == '' && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('blues');
        }
    })

    $(dorianMode).on('click', function() {
        if (!key == '' && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('dorian');
        }
    })

    $(phyrigianMode).on('click', function() {
        if (!key == '' && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('phyrigian');
        }
    })

    $(lydianMode).on('click', function() {
        if (!key == '' && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('lydian');
        }
    })

    $(mixolydianMode).on('click', function() {
        if (!key == '' && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('mixolydian');
        }
    })

    $(aeolianMode).on('click', function() {
        if (!key == '' && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('aeolian');
        }
    })

    $(locrianMode).on('click', function() {
        if (!key == '' && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('locrian');
        }
    })
    

});

export { notesArrayFrets, fretboardFunction, currentScale };