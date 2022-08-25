import { staffFunction, currentClef, clefFunction, line1, line2, line3, line4, line5, line6, line7, line8, line9, line10, line11, line12, line13, line14, Bsig, Esig, Asig, Dsig, Gsig, Csig, Fsig, notesArrayStaff, sigArray } from './staff.js';
import { AbNote, ANote, BbNote, BNote, CNote, DbNote, DNote, EbNote, ENote, FNote, GbNote, GNote, notesArrayFrets } from "./fretboard.js";
import { AbNoteKeys, ANoteKeys, BbNoteKeys, BNoteKeys, CNoteKeys, DbNoteKeys, DNoteKeys, EbNoteKeys, ENoteKeys, FNoteKeys, GbNoteKeys, GNoteKeys, notesArrayKeys } from './keyboard.js';
import { keyboardToggle, fretboardToggle, staffToggle } from './dropdowns.js';
import { assignStaff } from './inputstaff.js';


function inputSynch(note, toggle, hoverState) {
    assignStaff();
    let staffObj = '.' + note[0].toLowerCase().concat('Staff');
    let fretObj = eval(note.concat('Note'));
    let keyObj = eval(note.concat('NoteKeys'));
    //fretboard main
    if (!fretboardToggle) {
        if (hoverState == 'onHover') {
            /* #region  keyboard toggle in fretboard */
            //if keyboard is open and notes haven't been toggled
            if (!keyboardToggle && toggle) {
                //hover
                $(keyObj).addClass('show-note');
                for (let i = 0; i < keyObj.length; i++) {
                    keyObj[i].innerHTML = note;
                }
                //click to select
                $(fretObj).on('click', function () {
                    $(keyObj).removeClass('show-note').addClass('selected-note');
                })
                //remove click to select
            } else if (!keyboardToggle && !toggle) {

                $(fretObj).on('click', function () {
                    $(keyObj).removeClass('selected-note').addClass('show-note');
                })

            }
            /* #endregion */
            if (!staffToggle && toggle) {
                console.log(staffObj)
                $(staffObj).removeClass('empty').addClass('natural');
            }
        }
        //if function being called inside is offHover
        else if (hoverState == 'offHover') {

            /* #region  keyboard offhover in fretboard */
            if (!keyboardToggle && toggle) {
                //removes key display and note name
                $(keyObj).removeClass('show-note');
                for (let i = 0; i < keyObj.length; i++) {
                    keyObj[i].innerHTML = '';
                }

            }
            /* #endregion */

        }
    }

    //keyboard main
    if (!keyboardToggle) {
        if (hoverState == 'onHover') {
            /* #region  fretboard toggling in keyboard dropdown */
            //if fretboard is open and notes haven't been toggled
            if (!fretboardToggle && toggle) {
                //hover
                $(fretObj).addClass('show-note');
                for (let i = 0; i < fretObj.length; i++) {
                    fretObj[i].innerHTML = note;
                }
                //click to select
                $(keyObj).on('click', function () {
                    $(fretObj).removeClass('show-note').addClass('selected-note');
                })
                //remove click to select
            } else if (!fretboardToggle && !toggle) {

                $(keyObj).on('click', function () {
                    $(fretObj).removeClass('selected-note').addClass('show-note');
                })

            }
            /* #endregion */
        }
        //if function being called inside is offHover
        else if (hoverState == 'offHover') {

            /* #region  offhover fretboard toggling in keyboard dropdown */
            if (!fretboardToggle && toggle) {
                //removes key display and note name
                $(fretObj).removeClass('show-note');
                for (let i = 0; i < fretObj.length; i++) {
                    fretObj[i].innerHTML = '';
                }

            }
            /* #endregion */

        }
    }

}

export { inputSynch };