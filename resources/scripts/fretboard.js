import { noteArray, Ab, A, Bb, B, C, Csharp, Db, D, Eb, E, F, Fsharp, Gb, G, I, ii, II, iii, III, PIV, tritone, PV, vi, VI, vii, VII, Note, letterArray, addIntervals } from './intervals.js';
import {key} from './buttons.js';
import {gridContainer} from './dropdowns.js';

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

$(function () {

    $(majorScale).on('click', function() {
        if ((!majorToggle && !key == '') && $(gridContainer).val('width') !== '0') {
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
                case 'F': 
                    for (let j = 0; j < FNote.length; j++) {
                        FNote[j].innerHTML = 'F';
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
                    }
            }   
            }
        }
    })

})