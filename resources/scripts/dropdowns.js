import { noteArray, Ab, A, Bb, B, C, Csharp, Db, D, Eb, E, F, Fsharp, Gb, G, I, ii, II, iii, III, PIV, tritone, PV, vi, VI, vii, VII, Note, letterArray, addIntervals } from './intervals.js';

/* #region  Variables */
let seventhContainerTitle = document.getElementById('seventh-container');
let seventhChordsContainer = document.getElementById('seventh-chords-container');
let seventhChordsContent = document.getElementsByClassName('seventh');

let sixthContainerTitle = document.getElementById('sixth-container');
let sixthChordsContainer = document.getElementById('sixth-chords-container');
let sixthChordsContent = document.getElementsByClassName('sixth');

let ninthContainerTitle = document.getElementById('ninth-container');
let ninthChordsContainer = document.getElementById('ninth-chords-container');
let ninthChordsContent = document.getElementsByClassName('ninth');

let susContainerTitle = document.getElementById('sus-container');
let susChordsContainer = document.getElementById('sus-chords-container');
let susChordsContent = document.getElementsByClassName('sus');

let otherContainerTitle = document.getElementById('other-container');
let otherChordsContainer = document.getElementById('other-chords-container');
let otherChordsContent = document.getElementsByClassName('other');

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

/* #endregion */


$(chordContainer).css('width', scalesContainerWidth);

$(function () {

    $(window).on('load', function () {
        for (let i = 0; i < seventhChordsContent.length; i++) {
            $(seventhChordsContent[i]).css('display', 'hidden');

        }
        for (let i = 0; i < sixthChordsContent.length; i++) {
            $(sixthChordsContent[i]).css('display', 'hidden');
        }
        for (let i = 0; i < ninthChordsContent.length; i++) {
            $(ninthChordsContent[i]).css('display', 'hidden');
        }
        for (let i = 0; i < susChordsContent.length; i++) {
            $(susChordsContent[i]).css('display', 'hidden');
        }
        for (let i = 0; i < otherChordsContent.length; i++) {
            $(otherChordsContent[i]).css('display', 'hidden');
        }
    })

    $(modesContainerTitle).on('click', function () {

        if (toggleLength) {
            toggleLength = false;
            $(modesContainerTitle).animate({
                width: scalesContainerWidth
            }, 300);
            $(modeContainer).delay(300).slideToggle();
        } else if (!toggleLength) {
            $(modeContainer).slideToggle();
            $(modesContainerTitle).delay(400).animate({
                width: modeWidth
            }, 300);
            toggleLength = true;

        }

    })



    $(miscContainerTitle).on('click', function () {
        $(miscChordsContainer).slideToggle();
    })

    $(minorContainerTitle).on('click', function () {
        $(minorChordsContainer).slideToggle();
    })

    $(pentatonicContainerTitle).on('click', function () {
        $(pentatonicChordsContainer).slideToggle();
    })

    $(seventhContainerTitle).on('click', function () {
        $(seventhChordsContainer).slideToggle();
        for (let i = 0; i < seventhChordsContent.length; i++) {
            $(seventhChordsContent[i]).css('display', 'block');
        }
    });

    $(sixthContainerTitle).on('click', function () {
        $(sixthChordsContainer).slideToggle();
        for (let i = 0; i < sixthChordsContent.length; i++) {
            $(sixthChordsContent[i]).css('display', 'block');
        }
    })

    $(ninthContainerTitle).on('click', function () {
        $(ninthChordsContainer).slideToggle();
        for (let i = 0; i < ninthChordsContent.length; i++) {
            $(ninthChordsContent[i]).css('display', 'block');
        }
    })

    $(susContainerTitle).on('click', function () {
        $(susChordsContainer).slideToggle();
        for (let i = 0; i < susChordsContent.length; i++) {
            $(susChordsContent[i]).css('display', 'block');
        }
    })

    $(otherContainerTitle).on('click', function () {
        $(otherChordsContainer).slideToggle();
        for (let i = 0; i < otherChordsContent.length; i++) {
            $(otherChordsContent[i]).css('display', 'block');
        }
    })

});