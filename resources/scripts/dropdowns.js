
import { notesArrayFrets, fretboardFunction } from './fretboard.js';
import { key } from './buttons.js';
import { notesArrayKeys, keyboardFunction } from './keyboard.js';
import { inlineToggle, rotateToggle } from './utilities.js';
import { notesArrayStaff, staffFunction, sigArray } from './staff.js';
/* #region  Variables */
/* #region  chords */
let seventhContainerTitle = document.getElementById('seventh-container');
let seventhChordsContainer = document.getElementById('seventh-chords-container');

let sixthContainerTitle = document.getElementById('sixth-container');
let sixthChordsContainer = document.getElementById('sixth-chords-container');

let ninthContainerTitle = document.getElementById('ninth-container');
let ninthChordsContainer = document.getElementById('ninth-chords-container');

let susContainerTitle = document.getElementById('sus-container');
let susChordsContainer = document.getElementById('sus-chords-container');

let otherContainerTitle = document.getElementById('other-container');
let otherChordsContainer = document.getElementById('other-chords-container');
/* #endregion */

/* #region  scales */
let minorContainerTitle = document.getElementById('minor-container');
let minorChordsContainer = document.getElementById('minor-scale-container');

let pentatonicContainerTitle = document.getElementById('pentatonic-container');
let pentatonicChordsContainer = document.getElementById('pentatonic-scale-container');

let miscContainerTitle = document.getElementById('misc-container');
let miscChordsContainer = document.getElementById('misc-scale-container');
/* #endregion */

let modesContainerTitle = document.getElementById('mode-title');
let modeContainer = document.getElementById('modes-dropdown-container');
let bigContainer = document.getElementById('big-container');

let scalesContainerWidth = $(bigContainer).width();
scalesContainerWidth = Math.floor(scalesContainerWidth);
scalesContainerWidth = scalesContainerWidth - 32;
scalesContainerWidth = scalesContainerWidth.toString().concat('', 'px');
let bigContainerWidth = ($(bigContainer).width())
let scaleWidth = Math.floor(bigContainerWidth) - 32;

let chordContainer = document.getElementById('chord-container');

let modeWidth = scaleWidth / bigContainerWidth;
modeWidth = Math.floor(modeWidth * 100 + 64);
modeWidth = modeWidth.toString().concat('', 'px');

let globalScale = '';
function modifyGlobalScale(value) {
    globalScale = value;
}

/* #region  fret and key dropdowns */
let fretboardDropdown = document.getElementById('fretboard-dropdown');
let gridContainer = document.getElementById('grid-container');
let dropdownWidth = '233px';
let fretboardToggle = true;

let keyboardDropdown = document.getElementById('keyboard-dropdown');
let keyboardGrid = document.getElementById('keyboard-grid-container');
let keyboardWidth = '453px';
let keyboardToggle = true;

let staffDropdown = document.getElementById('staff-dropdown');
let staffGrid = document.getElementById('staff-grid-container');
let staffWidth = '632px';

let staffToggle = true;
let staffScaleButtons = document.getElementById('staff-scale-container');
let staffModeButtons = document.getElementById('staff-mode-container');
let staffScaleDropdown = document.getElementById('staff-scale-dropdown');
let staffModeDropdown = document.getElementById('staff-mode-dropdown');
let staffDropdownContainer = document.getElementById('staff-button-container');

let fretScaleButtons = document.getElementById('fret-scale-container');
let fretModeButtons = document.getElementById('fret-mode-container');
let fretScaleDropdown = document.getElementById('scale-fret-dropdown');
let fretModeDropdown = document.getElementById('mode-fret-dropdown');
let fretDropdownContainer = document.getElementById('fret-button-container');

let keyScaleButtons = document.getElementById('key-scale-container');
let keyModeButtons = document.getElementById('key-mode-container');
let keyScaleDropdown = document.getElementById('scale-key-dropdown');
let keyModeDropdown = document.getElementById('mode-key-dropdown');
let keyDropdownContainer = document.getElementById('key-button-container');
/* #endregion */

/* #endregion */


$(chordContainer).css('width', scalesContainerWidth);

$(function () {

    $(staffDropdown).on('click', function () {
        if (staffToggle) {
            staffToggle = false;
            $(staffDropdown).animate({
                width: staffWidth
            }, 400);
            $(staffGrid).animate({
                width: '632px'
            }, 300);
            $(staffGrid).animate({
                height: '175px',
                marginTop: '1rem'
            }, 400);
            rotateToggle($('#staff-dropdown > i'));
            $(staffDropdownContainer).delay(400).animate({
                minHeight: '3rem',
                maxHeight: '10rem',
                overflow: 'wrap',
            }, 400);
            if ((!key == '' && $(staffGrid).val('width') !== '0') && globalScale == '') {
                for (let i = 0; i < notesArrayStaff.length; i++) {
                    for (let j = 0; j < notesArrayStaff[i].length; j++) {
                        notesArrayStaff[i][j].innerHTML = '';
                    }
                }
                staffFunction('major');
            } else if (!key == '' && $(staffGrid).val('width') !== '0') {
                for (let i = 0; i < notesArrayStaff.length; i++) {
                    for (let j = 0; j < notesArrayStaff[i].length; j++) {
                        notesArrayStaff[i][j].innerHTML = '';
                    }
                }
                staffFunction(globalScale);
            }
        }
        else if (!staffToggle) {
            staffToggle = true;
            for (let i = 0; i < notesArrayStaff.length; i++) {
                    $(notesArrayStaff[i]).removeClass('displayed-notes natural sharp flat double-flat');
            }
            for (let i = 0; i < sigArray.length; i++) {
                $(sigArray[i]).removeClass('sharp-sig flat-sig');
            }
            if ($(keyScaleButtons).css('display') == 'block') {
                $(keyScaleButtons).slideToggle();
            }
            if ($(keyModeButtons).css('display') == 'block') {
                $(keyScaleButtons).slideToggle();
            }
            rotateToggle($('#staff-dropdown > i'));
            $(staffDropdownContainer).animate({
                minHeight: '0',
                maxHeight: '0',
                overflow: 'hidden',
            }, 400);
            $(staffGrid).animate({
                height: '0',
                marginTop: '0'
            })
            $(staffGrid).animate({
                width: '0'
            }, 400);
            $(staffDropdown).animate({
                width: '226px'
            }, 400);
        }
    })

    $(staffScaleDropdown).on('click', function () {
        rotateToggle($('#staff-scale-dropdown > i'));
        $(staffScaleButtons).slideToggle();
    })

    $(staffModeDropdown).on('click', function () {
        rotateToggle($('#staff-mode-dropdown > i'));
        $(staffModeButtons).slideToggle();
    })

    $(keyboardDropdown).on('click', function () {
        if (keyboardToggle) {
            keyboardToggle = false;
            $(keyboardDropdown).animate({
                width: keyboardWidth
            }, 400);
            $(keyboardGrid).animate({
                width: '453px'
            }, 300);
            $(keyboardGrid).animate({
                height: '148px',
                marginTop: '1rem'
            }, 400);
            rotateToggle($('#keyboard-dropdown > i'));
            $(keyDropdownContainer).delay(400).animate({
                minHeight: '3rem',
                maxHeight: '10rem',
                overflow: 'wrap',
            }, 400);
            if ((!key == '' && $(keyboardGrid).val('width') !== '0') && globalScale == '') {
                for (let i = 0; i < notesArrayKeys.length; i++) {
                    for (let j = 0; j < notesArrayKeys[i].length; j++) {
                        notesArrayKeys[i][j].innerHTML = '';
                    }
                }
                keyboardFunction('major');
            } else if (!key == '' && $(keyboardGrid).val('width') !== '0') {
                for (let i = 0; i < notesArrayKeys.length; i++) {
                    for (let j = 0; j < notesArrayKeys[i].length; j++) {
                        notesArrayKeys[i][j].innerHTML = '';
                    }
                }
                keyboardFunction(globalScale);
            }
        }
        else if (!keyboardToggle) {
            keyboardToggle = true;
            for (let i = 0; i < notesArrayKeys.length; i++) {
                for (let j = 0; j < notesArrayKeys[i].length; j++) {
                    notesArrayKeys[i][j].innerHTML = '';
                    $(notesArrayKeys[i][j]).removeClass('displayed-notes');
                }
            }
            if ($(keyScaleButtons).css('display') == 'block') {
                $(keyScaleButtons).slideToggle();
            }
            if ($(keyModeButtons).css('display') == 'block') {
                $(keyScaleButtons).slideToggle();
            }
            rotateToggle($('#keyboard-dropdown > i'));
            $(keyDropdownContainer).animate({
                minHeight: '0',
                maxHeight: '0',
                overflow: 'hidden',
            }, 400);
            $(keyboardGrid).animate({
                height: '0',
                marginTop: '0'
            })
            $(keyboardGrid).animate({
                width: '0'
            }, 400);
            $(keyboardDropdown).animate({
                width: '226px'
            }, 400);
        }
    })

    $(keyScaleDropdown).on('click', function () {
        rotateToggle($('#scale-key-dropdown > i'));
        $(keyScaleButtons).slideToggle();
    })

    $(keyModeDropdown).on('click', function () {
        rotateToggle($('#mode-key-dropdown > i'));
        $(keyModeButtons).slideToggle();
    })

    $(fretboardDropdown).on('click', function () {

        if (fretboardToggle) {
            fretboardToggle = false;
            $(fretboardDropdown).animate({
                width: '632px'
            }, 400);
            $(gridContainer).animate({
                width: '632px'
            }, 300);
            $(gridContainer).animate({
                height: '154px',
                marginTop: '1rem'
            }, 400);
            rotateToggle($('#fretboard-dropdown > i'));
            $(fretDropdownContainer).delay(400).animate({
                minHeight: '3rem',
                maxHeight: '10rem',
                overflow: 'wrap'
            }, 400)
            $(fretDropdownContainer).removeAttr('height');
            if (!key == '' && $(gridContainer).val('width') !== '0') {
                for (let i = 0; i < notesArrayFrets.length; i++) {
                    for (let j = 0; j < notesArrayFrets[i].length; j++) {
                        notesArrayFrets[i][j].innerHTML = '';
                    }
                }
                fretboardFunction('major');
            }
        } else if (!fretboardToggle) {
            fretboardToggle = true;
            for (let i = 0; i < notesArrayFrets.length; i++) {
                for (let j = 0; j < notesArrayFrets[i].length; j++) {
                    notesArrayFrets[i][j].innerHTML = '';
                    $(notesArrayFrets[i][j]).removeClass('displayed-notes');
                }
            }
            if ($(fretScaleButtons).css('display') == 'block') {
                $(fretScaleButtons).slideToggle();
            }
            if ($(fretModeButtons).css('display') == 'block') {
                $(fretModeButtons).slideToggle();
            }
            rotateToggle($('#fretboard-dropdown > i'));
            $(fretDropdownContainer).animate({
                minHeight: '0',
                maxHeight: '0'
            }, 400);
            
            $(gridContainer).animate({
                height: '0px',
                marginTop: '0rem'
            }, 400);
            $(gridContainer).animate({
                width: '0'
            }, 400)
            $(fretboardDropdown).animate({
                width: dropdownWidth
            }, 400);
        }

    })

    $(fretScaleDropdown).on('click', function () {
        rotateToggle($('#scale-fret-dropdown > i'));
        $(fretScaleButtons).slideToggle();
    })

    $(fretModeDropdown).on('click', function () {
        rotateToggle($('#mode-fret-dropdown > i'));
        $(fretModeButtons).slideToggle();
    })

    $(modesContainerTitle).on('click', function () {
        rotateToggle($('#mode-title > i'));
        if ($(modeContainer).css('display') == 'none') {
            $(modesContainerTitle).animate({
                width: scalesContainerWidth,
                paddingBottom: '2rem'
            }, 300);
            setTimeout(function () {
                $(modeContainer).slideToggle();
                $(modeContainer).css({
                    display: 'inline-flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                })
            }, 300)
        }

        else {
            $(modeContainer).slideToggle();
            $(modesContainerTitle).delay(400).animate({
                width: modeWidth,
                paddingBottom: '0'
            }, 300);

        }

    })

    $(miscContainerTitle).on('click', function () {
        rotateToggle($('#misc-container > i'));
        inlineToggle(miscChordsContainer);
    })

    $(minorContainerTitle).on('click', function () {

        rotateToggle($('#minor-container > i'));
        inlineToggle(minorChordsContainer);
    })

    $(pentatonicContainerTitle).on('click', function () {
        rotateToggle($('#pentatonic-container > i'));
        inlineToggle(pentatonicChordsContainer);
    })

    $(seventhContainerTitle).on('click', function () {
        rotateToggle($('#seventh-container > i'));
        inlineToggle(seventhChordsContainer);
    });

    $(sixthContainerTitle).on('click', function () {
        rotateToggle($('#sixth-container > i'));
        inlineToggle(sixthChordsContainer);
    })

    $(ninthContainerTitle).on('click', function () {
        rotateToggle($('#ninth-container > i'));
        inlineToggle(ninthChordsContainer);
    })

    $(susContainerTitle).on('click', function () {
        rotateToggle($('#sus-container > i'));
        inlineToggle(susChordsContainer);
    })

    $(otherContainerTitle).on('click', function () {
        rotateToggle($('#other-container > i'));
        inlineToggle(otherChordsContainer);
    })

});

export { gridContainer, fretboardToggle, keyboardToggle, keyboardGrid, globalScale, modifyGlobalScale, staffToggle, staffGrid };