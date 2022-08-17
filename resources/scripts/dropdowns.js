
import {notesArrayFrets, fretboardFunction} from './fretboard.js';
import { key } from './buttons.js';
import { notesArrayKeys, keyboardFunction } from './keyboard.js';
import { inlineToggle } from './utilities.js';
/* #region  Variables */
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

let minorContainerTitle = document.getElementById('minor-container');
let minorChordsContainer = document.getElementById('minor-scale-container');

let pentatonicContainerTitle = document.getElementById('pentatonic-container');
let pentatonicChordsContainer = document.getElementById('pentatonic-scale-container');

let miscContainerTitle = document.getElementById('misc-container');
let miscChordsContainer = document.getElementById('misc-scale-container');

let modesContainerTitle = document.getElementById('mode-title');
let modeContainer = document.getElementById('modes-dropdown-container');
let bigContainer = document.getElementById('big-container');

let scalesContainerWidth = $(bigContainer).width();
scalesContainerWidth = Math.floor(scalesContainerWidth);
scalesContainerWidth = scalesContainerWidth - 32;
scalesContainerWidth = scalesContainerWidth.toString().concat('', 'px');
let bigContainerWidth = ($(bigContainer).width())
let scaleWidth = Math.floor(bigContainerWidth) - 32;

let toggleLength = true;

let chordContainer = document.getElementById('chord-container');

let modeWidth = scaleWidth / bigContainerWidth;
modeWidth = Math.floor(modeWidth * 100 + 64);
modeWidth = modeWidth.toString().concat('', 'px');

let fretboardDropdown = document.getElementById('fretboard-dropdown');
let gridContainer = document.getElementById('grid-container');
let dropdownWidth = '233px';
let fretboardToggle = true;

let keyboardDropdown = document.getElementById('keyboard-dropdown');
let keyboardGrid = document.getElementById('keyboard-grid-container');
let keyboardWidth = '453px';
let keyboardToggle = true;

let fretButtonDropdowns = document.getElementsByClassName('fret-dropdown-button');
let fretScaleButtons = document.getElementById('fret-scale-container');
let fretModeButtons = document.getElementById('fret-mode-container');
let fretScaleDropdown = document.getElementById('scale-fret-dropdown');
let fretModeDropdown = document.getElementById('mode-fret-dropdown');

/* #endregion */


$(chordContainer).css('width', scalesContainerWidth);

$(function () {

    $(keyboardDropdown).on('click', function() {
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
            if (!key == '' && $(keyboardGrid).val('width') !== '0') {
                for (let i = 0; i < notesArrayKeys.length; i++) {
                    for (let j = 0; j < notesArrayKeys[i].length; j++) {
                        notesArrayKeys[i][j].innerHTML = '';
                    }
                }
                keyboardFunction('major');

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
            $(keyboardGrid).animate({
                height: '0',
                marginTop: '0'
            })
            $(keyboardGrid).animate({
                width: '0'
            }, 400);
            $(keyboardDropdown).animate({
                width: '210px'
            }, 400);
        }
    })

    $(fretboardDropdown).on('click', function() {

        if (fretboardToggle) {
            fretboardToggle = false;
            $(fretboardDropdown).animate({
                width:'632px'
            }, 400);
            $(gridContainer).animate({
                width: '632px'    
            }, 300);
            $(gridContainer).animate({
                height: '154px',
                marginTop: '1rem'
            }, 400);
            for (let i = 0; i < fretButtonDropdowns.length; i++) {
                $(fretButtonDropdowns[i]).css({
                    display: 'inline-block'
                }, 400)
            }
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
            for (let i = 0; i < fretButtonDropdowns.length; i++) {
                $(fretButtonDropdowns[i]).css({
                    display: 'none'
                }, 300);
            }
            $(gridContainer).animate({
                height: '0',
                marginTop: '0'
            }, 400);
            $(gridContainer).css('width', '0');
            $(fretboardDropdown).delay(400).animate({
                width: dropdownWidth
            }, 400);
        }

    })

    $(fretScaleDropdown).on('click', function() {
        $(fretScaleButtons).slideToggle();
    })

    $(fretModeDropdown).on('click', function() {
        $(fretModeButtons).slideToggle();
    })

    $(modesContainerTitle).on('click', function () {

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
        inlineToggle(miscChordsContainer);
    })

    $(minorContainerTitle).on('click', function () {
        inlineToggle(minorChordsContainer);
    })

    $(pentatonicContainerTitle).on('click', function () {
        inlineToggle(pentatonicChordsContainer);
    })

    $(seventhContainerTitle).on('click', function () {
        inlineToggle(seventhChordsContainer);
    });

    $(sixthContainerTitle).on('click', function () {
        inlineToggle(sixthChordsContainer);
    })

    $(ninthContainerTitle).on('click', function () {
        inlineToggle(ninthChordsContainer);
    })

    $(susContainerTitle).on('click', function () {
        inlineToggle(susChordsContainer);
    })

    $(otherContainerTitle).on('click', function () {
        inlineToggle(otherChordsContainer);
    })

});

export {gridContainer, fretboardToggle, keyboardToggle, keyboardGrid };