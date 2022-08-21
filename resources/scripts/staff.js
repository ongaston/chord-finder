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
let notesArrayStaff = [ANoteStaff, BNoteStaff, CNoteStaff, DNoteStaff, ENoteStaff, FNoteStaff, GNoteStaff];


let root = '';
/* #endregion */

function staffFunction (scale) {
    modifyGlobalScale(scale);
    for (let i = 0; i < key[scale].length; i++) {
        switch (key[scale][i]) {
            case 'Ab':
                for (let j = 0; j < ANoteStaff.length; j++) {
                    $(ANoteStaff[j]).removeClass('sharp').removeClass('natural').addClass('flat');
                };
                break;
            case 'A':
                for (let j = 0; j < ANoteStaff.length; j++) {
                    $(ANoteStaff[j]).removeClass('sharp').removeClass('flat').addClass('natural');
                };
                break;
            case 'A#':
                for (let j = 0; j < ANoteStaff.length; j++) {
                    $(ANoteStaff[j]).removeClass('natural').removeClass('flat').addClass('sharp');
                };
                break;
            case 'Bbb': 
                for (let j = 0; j < ANoteStaff.length; j++) {
                    ANoteStaff[j].innerHTML = 'Bbb';
                };
                break;
            case 'Bb':
                for (let j = 0; j < BNoteStaff.length; j++) {
                    $(BNoteStaff[j]).removeClass('sharp').removeClass('natural').addClass('flat');
                };
                break;
            case 'B':
                for (let j = 0; j < BNoteStaff.length; j++) {
                    $(BNoteStaff[j]).removeClass('sharp').removeClass('flat').addClass('natural');
                };
                break;
            case 'B#':
                for (let j = 0; j < BNoteStaff.length; j++) {
                    $(BNoteStaff[j]).removeClass('natural').removeClass('flat').addClass('sharp');
                };
                break;
            case 'Cb':
                for (let j = 0; j < CNoteStaff.length; j++) {
                    $(CNoteStaff[j]).removeClass('sharp').removeClass('natural').addClass('flat');
                };
                break;
            case 'C':
                for (let j = 0; j < CNoteStaff.length; j++) {
                    $(CNoteStaff[j]).removeClass('sharp').removeClass('flat').addClass('natural');
                };
                break;
            case 'C#': 
                for (let j = 0; j < CNoteStaff.length; j++) {
                    $(CNoteStaff[j]).removeClass('natural').removeClass('flat').addClass('sharp');
                };
                break;
            case 'Dbb':
                for (let j = 0; j < CNoteStaff.length; j++) {
                    CNoteStaff[j].innerHTML = 'Dbb';
                };
                break;
            case 'Db':
                for (let j = 0; j < DNoteStaff.length; j++) {
                    $(DNoteStaff[j]).removeClass('sharp').removeClass('natural').addClass('flat');
                };
                break;
            case 'D':
                for (let j = 0; j < DNoteStaff.length; j++) {
                    $(DNoteStaff[j]).removeClass('sharp').removeClass('flat').addClass('natural');
                };
                break;
            case 'D#':
                for (let j = 0; j < DNoteStaff.length; j++) {
                    $(DNoteStaff[j]).removeClass('natural').removeClass('flat').addClass('sharp');
                };
                break;
            case 'Ebb':
                for (let j = 0; j < DNoteStaff.length; j++) {
                    DNoteStaff[j].innerHTML = 'Ebb';
                };
                break;
            case 'Eb':
                for (let j = 0; j < ENoteStaff.length; j++) {
                    $(ENoteStaff[j]).removeClass('sharp').removeClass('natural').addClass('flat');
                };
                break;
            case 'E':
                for (let j = 0; j < ENoteStaff.length; j++) {
                    $(ENoteStaff[j]).removeClass('sharp').removeClass('flat').addClass('natural');
                };
                break;
            case 'E#':
                for (let j = 0; j < ENoteStaff.length; j++) {
                    $(ENoteStaff[j]).removeClass('natural').removeClass('flat').addClass('sharp');
                };
                break;
            case 'Fb':
                for (let j = 0; j < ENoteStaff.length; j++) {
                    $(FNoteStaff[j]).removeClass('sharp').removeClass('natural').addClass('flat');
                };
                break;
            case 'F':
                for (let j = 0; j < FNoteStaff.length; j++) {
                    $(FNoteStaff[j]).removeClass('sharp').removeClass('flat').addClass('natural');
                };
                break;
            case 'F#':
                for (let j = 0; j < FNoteStaff.length; j++) {
                    $(FNoteStaff[j]).removeClass('natural').removeClass('flat').addClass('sharp');
                };
                break;
            case 'Gb':
                for (let j = 0; j < GNoteStaff.length; j++) {
                    $(GNoteStaff[j]).removeClass('sharp').removeClass('natural').addClass('flat');
                };
                break;
            case 'G':
                for (let j = 0; j < GNoteStaff.length; j++) {
                    $(GNoteStaff[j]).removeClass('sharp').removeClass('flat').addClass('natural');
                };
                break;
            case 'G#':
                for (let j = 0; j < GNoteStaff.length; j++) {
                    $(GNoteStaff[j]).removeClass('natural').removeClass('flat').addClass('sharp');
                };
                break;
        }
    }
    for (let i = 0; i < notesArrayStaff.length; i++) {
        for (let j = 0; j < notesArrayStaff[i].length; j++) {
            if (notesArrayStaff[i][j].innerText !== '') {
                $(notesArrayStaff[i][j]).addClass('displayed-notes');
            } else {
                $(notesArrayStaff[i]).removeClass('displayed-notes');
            }
        }
    }
    console.log(key.notes[0]);
    switch(key.notes[0]) {
        case 'Db':
        case 'D':
            $(ENoteStaff[1]).removeClass('displayed-note natural sharp flat');
            $(FNoteStaff[1]).removeClass('displayed-note natural sharp flat');
            $(GNoteStaff[1]).removeClass('displayed-note natural sharp flat');
            $(ANoteStaff[1]).removeClass('displayed-note natural sharp flat');
            $(BNoteStaff[1]).removeClass('displayed-note natural sharp flat');
            $(CNoteStaff[0]).removeClass('displayed-note natural sharp flat');
            break;
        case 'Eb':
        case 'E':
            $(DNoteStaff[0]).removeClass('displayed-note natural sharp flat');
            $(FNoteStaff[1]).removeClass('displayed-note natural sharp flat');
            $(GNoteStaff[1]).removeClass('displayed-note natural sharp flat');
            $(ANoteStaff[1]).removeClass('displayed-note natural sharp flat');
            $(BNoteStaff[1]).removeClass('displayed-note natural sharp flat');
            $(CNoteStaff[0]).removeClass('displayed-note natural sharp flat');
            break;
        case 'F':
        case 'F#':
            $(DNoteStaff[0]).removeClass('displayed-note natural sharp flat');
            $(ENoteStaff[0]).removeClass('displayed-note natural sharp flat');
            $(GNoteStaff[1]).removeClass('displayed-note natural sharp flat');
            $(ANoteStaff[1]).removeClass('displayed-note natural sharp flat');
            $(BNoteStaff[1]).removeClass('displayed-note natural sharp flat');
            $(CNoteStaff[0]).removeClass('displayed-note natural sharp flat');
            break;
        case 'Gb':
        case 'G':
            $(DNoteStaff[0]).removeClass('displayed-note natural sharp flat');
            $(ENoteStaff[0]).removeClass('displayed-note natural sharp flat');
            $(FNoteStaff[0]).removeClass('displayed-note natural sharp flat');
            $(ANoteStaff[1]).removeClass('displayed-note natural sharp flat');
            $(BNoteStaff[1]).removeClass('displayed-note natural sharp flat');
            $(CNoteStaff[0]).removeClass('displayed-note natural sharp flat');
            break;
        case 'Ab':
        case 'A':
            $(DNoteStaff[0]).removeClass('displayed-note natural sharp flat');
            $(ENoteStaff[0]).removeClass('displayed-note natural sharp flat');
            $(FNoteStaff[0]).removeClass('displayed-note natural sharp flat');
            $(GNoteStaff[0]).removeClass('displayed-note natural sharp flat');
            $(BNoteStaff[1]).removeClass('displayed-note natural sharp flat');
            $(CNoteStaff[0]).removeClass('displayed-note natural sharp flat');
            break;
        case 'Bb':
        case 'B':
            $(DNoteStaff[0]).removeClass('displayed-note natural sharp flat');
            $(ENoteStaff[0]).removeClass('displayed-note natural sharp flat');
            $(FNoteStaff[0]).removeClass('displayed-note natural sharp flat');
            $(GNoteStaff[0]).removeClass('displayed-note natural sharp flat');
            $(ANoteStaff[0]).removeClass('displayed-note natural sharp flat');
            $(CNoteStaff[0]).removeClass('displayed-note natural sharp flat');
            break;
        case 'C':
        case 'C#':
            $(DNoteStaff[1]).removeClass('displayed-note natural sharp flat');
            $(ENoteStaff[1]).removeClass('displayed-note natural sharp flat');
            $(FNoteStaff[1]).removeClass('displayed-note natural sharp flat');
            $(GNoteStaff[1]).removeClass('displayed-note natural sharp flat');
            $(ANoteStaff[1]).removeClass('displayed-note natural sharp flat');
            $(BNoteStaff[1]).removeClass('displayed-note natural sharp flat');
            break;
    }
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

export { notesArrayStaff, staffFunction };