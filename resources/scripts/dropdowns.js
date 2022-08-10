import { noteArray, Ab, A, Bb, B, C, Csharp, Db, D, Eb, E, F, Fsharp, Gb, G, I, ii, II, iii, III, PIV, tritone, PV, vi, VI, vii, VII, Note, letterArray, addIntervals } from './intervals.js';

let seventhContainerTitle = document.getElementById('seventh-container');
let seventhChordsContainer = document.getElementById('seventh-chords-container');
let seventhChordsContent = document.getElementsByClassName('seventh');



$(function() {

$(window).on('load', function() {
    for (let i = 0; i < seventhChordsContent.length; i++) {
        $(seventhChordsContent[i]).css('display', 'hidden');

    }
})

$(seventhContainerTitle).on('click', function() {
    $(seventhChordsContainer).slideToggle();
    for (let i = 0; i < seventhChordsContent.length; i++) {
        $(seventhChordsContent[i]).css('display', 'block');
    }
});

});