
import { key } from './buttons.js';
import { fretboardToggle, modifyGlobalScale, globalScale, gridContainer, fretboardDropdown } from './dropdowns.js';
import { noteStringArray, noteArray, I, ii, II, iii, III, PIV, tritone, PV, vi, VI, vii, VII, Note } from './intervals.js';
import { getEnharmonicKey } from './enharmonicKey.js';

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

let newElements = [];
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

    if (!$(event.target).hasClass('x')) {

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


        /* #region  element declaration and creation */
        let infoDiv = document.createElement('div');
        infoDiv.setAttribute('id', 'info-div');

        $(infoDiv).appendTo(fretboardContainer);

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

        let intervalKey = note;
        let currentChordArray;
        let testIndex = noteStringArray.findIndex(element => element == intervalKey);
        if (testIndex == -1 && !(intervalKey == 'C#' || intervalKey == 'F#')) {
            let enharmonicKey = getEnharmonicKey(intervalKey);
            switch(globalScale) {

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
            switch(globalScale) {

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
    if (window.location.pathname == '/chord-finder/' || window.location.pathname == '/') {

        $('p.Ab').hover(function () {
            onNoteHover('Ab');
        }, function () {
            offNoteHover('Ab');
        });

        $('p.A').hover(function () {
            onNoteHover('A');
        }, function () {
            offNoteHover('A');
        })

        $('p.Bb').hover(function () {
            onNoteHover('Bb');
        }, function () {
            offNoteHover('Bb');
        })

        $('p.B').hover(function () {
            onNoteHover('B');
        }, function () {
            offNoteHover('B');
        })

        $('p.C').hover(function () {
            onNoteHover('C');
        }, function () {
            offNoteHover('C');
        })

        $('p.Db').hover(function () {
            onNoteHover('Db');
        }, function () {
            offNoteHover('Db');
        })

        $('p.D').hover(function () {
            onNoteHover('D');
        }, function () {
            offNoteHover('D');
        })

        $('p.Eb').hover(function () {
            onNoteHover('Eb');
        }, function () {
            offNoteHover('Eb');
        })

        $('p.E').hover(function () {
            onNoteHover('E');
        }, function () {
            offNoteHover('E');
        })

        $('p.F').hover(function () {
            onNoteHover('F');
        }, function () {
            offNoteHover('F');
        })

        $('p.Gb').hover(function () {
            onNoteHover('Gb');
        }, function () {
            offNoteHover('Gb');
        })

        $('p.G').hover(function () {
            onNoteHover('G');
        }, function () {
            offNoteHover('G');
        })
    }
    /* #endregion */

});

export { notesArrayFrets, fretboardFunction, root, AbNote, ANote, BbNote, BNote, CNote, DbNote, DNote, EbNote, ENote, FNote, GbNote, GNote, onNoteHover, offNoteHover };