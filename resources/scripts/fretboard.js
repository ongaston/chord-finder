import { noteArray, Ab, A, Bb, B, C, Csharp, Db, D, Eb, E, F, Fsharp, Gb, G, I, ii, II, iii, III, PIV, tritone, PV, vi, VI, vii, VII, Note, letterArray, addIntervals } from './intervals.js';
import {key} from './buttons.js';

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

let majorScale = document.getElementById('major-scale-title');
let majorToggle = false;

$(function () {

    $(majorScale).on('click', function() {
        if (!majorToggle && !key == '') {
            
        }
    })

})