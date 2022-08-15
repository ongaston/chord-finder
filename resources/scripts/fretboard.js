import { noteArray, Ab, A, Bb, B, C, Csharp, Db, D, Eb, E, F, Fsharp, Gb, G, I, ii, II, iii, III, PIV, tritone, PV, vi, VI, vii, VII, Note, letterArray, addIntervals } from './intervals.js';
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



$(function () {
    


    $(majorScale).on('click', function () {
        if ((!majorToggle && !key == '') && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            for (let i = 0; i < key.major.length; i++) {
                switch (key.major[i]) {
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
            }
        }
    })

    $(naturalMinorScale).on('click', function() {
        if ((!naturalToggle && !key == '') && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            for (let i = 0; i < key.naturalMinor.length; i++) {
                switch (key.naturalMinor[i]) {
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
        }
    })

    $(melodicMinorScale).on('click', function() {
        if ((!melodicToggle && !key == '') && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            for (let i = 0; i < key.melodicMinor.length; i++) {
                switch (key.melodicMinor[i]) {
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
        }
    })

    $(harmonicMinorScale).on('click', function() {
        if ((!harmonicToggle && !key == '') && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            for (let i = 0; i < key.harmonicMinor.length; i++) {
                switch (key.harmonicMinor[i]) {
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
            }
        }
    })

    $(minorPentatonicScale).on('click', function() {
        if ((!minorPentatonicToggle && !key == '') && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            for (let i = 0; i < key.minorPentatonic.length; i++) {
                switch (key.minorPentatonic[i]) {
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
            }
        }
    })

    $(majorPentatonicScale).on('click', function () {
        if ((!toggle && !key == '') && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            for (let i = 0; i < key.majorPentatonic.length; i++) {
                switch (key.majorPentatonic[i]) {
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
            }
        }
    })

    $(bluesScales).on('click', function() {
        if ((!bluesToggle && !key == '') && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            for (let i = 0; i < key.blues.length; i++) {
                switch (key.blues[i]) {
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
            }
        }
    })

    $(dorianMode).on('click', function() {
        if ((!dorianToggle && !key == '') && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            for (let i = 0; i < key.dorian.length; i++) {
                switch (key.dorian[i]) {
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
            }
        }
    })

    $(phyrigianMode).on('click', function() {
        if ((!phyrigianToggle && !key == '') && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            for (let i = 0; i < key.phyrigian.length; i++) {
                switch (key.phyrigian[i]) {
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
            }
        }
    })

    $(lydianMode).on('click', function() {
        if ((!lydianToggle && !key == '') && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            for (let i = 0; i < key.lydian.length; i++) {
                switch (key.lydian[i]) {
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
            }
        }
    })

    $(mixolydianMode).on('click', function() {
        if ((!mixolydianToggle && !key == '') && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            for (let i = 0; i < key.mixolydian.length; i++) {
                switch (key.mixolydian[i]) {
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
            }
        }
    })

    $(aeolianMode).on('click', function() {
        if ((!aeolianToggle && !key == '') && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            for (let i = 0; i < key.aeolian.length; i++) {
                switch (key.aeolian[i]) {
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
            }
        }
    })

    $(locrianMode).on('click', function() {
        if ((!locrianToggle && !key == '') && $(gridContainer).val('width') !== '0') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                }
            }
            for (let i = 0; i < key.locrian.length; i++) {
                switch (key.locrian[i]) {
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
            }
        }
    })

})

export { notesArrayFrets };