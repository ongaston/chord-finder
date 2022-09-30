import { key } from './buttons.js';
import { keyboardToggle, modifyGlobalScale, globalScale } from './dropdowns.js';
import { getEnharmonicKey } from './enharmonicKey.js';
import { noteStringArray } from './intervals.js';

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

let keyboardContainer = document.getElementById('keyboard-container');

let root = '';
/* #endregion */

function keyboardFunction(scale) {
    modifyGlobalScale(scale);
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
                for (let j = 0; j < DNoteKeys.length; j++) {
                    DNoteKeys[j].innerHTML = 'Ebb';
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
    for (let i = 0; i < notesArrayKeys.length; i++) {
        for (let j = 0; j < notesArrayKeys[i].length; j++) {
            if (notesArrayKeys[i][j].innerText !== '') {
                $(notesArrayKeys[i][j]).addClass('displayed-notes');
            } else {
                $(notesArrayKeys[i]).removeClass('displayed-notes');
            }
        }

        $(notesArrayKeys[i]).removeClass('root').addClass('note');
        root = key.notes[0].concat('NoteKeys');
        switch (root) {
            case 'C#NoteKeys':
                root = 'DbNoteKeys';
                break;
            case 'F#NoteKeys':
                root = 'GbNoteKeys';
                break;
        };
        root = eval(root);
        $(root).removeClass('note').addClass('root');
    }
}

function onNoteHover() {

    let intervalValue;
    let note = event.target.innerHTML;

    function findInterval(index) {
        switch (index) {
            case 0:
                intervalValue = 'I';
                break;
            case 1:
                intervalValue = 'ii';
                break;
            case 2:
                intervalValue = 'II';
                break;
            case 3:
                intervalValue = 'iii';
                break;
            case 4:
                intervalValue = 'III';
                break;
            case 5:
                intervalValue = 'PIV';
                break;
            case 6:
                intervalValue = 'tritone';
                break;
            case 7:
                intervalValue = 'PV';
                break;
            case 8:
                intervalValue = 'vi';
                break;
            case 9:
                intervalValue = 'VI';
                break;
            case 10:
                intervalValue = 'vii';
                break;
            case 11:
                intervalValue = 'VII';
                break;
        }
    }


    /* #region  element declaration/creation */
    let infoDiv = document.createElement('div');
    infoDiv.setAttribute('id', 'info-div');

    $(infoDiv).appendTo(keyboardContainer);

    let intervalContainer = document.createElement('div');
    intervalContainer.setAttribute('class', 'interval-container-outer');

    $(intervalContainer).appendTo(infoDiv);

    let intervalTitle = document.createElement('p');
    intervalTitle.setAttribute('class', 'interval-title');
    intervalTitle.setAttribute('id', 'interval-title');
    intervalTitle.innerHTML = 'Interval: ';

    $(intervalTitle).appendTo(intervalContainer);

    let interval = document.createElement('p');
    interval.setAttribute('class', 'interval-title');
    interval.setAttribute('id', 'interval');
    interval.style.paddingLeft = '0.5rem';

    $(interval).appendTo(intervalContainer);

    let intervalChordContainer = document.createElement('div');
    intervalChordContainer.setAttribute('class', 'interval-container-outer');

    $(intervalChordContainer).appendTo(infoDiv);

    let currentChordContainer = document.createElement('div');
    currentChordContainer.setAttribute('class', 'interval-container-inner');

    $(currentChordContainer).appendTo(intervalChordContainer);

    let currentChordTitle = document.createElement('p');
    currentChordTitle.setAttribute('class', 'interval-title');
    currentChordTitle.innerHTML = 'Chord in current scale: ';

    $(currentChordTitle).appendTo(currentChordContainer);

    let chordNote1 = document.createElement('p');
    chordNote1.setAttribute('class', 'interval-title chord-note');

    $(chordNote1).appendTo(currentChordContainer);

    let chordNote2 = document.createElement('p');
    chordNote2.setAttribute('class', 'interval-title chord-note');

    $(chordNote2).appendTo(currentChordContainer);

    let chordNote3 = document.createElement('p');
    chordNote3.setAttribute('class', 'interval-title chord-note');

    $(chordNote3).appendTo(currentChordContainer);

    let intervalIndex = key.notes.findIndex(element => element == note);
    findInterval(intervalIndex);
    /* #endregion */

    interval.innerHTML = intervalValue;

    let currentChordArray;
    let testIndex = noteStringArray.findIndex(element => element == note);
    if (testIndex == -1 && !(note == 'C#' || note == 'F#')) {
        let enharmonicKey = getEnharmonicKey(note);
        switch (globalScale) {

            case 'major':
                switch (intervalValue) {
                    case 'I':
                    case 'II':
                    case 'III':
                    case 'PIV':
                    case 'PV':
                    case 'VI':
                    case 'VII':
                        currentChordArray = enharmonicKey.generateMajorTriad(0);
                        break;
                    case 'ii':
                    case 'iii':
                    case 'tritone':
                    case 'vi':
                        currentChordArray = enharmonicKey.generateMinorTriad(intervalIndex);
                        break;
                    case 'vii':
                        currentChordArray = enharmonicKey.generateDiminishedTriad(intervalIndex);
                        break;
                };
                break;
            case 'natural-minor':
                switch (intervalValue) {
                    case 'I':
                    case 'II':
                    case 'III':
                    case 'PIV':
                    case 'PV':
                    case 'VI':
                    case 'VII':
                        currentChordArray = enharmonicKey.generateMajorTriad(intervalIndex);
                        break;
                    case 'iii':
                    case 'tritone':
                    case 'vi':
                    case 'vii':
                        currentChordArray = enharmonicKey.generateMinorTriad(intervalIndex);
                        break;
                    case 'ii':
                        currentChordArray = enharmonicKey.generateDiminishedTriad(intervalIndex);
                        break;
                };
                break;
            case 'melodic-minor':
                switch (intervalValue) {
                    case 'I':
                    case 'II':
                    case 'III':
                    case 'PIV':
                    case 'PV':
                    case 'VI':
                    case 'VII':
                        currentChordArray = enharmonicKey.generateMajorTriad(intervalIndex);
                        break;
                    case 'iii':
                    case 'tritone':
                    case 'ii':
                        currentChordArray = enharmonicKey.generateMinorTriad(intervalIndex);
                        break;
                    case 'vi':
                    case 'vii':
                        currentChordArray = enharmonicKey.generateDiminishedTriad(intervalIndex);
                        break;
                };
                break;
            case 'harmonic-minor':
                switch (intervalValue) {
                    case 'I':
                    case 'II':
                    case 'III':
                    case 'PIV':
                    case 'PV':
                    case 'VI':
                    case 'VII':
                        currentChordArray = enharmonicKey.generateMajorTriad(intervalIndex);
                        break;
                    case 'iii':
                    case 'tritone':
                    case 'vi':
                    case 'vii':
                        currentChordArray = enharmonicKey.generateMinorTriad(intervalIndex);
                        break;
                    case 'ii':
                        currentChordArray = enharmonicKey.generateDiminishedTriad(intervalIndex);
                        break;
                };
                break;
            default:
                switch (intervalValue) {
                    case 'I':
                    case 'II':
                    case 'III':
                    case 'PIV':
                    case 'PV':
                    case 'VI':
                    case 'VII':
                        currentChordArray = enharmonicKey.generateMajorTriad(intervalIndex);
                        break;
                    case 'ii':
                    case 'iii':
                    case 'tritone':
                    case 'vi':
                    case 'vii':
                        currentChordArray = enharmonicKey.generateMinorTriad(intervalIndex);
                        break;
                };
                break;
        }
    }

    else {
        switch (globalScale) {

            case 'major':
                switch (intervalValue) {
                    case 'I':
                    case 'II':
                    case 'III':
                    case 'PIV':
                    case 'PV':
                    case 'VI':
                    case 'VII':
                        currentChordArray = key.generateMajorTriad(intervalIndex);
                        break;
                    case 'ii':
                    case 'iii':
                    case 'tritone':
                    case 'vi':
                        currentChordArray = key.generateMinorTriad(intervalIndex);
                        break;
                    case 'vii':
                        currentChordArray = key.generateDiminishedTriad(intervalIndex);
                        break;
                };
                break;
            case 'natural-minor':
                switch (intervalValue) {
                    case 'I':
                    case 'II':
                    case 'III':
                    case 'PIV':
                    case 'PV':
                    case 'VI':
                    case 'VII':
                        currentChordArray = key.generateMajorTriad(intervalIndex);
                        break;
                    case 'iii':
                    case 'tritone':
                    case 'vi':
                    case 'vii':
                        currentChordArray = key.generateMinorTriad(intervalIndex);
                        break;
                    case 'ii':
                        currentChordArray = key.generateDiminishedTriad(intervalIndex);
                        break;
                };
                break;
            case 'melodic-minor':
                switch (intervalValue) {
                    case 'I':
                    case 'II':
                    case 'III':
                    case 'PIV':
                    case 'PV':
                    case 'VI':
                    case 'VII':
                        currentChordArray = key.generateMajorTriad(intervalIndex);
                        break;
                    case 'iii':
                    case 'tritone':
                    case 'ii':
                        currentChordArray = key.generateMinorTriad(intervalIndex);
                        break;
                    case 'vi':
                    case 'vii':
                        currentChordArray = key.generateDiminishedTriad(intervalIndex);
                        break;
                };
                break;
            case 'harmonic-minor':
                switch (intervalValue) {
                    case 'I':
                    case 'II':
                    case 'III':
                    case 'PIV':
                    case 'PV':
                    case 'VI':
                    case 'VII':
                        currentChordArray = key.generateMajorTriad(intervalIndex);
                        break;
                    case 'iii':
                    case 'tritone':
                    case 'vi':
                    case 'vii':
                        currentChordArray = key.generateMinorTriad(intervalIndex);
                        break;
                    case 'ii':
                        currentChordArray = key.generateDiminishedTriad(intervalIndex);
                        break;
                };
                break;
            default:
                switch (intervalValue) {
                    case 'I':
                    case 'II':
                    case 'III':
                    case 'PIV':
                    case 'PV':
                    case 'VI':
                    case 'VII':
                        currentChordArray = key.generateMajorTriad(intervalIndex);
                        break;
                    case 'ii':
                    case 'iii':
                    case 'tritone':
                    case 'vi':
                    case 'vii':
                        currentChordArray = key.generateMinorTriad(intervalIndex);
                        break;
                };
                break;
        }
    }
    chordNote1.innerHTML = currentChordArray[0];
    chordNote2.innerHTML = currentChordArray[1];
    chordNote3.innerHTML = currentChordArray[2];

}

function offNoteHover() {

    let infoDiv = document.getElementById('info-div');

    $(infoDiv).remove();

}

$(function () {

    /* #region  button functions */
    $("button[class~='major-scale']").on('click', function () {
        if (!key == '' && !keyboardToggle) {
            for (let i = 0; i < notesArrayKeys.length; i++) {
                for (let j = 0; j < notesArrayKeys[i].length; j++) {
                    notesArrayKeys[i][j].innerHTML = '';
                }
            }
            keyboardFunction('major');
        }
    });

    $("button[class~='natural-minor']").on('click', function () {
        if (!key == '' && !keyboardToggle) {
            for (let i = 0; i < notesArrayKeys.length; i++) {
                for (let j = 0; j < notesArrayKeys[i].length; j++) {
                    notesArrayKeys[i][j].innerHTML = '';
                }
            }
            keyboardFunction('naturalMinor');
        }
    })

    $("button[class~='melodic-minor']").on('click', function () {
        if (!key == '' && !keyboardToggle) {
            for (let i = 0; i < notesArrayKeys.length; i++) {
                for (let j = 0; j < notesArrayKeys[i].length; j++) {
                    notesArrayKeys[i][j].innerHTML = '';
                }
            }
            keyboardFunction('melodicMinor');
        }
    })

    $("button[class~='harmonic-minor']").on('click', function () {
        if (!key == '' && !keyboardToggle) {
            for (let i = 0; i < notesArrayKeys.length; i++) {
                for (let j = 0; j < notesArrayKeys[i].length; j++) {
                    notesArrayKeys[i][j].innerHTML = '';
                }
            }
            keyboardFunction('harmonicMinor');
        }
    })

    $("button[class~='minor-pentatonic']").on('click', function () {
        if (!key == '' && !keyboardToggle) {
            for (let i = 0; i < notesArrayKeys.length; i++) {
                for (let j = 0; j < notesArrayKeys[i].length; j++) {
                    notesArrayKeys[i][j].innerHTML = '';
                }
            }
            keyboardFunction('minorPentatonic');
        }
    })

    $("button[class~='major-pentatonic']").on('click', function () {
        if (!key == '' && !keyboardToggle) {
            for (let i = 0; i < notesArrayKeys.length; i++) {
                for (let j = 0; j < notesArrayKeys[i].length; j++) {
                    notesArrayKeys[i][j].innerHTML = '';
                }
            }
            keyboardFunction('majorPentatonic');
        }
    })

    $("button[class~='blues-scale']").on('click', function () {
        if (!key == '' && !keyboardToggle) {
            for (let i = 0; i < notesArrayKeys.length; i++) {
                for (let j = 0; j < notesArrayKeys[i].length; j++) {
                    notesArrayKeys[i][j].innerHTML = '';
                }
            }
            keyboardFunction('blues');
        }
    })

    $("button[class~='dorian']").on('click', function () {
        if (!key == '' && !keyboardToggle) {
            for (let i = 0; i < notesArrayKeys.length; i++) {
                for (let j = 0; j < notesArrayKeys[i].length; j++) {
                    notesArrayKeys[i][j].innerHTML = '';
                }
            }
            keyboardFunction('dorian');
        }
    })

    $("button[class~='phyrigian']").on('click', function () {
        if (!key == '' && !keyboardToggle) {
            for (let i = 0; i < notesArrayKeys.length; i++) {
                for (let j = 0; j < notesArrayKeys[i].length; j++) {
                    notesArrayKeys[i][j].innerHTML = '';
                }
            }
            keyboardFunction('phyrigian');
        }
    })

    $("button[class~='lydian']").on('click', function () {
        if (!key == '' && !keyboardToggle) {
            for (let i = 0; i < notesArrayKeys.length; i++) {
                for (let j = 0; j < notesArrayKeys[i].length; j++) {
                    notesArrayKeys[i][j].innerHTML = '';
                }
            }
            keyboardFunction('lydian');
        }
    })

    $("button[class~='mixolydian']").on('click', function () {
        if (!key == '' && !keyboardToggle) {
            for (let i = 0; i < notesArrayKeys.length; i++) {
                for (let j = 0; j < notesArrayKeys[i].length; j++) {
                    notesArrayKeys[i][j].innerHTML = '';
                }
            }
            keyboardFunction('mixolydian');
        }
    })

    $("button[class~='aeolian']").on('click', function () {
        if (!key == '' && !keyboardToggle) {
            for (let i = 0; i < notesArrayKeys.length; i++) {
                for (let j = 0; j < notesArrayKeys[i].length; j++) {
                    notesArrayKeys[i][j].innerHTML = '';
                }
            }
            keyboardFunction('aeolian');
        }
    })

    $("button[class~='locrian']").on('click', function () {
        if (!key == '' && !keyboardToggle) {
            for (let i = 0; i < notesArrayKeys.length; i++) {
                for (let j = 0; j < notesArrayKeys[i].length; j++) {
                    notesArrayKeys[i][j].innerHTML = '';
                }
            }
            keyboardFunction('locrian');
        }
    })
    /* #endregion */

   /* #region  hover functions */
   if (window.location.pathname == '/index.html') {
        $('p.Abkey').hover(function () {
            onNoteHover('Abkey');
        }, function () {
            offNoteHover('Abkey');
        });

        $('p.Akey').hover(function () {
            onNoteHover('Akey');
        }, function () {
            offNoteHover('Akey');
        })

        $('p.Bbkey').hover(function () {
            onNoteHover('Bbkey');
        }, function () {
            offNoteHover('Bbkey');
        })

        $('p.Bkey').hover(function () {
            onNoteHover('Bkey');
        }, function () {
            offNoteHover('Bkey');
        })

        $('p.Ckey').hover(function () {
            onNoteHover('Ckey');
        }, function () {
            offNoteHover('Ckey');
        })

        $('p.Dbkey').hover(function () {
            onNoteHover('Dbkey');
        }, function () {
            offNoteHover('Dbkey');
        })

        $('p.Dkey').hover(function () {
            onNoteHover('Dkey');
        }, function () {
            offNoteHover('Dkey');
        })

        $('p.Ebkey').hover(function () {
            onNoteHover('Ebkey');
        }, function () {
            offNoteHover('Ebkey');
        })

        $('p.Ekey').hover(function () {
            onNoteHover('Ekey');
        }, function () {
            offNoteHover('Ekey');
        })

        $('p.Fkey').hover(function () {
            onNoteHover('Fkey');
        }, function () {
            offNoteHover('Fkey');
        })

        $('p.Gbkey').hover(function () {
            onNoteHover('Gbkey');
        }, function () {
            offNoteHover('Gbkey');
        })

        $('p.Gkey').hover(function () {
            onNoteHover('Gkey');
        }, function () {
            offNoteHover('Gkey');
        })
   }
/* #endregion */

})

export { notesArrayKeys, keyboardFunction, AbNoteKeys, ANoteKeys, BbNoteKeys, BNoteKeys, CNoteKeys, DNoteKeys, DbNoteKeys, EbNoteKeys, ENoteKeys, FNoteKeys, GNoteKeys, GbNoteKeys };