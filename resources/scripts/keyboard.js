import { key } from './buttons.js';
import { keyboardToggle } from './dropdowns.js';

/* #region  variables */
let AbNoteKeys = document.getElementsByClassName('Abkey');
let ANoteKeys = document.getElementsByClassName('Akey');
let BbNoteKeys = document.getElementsByClassName('Bbkey');
let BNoteKeys = document.getElementsByClassName('Bkey');
let CNoteKeys = document.getElementsByClassName('Ckey');
let DbNoteKeys = document.getElementsByClassName('Dbkey');
let DNoteKeys = document.getElementsByClassName('Dkey');
let EbNoteKeys = document.getElementsByClassName('Ebkey');
let ENoteKeys = document.getElementsByClassName('Ekey');
let FNoteKeys = document.getElementsByClassName('Fkey');
let GbNoteKeys = document.getElementsByClassName('Gbkey');
let GNoteKeys = document.getElementsByClassName('Gkey');
let notesArrayKeys = [AbNoteKeys, ANoteKeys, BbNoteKeys, BNoteKeys, CNoteKeys, DbNoteKeys, DNoteKeys, EbNoteKeys, ENoteKeys, FNoteKeys, GbNoteKeys, GNoteKeys];

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

let currentScaleKeys = '';
/* #endregion */

function keyboardFunction (scale) {
    currentScaleKeys = scale;
    for (let i = 0; i < key[scale].length; i++) {
        switch (key[scale][i]) {
            case 'Ab':
                for (let j = 0; j < AbNoteKeys.length; j++) {
                    AbNoteKeys[j].innerHTML = 'Ab';
                };
                break;
            case 'A':
                for (let j = 0; j < ANoteKeys.length; j++) {
                    ANoteKeys[j].innerHTML = 'A';
                };
                break;
            case 'A#':
                for (let j = 0; j < BbNoteKeys.length; j++) {
                    BbNoteKeys[j].innerHTML = 'A#';
                };
                break;
            case 'Bbb': 
                for (let j = 0; j < ANoteKeys.length; j++) {
                    ANoteKeys[j].innerHTML = 'Bbb';
                };
                break;
            case 'Bb':
                for (let j = 0; j < BbNoteKeys.length; j++) {
                    BbNoteKeys[j].innerHTML = 'Bb';
                };
                break;
            case 'B':
                for (let j = 0; j < BNoteKeys.length; j++) {
                    BNoteKeys[j].innerHTML = 'B';
                };
                break;
            case 'B#':
                for (let j = 0; j < CNoteKeys.length; j++) {
                    CNoteKeys[j].innerHTML = 'B#';
                };
                break;
            case 'Cb':
                for (let j = 0; j < BNoteKeys.length; j++) {
                    BNoteKeys[j].innerHTML = 'Cb';
                };
                break;
            case 'C':
                for (let j = 0; j < CNoteKeys.length; j++) {
                    CNoteKeys[j].innerHTML = 'C';
                };
                break;
            case 'C#': 
                for (let j = 0; j < DbNoteKeys.length; j++) {
                    DbNoteKeys[j].innerHTML = 'C#';
                };
                break;
            case 'Dbb':
                for (let j = 0; j < CNoteKeys.length; j++) {
                    CNoteKeys[j].innerHTML = 'Dbb';
                };
                break;
            case 'Db':
                for (let j = 0; j < DbNoteKeys.length; j++) {
                    DbNoteKeys[j].innerHTML = 'Db';
                };
                break;
            case 'D':
                for (let j = 0; j < DNoteKeys.length; j++) {
                    DNoteKeys[j].innerHTML = 'D';
                };
                break;
            case 'D#':
                for (let j = 0; j < EbNoteKeys.length; j++) {
                    EbNoteKeys[j].innerHTML = 'D#';
                };
                break;
            case 'Ebb':
                for (let j = 0; j < ENoteKeys.length; j++) {
                    ENoteKeys[j].innerHTML = 'Ebb';
                };
                break;
            case 'Eb':
                for (let j = 0; j < EbNoteKeys.length; j++) {
                    EbNoteKeys[j].innerHTML = 'Eb';
                };
                break;
            case 'E':
                for (let j = 0; j < ENoteKeys.length; j++) {
                    ENoteKeys[j].innerHTML = 'E';
                };
                break;
            case 'E#':
                for (let j = 0; j < FNoteKeys.length; j++) {
                    FNoteKeys[j].innerHTML = 'E#';
                };
                break;
            case 'Fb':
                for (let j = 0; j < ENoteKeys.length; j++) {
                    ENoteKeys[j].innerHTML = 'Fb';
                };
                break;
            case 'F':
                for (let j = 0; j < FNoteKeys.length; j++) {
                    FNoteKeys[j].innerHTML = 'F';
                };
                break;
            case 'F#':
                for (let j = 0; j < GbNoteKeys.length; j++) {
                    GbNoteKeys[j].innerHTML = 'F#';
                };
                break;
            case 'Gb':
                for (let j = 0; j < GbNoteKeys.length; j++) {
                    GbNoteKeys[j].innerHTML = 'Gb';
                };
                break;
            case 'G':
                for (let j = 0; j < GNoteKeys.length; j++) {
                    GNoteKeys[j].innerHTML = 'G';
                };
                break;
            case 'G#':
                for (let j = 0; j < AbNoteKeys.length; j++) {
                    AbNoteKeys[j].innerHTML = 'G#';
                };
                break;
        }
    }
}

$(function() {

    $(majorScale).on('click', function () {
        if (!key == '' && !keyboardToggle) {
            for (let i = 0; i < notesArrayKeys.length; i++) {
                for (let j = 0; j < notesArrayKeys[i].length; j++) {
                    notesArrayKeys[i][j].innerHTML = '';
                }
            }
            keyboardFunction('major');
        }
    });

    $(naturalMinorScale).on('click', function() {
        if (!key == '' && !keyboardToggle) {
            for (let i = 0; i < notesArrayKeys.length; i++) {
                for (let j = 0; j < notesArrayKeys[i].length; j++) {
                    notesArrayKeys[i][j].innerHTML = '';
                }
            }
            keyboardFunction('naturalMinor');
        }
    })

    $(melodicMinorScale).on('click', function() {
        if (!key == '' && !keyboardToggle) {
            for (let i = 0; i < notesArrayKeys.length; i++) {
                for (let j = 0; j < notesArrayKeys[i].length; j++) {
                    notesArrayKeys[i][j].innerHTML = '';
                }
            }
            keyboardFunction('melodicMinor');
        }
    })

    $(harmonicMinorScale).on('click', function() {
        if (!key == '' && !keyboardToggle) {
            for (let i = 0; i < notesArrayKeys.length; i++) {
                for (let j = 0; j < notesArrayKeys[i].length; j++) {
                    notesArrayKeys[i][j].innerHTML = '';
                }
            }
            keyboardFunction('harmonicMinor');
        }
    })

    $(minorPentatonicScale).on('click', function() {
        if (!key == '' && !keyboardToggle) {
            for (let i = 0; i < notesArrayKeys.length; i++) {
                for (let j = 0; j < notesArrayKeys[i].length; j++) {
                    notesArrayKeys[i][j].innerHTML = '';
                }
            }
            keyboardFunction('minorPentatonic');
        }
    })

    $(majorPentatonicScale).on('click', function () {
        if (!key == '' && !keyboardToggle) {
            for (let i = 0; i < notesArrayKeys.length; i++) {
                for (let j = 0; j < notesArrayKeys[i].length; j++) {
                    notesArrayKeys[i][j].innerHTML = '';
                }
            }
            keyboardFunction('majorPentatonic');
        }
    })

    $(bluesScales).on('click', function() {
        if (!key == '' && !keyboardToggle) {
            for (let i = 0; i < notesArrayKeys.length; i++) {
                for (let j = 0; j < notesArrayKeys[i].length; j++) {
                    notesArrayKeys[i][j].innerHTML = '';
                }
            }
            keyboardFunction('blues');
        }
    })

    $(dorianMode).on('click', function() {
        if (!key == '' && !keyboardToggle) {
            for (let i = 0; i < notesArrayKeys.length; i++) {
                for (let j = 0; j < notesArrayKeys[i].length; j++) {
                    notesArrayKeys[i][j].innerHTML = '';
                }
            }
            keyboardFunction('dorian');
        }
    })

    $(phyrigianMode).on('click', function() {
        if (!key == '' && !keyboardToggle) {
            for (let i = 0; i < notesArrayKeys.length; i++) {
                for (let j = 0; j < notesArrayKeys[i].length; j++) {
                    notesArrayKeys[i][j].innerHTML = '';
                }
            }
            keyboardFunction('phyrigian');
        }
    })

    $(lydianMode).on('click', function() {
        if (!key == '' && !keyboardToggle) {
            for (let i = 0; i < notesArrayKeys.length; i++) {
                for (let j = 0; j < notesArrayKeys[i].length; j++) {
                    notesArrayKeys[i][j].innerHTML = '';
                }
            }
            keyboardFunction('lydian');
        }
    })

    $(mixolydianMode).on('click', function() {
        if (!key == '' && !keyboardToggle) {
            for (let i = 0; i < notesArrayKeys.length; i++) {
                for (let j = 0; j < notesArrayKeys[i].length; j++) {
                    notesArrayKeys[i][j].innerHTML = '';
                }
            }
            keyboardFunction('mixolydian');
        }
    })

    $(aeolianMode).on('click', function() {
        if (!key == '' && !keyboardToggle) {
            for (let i = 0; i < notesArrayKeys.length; i++) {
                for (let j = 0; j < notesArrayKeys[i].length; j++) {
                    notesArrayKeys[i][j].innerHTML = '';
                }
            }
            keyboardFunction('aeolian');
        }
    })

    $(locrianMode).on('click', function() {
        if (!key == '' && !keyboardToggle) {
            for (let i = 0; i < notesArrayKeys.length; i++) {
                for (let j = 0; j < notesArrayKeys[i].length; j++) {
                    notesArrayKeys[i][j].innerHTML = '';
                }
            }
            keyboardFunction('locrian');
        }
    })

})

export { notesArrayKeys, keyboardFunction, currentScaleKeys };