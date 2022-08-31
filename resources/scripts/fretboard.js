
import { key } from './buttons.js';
import { fretboardToggle, modifyGlobalScale, gridContainer, fretboardDropdown } from './dropdowns.js';

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

let fretboardContainer = document.getElementById('fretboard-container');

let root = '';
/* #endregion */

function fretboardFunction(scale) {
    modifyGlobalScale(scale);
    let xArray = [];

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
                for (let j = 0; j < DNote.length; j++) {
                    DNote[j].innerHTML = 'Ebb';
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

    for (let i = 0; i < notesArrayFrets.length; i++) {
        for (let j = 0; j < notesArrayFrets[i].length; j++) {
            $(notesArrayFrets[i][j]).removeClass('x').addClass('note');
            notesArrayFrets[i][j].style = null;
            if (notesArrayFrets[i][j].innerText !== '') {
                $(notesArrayFrets[i][j]).addClass('displayed-notes');
            } else {
                $(notesArrayFrets[i][j]).removeClass('displayed-notes');
            }

            if (notesArrayFrets[i][j].innerText !== '' && $(notesArrayFrets[i][j]).hasClass('open')) {

            } else if ($(notesArrayFrets[i][j]).hasClass('open') && notesArrayFrets[i][j].innerText === '') {

                xArray.push(notesArrayFrets[i][j]);
                for (let p = 0; p < xArray.length; p++) {
                    $(xArray[p]).addClass('x').removeClass('note');
                    xArray[p].style.width = '2rem';
                    xArray[p].style.height = '1rem';
                    xArray[p].style.backgroundImage = 'url("./resources/images/solid-line-x.png")';
                    xArray[p].style.backgroundSize = '2rem';
                    xArray[p].style.backgroundPosition = 'center';
                }
                $('.x').css({
                    backgroundImage: 'url("./resources/images/solid-line-x.png")',
                    backgroundSize: '2rem',
                    backgroundPosition: 'center',
                    width: '2rem'
                });
                console.log(xArray);
            }
        }

        $(notesArrayFrets[i]).removeClass('root').addClass('note');
        root = key.notes[0].concat('Note');
        switch (root) {
            case 'C#Note':
                root = 'DbNote';
                break;
            case 'F#Note':
                root = 'GbNote';
                break;
        };
        root = eval(root);
        $(root).removeClass('note').addClass('root');

        for (let p = 0; p < xArray.length; p++) {
            $(xArray[p]).addClass('x').removeClass('note');
        }
    }
};

function onNoteHover() {

    let infoDiv = document.createElement('div');
    infoDiv.setAttribute('id', 'info-div');

    $(infoDiv).appendTo(fretboardContainer);

}

function offNoteHover() {

    let infoDiv = document.getElementById('info-div');

    $(infoDiv).remove();

}


$(function () {

    /* #region  fretboard function buttons */
    $("button[class~='major-scale']").on('click', function () {
        if (!key == '' && !fretboardToggle) {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('major');
        }
    });

    $("button[class~='natural-minor']").on('click', function () {
        if (!key == '' && !fretboardToggle) {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('naturalMinor');
        }
    })

    $("button[class~='melodic-minor']").on('click', function () {
        if (!key == '' && !fretboardToggle) {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('melodicMinor');
        }
    })

    $("button[class~='harmonic-minor']").on('click', function () {
        if (!key == '' && !fretboardToggle) {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('harmonicMinor');
        }
    })

    $("button[class~='minor-pentatonic']").on('click', function () {
        if (!key == '' && !fretboardToggle) {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('minorPentatonic');
        }
    })

    $("button[class~='major-pentatonic']").on('click', function () {
        if (!key == '' && !fretboardToggle) {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('majorPentatonic');
        }
    })

    $("button[class~='blues-scale']").on('click', function () {
        if (!key == '' && !fretboardToggle) {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('blues');
        }
    })

    $("button[class~='dorian']").on('click', function () {
        if (!key == '' && !fretboardToggle) {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('dorian');
        }
    })

    $("button[class~='phyrigian']").on('click', function () {
        if (!key == '' && !fretboardToggle) {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('phyrigian');
        }
    })

    $("button[class~='lydian']").on('click', function () {
        if (!key == '' && !fretboardToggle) {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('lydian');
        }
    })

    $("button[class~='mixolydian']").on('click', function () {
        if (!key == '' && !fretboardToggle) {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('mixolydian');
        }
    })

    $("button[class~='aeolian']").on('click', function () {
        if (!key == '' && !fretboardToggle) {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('aeolian');
        }
    })

    $("button[class~='locrian']").on('click', function () {
        if (!key == '' && !fretboardToggle) {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            fretboardFunction('locrian');
        }
    })
    /* #endregion */


    /* #region  hover functions */
    $('p.Ab').hover(function () {
        onNoteHover($('p.Ab'));
    }, function () {
        offNoteHover('p.Ab');
    });

    $('p.A').hover(function () {
        onNoteHover($('p.A'));
    }, function () {
        offNoteHover('p.A');
    })

    $('p.Bb').hover(function () {
        onNoteHover($('p.Bb'));
    }, function () {
        offNoteHover('p.Bb');
    })

    $('p.B').hover(function () {
        onNoteHover($('p.B'));
    }, function () {
        offNoteHover('p.B');
    })

    $('p.C').hover(function () {
        onNoteHover($('p.C'));
    }, function () {
        offNoteHover('p.C');
    })

    $('p.Db').hover(function () {
        onNoteHover($('p.Db'));
    }, function () {
        offNoteHover('p.Db');
    })

    $('p.D').hover(function () {
        onNoteHover($('p.D'));
    }, function () {
        offNoteHover('p.D');
    })

    $('p.Eb').hover(function () {
        onNoteHover($('p.Eb'));
    }, function () {
        offNoteHover('p.Eb');
    })

    $('p.E').hover(function () {
        onNoteHover($('p.E'));
    }, function () {
        offNoteHover('p.E');
    })

    $('p.F').hover(function () {
        onNoteHover($('p.F'));
    }, function () {
        offNoteHover('p.F');
    })

    $('p.Gb').hover(function () {
        onNoteHover($('p.Gb'));
    }, function () {
        offNoteHover('p.Gb');
    })

    $('p.G').hover(function () {
        onNoteHover($('p.G'));
    }, function () {
        offNoteHover('p.G');
    })
    /* #endregion */

});

export { notesArrayFrets, fretboardFunction, root, AbNote, ANote, BbNote, BNote, CNote, DbNote, DNote, EbNote, ENote, FNote, GbNote, GNote };