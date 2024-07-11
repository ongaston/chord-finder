import { key } from './buttons.js';
import { staffToggle, modifyGlobalScale, staffGrid, globalScale } from './dropdowns.js';

/* #region  variables */

let trebleButton = document.getElementById('treble');
let bassButton = document.getElementById('bass');
let altoButton = document.getElementById('alto');
let tenorButton = document.getElementById('tenor');

let line1 = document.getElementById('1');
let line2 = document.getElementById('2');
let line3 = document.getElementById('3');
let line4 = document.getElementById('4');
let line5 = document.getElementById('5');
let line6 = document.getElementById('6');
let line7 = document.getElementById('7');
let line8 = document.getElementById('8');
let line9 = document.getElementById('9');
let line10 = document.getElementById('10');
let line11 = document.getElementById('11');
let line12 = document.getElementById('12');
let line13 = document.getElementById('13');
let line14 = document.getElementById('14');
let notesArrayStaff = [line1, line2, line3, line4, line5, line6, line7, line8, line9, line10, line11, line12, line13, line14];


let Bsig = document.getElementById('Bsig');
let Esig = document.getElementById('Esig');
let Asig = document.getElementById('Asig');
let Dsig = document.getElementById('Dsig');
let Gsig = document.getElementById('Gsig');
let Csig = document.getElementById('Csig');
let Fsig = document.getElementById('Fsig');
let sigArray = document.getElementsByClassName('sig');
let toggle = false;


let currentClef = 'treble';
/* #endregion */


function staffFunction (scale) {
    modifyGlobalScale(scale);
    for (let i = 0; i < notesArrayStaff.length; i++) {
        $(notesArrayStaff[i]).removeClass('sharp natural flat double-flat sharp-line flat-line natural-line double-flat-line');
    }
    for (let i = 0; i < key[scale].length; i++) {
        let currentNote = key[scale][i].toLowerCase();
        let currentLetter = currentNote[0].toLowerCase();
        let startingNumber;
        if (currentClef == 'treble') {
            for (let j = 0; j < notesArrayStaff.length; j++) {
                switch(notesArrayStaff[j].getAttribute('id')) {
                    case '14': 
                        notesArrayStaff[j].setAttribute('id', 'b6');
                        break;
                    case '13': 
                        notesArrayStaff[j].setAttribute('id', 'a6');
                        break;
                    case '12': 
                        notesArrayStaff[j].setAttribute('id', 'g5');
                        break;
                    case '11': 
                        notesArrayStaff[j].setAttribute('id', 'f5');
                        break;
                    case '10': 
                        notesArrayStaff[j].setAttribute('id', 'e5');
                        break;
                    case '9': 
                        notesArrayStaff[j].setAttribute('id', 'd5');
                        break;
                    case '8': 
                        notesArrayStaff[j].setAttribute('id', 'c5');
                        break;
                    case '7': 
                        notesArrayStaff[j].setAttribute('id', 'b5');
                        break;
                    case '6': 
                        notesArrayStaff[j].setAttribute('id', 'a5');
                        break;
                    case '5': 
                        notesArrayStaff[j].setAttribute('id', 'g4');
                        break;
                    case '4': 
                        notesArrayStaff[j].setAttribute('id', 'f4');
                        break;
                    case '3': 
                        notesArrayStaff[j].setAttribute('id', 'e4');
                        break;
                    case '2': 
                        notesArrayStaff[j].setAttribute('id', 'd4');
                        break;
                    case '1': 
                        notesArrayStaff[j].setAttribute('id', 'c4');
                        break;

                }
            }
            for (let j = 0; j < sigArray.length; j++) {
                switch(sigArray[j].getAttribute('id')) {
                    case 'Bsig':
                        $(sigArray[j]).css({
                            gridRow: '9 / span 2'
                        });
                        break;
                    case 'Esig':
                        $(sigArray[j]).css({
                            gridRow: '6 / span 2'
                        });
                        break;
                    case 'Asig':
                        $(sigArray[j]).css({
                            gridRow: '10 / span 2'
                        });
                        break;
                    case 'Dsig':
                        $(sigArray[j]).css({
                            gridRow: '7 / span 2'
                        });
                        break;
                    case 'Gsig':
                        $(sigArray[j]).css({
                            gridRow: '4 / span 2'
                        });
                        break;
                    case 'Csig':
                        $(sigArray[j]).css({
                            gridRow: '8 / span 2'
                        });
                        break;
                    case 'Fsig':
                        $(sigArray[j]).css({
                            gridRow: '5 / span 2'
                        });
                        break;
                }
            }
            let rootLetter = key.notes[0][0];
    
            switch (rootLetter) {
                case 'C':
                case 'D':
                case 'E':
                case 'F':
                case 'G':
                    startingNumber = 4;
                    rootLetter = rootLetter.concat(startingNumber.toString());
                    break;
                case 'A':
                case 'B':
                    startingNumber = 5;
                    rootLetter = rootLetter.concat(startingNumber.toString());
                    break;
            }
            if (currentLetter == 'a' && i !== 0) {
                toggle = true;
            }
            if (toggle) {
                startingNumber++;
            }
        } else if (currentClef == 'bass') {
            for (let j = 0; j < notesArrayStaff.length; j++) {
         
                switch(notesArrayStaff[j].getAttribute('id')) {
                    case '14': 
                        notesArrayStaff[j].setAttribute('id', 'd6');
                        break;
                    case '13': 
                        notesArrayStaff[j].setAttribute('id', 'c6');
                        break;
                    case '12': 
                        notesArrayStaff[j].setAttribute('id', 'b5');
                        break;
                    case '11': 
                        notesArrayStaff[j].setAttribute('id', 'a5');
                        break;
                    case '10': 
                        notesArrayStaff[j].setAttribute('id', 'g5');
                        break;
                    case '9': 
                        notesArrayStaff[j].setAttribute('id', 'f5');
                        break;
                    case '8': 
                        notesArrayStaff[j].setAttribute('id', 'e5');
                        break;
                    case '7': 
                        notesArrayStaff[j].setAttribute('id', 'd5');
                        break;
                    case '6': 
                        notesArrayStaff[j].setAttribute('id', 'c5');
                        break;
                    case '5': 
                        notesArrayStaff[j].setAttribute('id', 'b4');
                        break;
                    case '4': 
                        notesArrayStaff[j].setAttribute('id', 'a4');
                        break;
                    case '3': 
                        notesArrayStaff[j].setAttribute('id', 'g4');
                        break;
                    case '2': 
                        notesArrayStaff[j].setAttribute('id', 'f4');
                        break;
                    case '1': 
                        notesArrayStaff[j].setAttribute('id', 'e4');
                        break;

                }
            }
            for (let j = 0; j < sigArray.length; j++) {
                switch(sigArray[j].getAttribute('id')) {
                    case 'Bsig':
                        $(sigArray[j]).css({
                            gridRow: '11 / span 2'
                        });
                        break;
                    case 'Esig':
                        $(sigArray[j]).css({
                            gridRow: '8 / span 2'
                        });
                        break;
                    case 'Asig':
                        $(sigArray[j]).css({
                            gridRow: '12 / span 2'
                        });
                        break;
                    case 'Dsig':
                        $(sigArray[j]).css({
                            gridRow: '9 / span 2'
                        });
                        break;
                    case 'Gsig':
                        $(sigArray[j]).css({
                            gridRow: '6 / span 2'
                        });
                        break;
                    case 'Csig':
                        $(sigArray[j]).css({
                            gridRow: '10 / span 2'
                        });
                        break;
                    case 'Fsig':
                        $(sigArray[j]).css({
                            gridRow: '7 / span 2'
                        });
                        break;
                }
            }
            let rootLetter = key.notes[0][0];
            
    
            switch (rootLetter) {
                case 'A':
                case 'B':
                case 'E':
                case 'F':
                case 'G':
                    startingNumber = 4;
                    rootLetter = rootLetter.concat(startingNumber.toString());
                    break;
                case 'C':
                case 'D':
                    startingNumber = 5;
                    rootLetter = rootLetter.concat(startingNumber.toString());
                    break;
            }
            if (currentLetter == 'c' && i !== 0) {
                toggle = true;
            }
            if (toggle) {
                startingNumber++;
            }
        } else if (currentClef == 'alto') {
            for (let j = 0; j < notesArrayStaff.length; j++) {
         
                switch(notesArrayStaff[j].getAttribute('id')) {
                    case '14': 
                        notesArrayStaff[j].setAttribute('id', 'c6');
                        break;
                    case '13': 
                        notesArrayStaff[j].setAttribute('id', 'b6');
                        break;
                    case '12': 
                        notesArrayStaff[j].setAttribute('id', 'a5');
                        break;
                    case '11': 
                        notesArrayStaff[j].setAttribute('id', 'g5');
                        break;
                    case '10': 
                        notesArrayStaff[j].setAttribute('id', 'f5');
                        break;
                    case '9': 
                        notesArrayStaff[j].setAttribute('id', 'e5');
                        break;
                    case '8': 
                        notesArrayStaff[j].setAttribute('id', 'd5');
                        break;
                    case '7': 
                        notesArrayStaff[j].setAttribute('id', 'c5');
                        break;
                    case '6': 
                        notesArrayStaff[j].setAttribute('id', 'b5');
                        break;
                    case '5': 
                        notesArrayStaff[j].setAttribute('id', 'a4');
                        break;
                    case '4': 
                        notesArrayStaff[j].setAttribute('id', 'g4');
                        break;
                    case '3': 
                        notesArrayStaff[j].setAttribute('id', 'f4');
                        break;
                    case '2': 
                        notesArrayStaff[j].setAttribute('id', 'e4');
                        break;
                    case '1': 
                        notesArrayStaff[j].setAttribute('id', 'd4');
                        break;

                }
            }
            for (let j = 0; j < sigArray.length; j++) {
                switch(sigArray[j].getAttribute('id')) {
                    case 'Bsig':
                        $(sigArray[j]).css({
                            gridRow: '10 / span 2'
                        });
                        break;
                    case 'Esig':
                        $(sigArray[j]).css({
                            gridRow: '7 / span 2'
                        });
                        break;
                    case 'Asig':
                        $(sigArray[j]).css({
                            gridRow: '11 / span 2'
                        });
                        break;
                    case 'Dsig':
                        $(sigArray[j]).css({
                            gridRow: '8 / span 2'
                        });
                        break;
                    case 'Gsig':
                        $(sigArray[j]).css({
                            gridRow: '5 / span 2'
                        });
                        break;
                    case 'Csig':
                        $(sigArray[j]).css({
                            gridRow: '9 / span 2'
                        });
                        break;
                    case 'Fsig':
                        $(sigArray[j]).css({
                            gridRow: '6 / span 2'
                        });
                        break;
                }
            }
            let rootLetter = key.notes[0][0];
            
    
            switch (rootLetter) {
                case 'A':
                case 'D':
                case 'E':
                case 'F':
                case 'G':
                    startingNumber = 4;
                    rootLetter = rootLetter.concat(startingNumber.toString());
                    break;
                case 'C':
                case 'B':
                    startingNumber = 5;
                    rootLetter = rootLetter.concat(startingNumber.toString());
                    break;
            }
            if (currentLetter == 'b' && i !== 0) {
                toggle = true;
            }
            if (toggle) {
                startingNumber++;
            }
        } else if (currentClef == 'tenor') {
            for (let j = 0; j < notesArrayStaff.length; j++) {
         
                switch(notesArrayStaff[j].getAttribute('id')) {
                    case '14': 
                        notesArrayStaff[j].setAttribute('id', 'a6');
                        break;
                    case '13': 
                        notesArrayStaff[j].setAttribute('id', 'g6');
                        break;
                    case '12': 
                        notesArrayStaff[j].setAttribute('id', 'f5');
                        break;
                    case '11': 
                        notesArrayStaff[j].setAttribute('id', 'e5');
                        break;
                    case '10': 
                        notesArrayStaff[j].setAttribute('id', 'd5');
                        break;
                    case '9': 
                        notesArrayStaff[j].setAttribute('id', 'c5');
                        break;
                    case '8': 
                        notesArrayStaff[j].setAttribute('id', 'b5');
                        break;
                    case '7': 
                        notesArrayStaff[j].setAttribute('id', 'a5');
                        break;
                    case '6': 
                        notesArrayStaff[j].setAttribute('id', 'g5');
                        break;
                    case '5': 
                        notesArrayStaff[j].setAttribute('id', 'f4');
                        break;
                    case '4': 
                        notesArrayStaff[j].setAttribute('id', 'e4');
                        break;
                    case '3': 
                        notesArrayStaff[j].setAttribute('id', 'd4');
                        break;
                    case '2': 
                        notesArrayStaff[j].setAttribute('id', 'c4');
                        break;
                    case '1': 
                        notesArrayStaff[j].setAttribute('id', 'b4');
                        break;

                }
            }
            for (let j = 0; j < sigArray.length; j++) {
                switch(sigArray[j].getAttribute('id')) {
                    case 'Bsig':
                        $(sigArray[j]).css({
                            gridRow: '8 / span 2'
                        });
                        break;
                    case 'Esig':
                        $(sigArray[j]).css({
                            gridRow: '5 / span 2'
                        });
                        break;
                    case 'Asig':
                        $(sigArray[j]).css({
                            gridRow: '9 / span 2'
                        });
                        break;
                    case 'Dsig':
                        $(sigArray[j]).css({
                            gridRow: '6 / span 2'
                        });
                        break;
                    case 'Gsig':
                        $(sigArray[j]).css({
                            gridRow: '10 / span 2'
                        });
                        break;
                    case 'Csig':
                        $(sigArray[j]).css({
                            gridRow: '7 / span 2'
                        });
                        break;
                    case 'Fsig':
                        $(sigArray[j]).css({
                            gridRow: '4 / span 2'
                        });
                        break;
                }
            }
            let rootLetter = key.notes[0][0];
            
    
            switch (rootLetter) {
                case 'C':
                case 'B':
                case 'E':
                case 'F':
                case 'D':
                    startingNumber = 4;
                    rootLetter = rootLetter.concat(startingNumber.toString());
                    break;
                case 'G':
                case 'A':
                    startingNumber = 5;
                    rootLetter = rootLetter.concat(startingNumber.toString());
                    break;
            }
            if (currentLetter == 'g' && i !== 0) {
                toggle = true;
            }
            if (toggle) {
                startingNumber++;
            }
        }

        let currentHTML = eval(currentLetter.concat(startingNumber.toString()));
        switch (currentNote) {
                case 'ab':
                case 'bb':
                case 'cb':
                case 'db':
                case 'eb':
                case 'fb':
                case 'gb':
                    if ($(currentHTML).css('grid-row-start') > 14 || $(currentHTML).css('grid-row-start') < 4) {
                        $(currentHTML).removeClass('sharp natural flat double-flat sharp-line natural-line double-flat-line').addClass('flat-line');
                    } else{
                        $(currentHTML).removeClass('sharp natural double-flat flat-line sharp-line natural-line double-flat-line').addClass('flat');
                    }
                    break;
                case 'a':
                case 'b':
                case 'c':
                case 'd':
                case 'e':
                case 'f':
                case 'g':
                    if ($(currentHTML).css('grid-row-start') > 14 || $(currentHTML).css('grid-row-start') < 4) {
                        $(currentHTML).removeClass('sharp natural flat double-flat sharp-line flat-line double-flat-line').addClass('natural-line');
                    } else{
                        $(currentHTML).removeClass('sharp flat double-flat flat-line sharp-line natural-line double-flat-line').addClass('natural');
                    }
                    break;
                case 'a#':
                case 'b#':
                case 'c#':
                case 'd#':
                case 'e#':
                case 'f#':
                case 'g#':
                    if ($(currentHTML).css('grid-row-start') > 14 || $(currentHTML).css('grid-row-start') < 4) {
                        $(currentHTML).removeClass('sharp natural flat double-flat flat-line natural-line double-flat-line').addClass('sharp-line');
                    } else{
                        $(currentHTML).removeClass('flat natural double-flat flat-line sharp-line natural-line double-flat-line').addClass('sharp');
                    }
                    break;
                case 'bbb': 
                case 'dbb':
                case 'ebb':
                    if ($(currentHTML).css('grid-row-start') > 14 || $(currentHTML).css('grid-row-start') < 4) {
                        $(currentHTML).removeClass('sharp natural flat double-flat sharp-line natural-line flat-line').addClass('double-flat-line');
                    } else{
                        $(currentHTML).removeClass('sharp natural flat flat-line sharp-line natural-line double-flat-line').addClass('double-flat');
                    }
                    break;
               
        }
        let currentColumn = i + 9;
        currentHTML.style.gridColumn = currentColumn.toString() + ' / ' + currentColumn.toString();
    }
    switch(key.notes[0]) {
        case 'Ab':
            $(Bsig).removeClass('sharp-sig').addClass('flat-sig');
            $(Esig).removeClass('sharp-sig').addClass('flat-sig');
            $(Asig).removeClass('sharp-sig').addClass('flat-sig');
            $(Dsig).removeClass('sharp-sig').addClass('flat-sig');
            $(Gsig).removeClass('sharp-sig flat-sig');
            $(Csig).removeClass('sharp-sig flat-sig');
            $(Fsig).removeClass('sharp-sig flat-sig');
            break;
        case 'Gb':
            $(Bsig).removeClass('sharp-sig').addClass('flat-sig');
            $(Esig).removeClass('sharp-sig').addClass('flat-sig');
            $(Asig).removeClass('sharp-sig').addClass('flat-sig');
            $(Dsig).removeClass('sharp-sig').addClass('flat-sig');
            $(Gsig).removeClass('sharp-sig').addClass('flat-sig');
            $(Csig).removeClass('sharp-sig').addClass('flat-sig');
            $(Fsig).removeClass('sharp-sig flat-sig');
            break;
        case 'Db':
            $(Bsig).removeClass('sharp-sig').addClass('flat-sig');
            $(Esig).removeClass('sharp-sig').addClass('flat-sig');
            $(Asig).removeClass('sharp-sig').addClass('flat-sig');
            $(Dsig).removeClass('sharp-sig').addClass('flat-sig');
            $(Gsig).removeClass('sharp-sig').addClass('flat-sig');
            $(Csig).removeClass('sharp-sig flat-sig');
            $(Fsig).removeClass('sharp-sig flat-sig');
            break;
        case 'Eb':
            $(Bsig).removeClass('sharp-sig').addClass('flat-sig');
            $(Esig).removeClass('sharp-sig').addClass('flat-sig');
            $(Asig).removeClass('sharp-sig').addClass('flat-sig');
            $(Dsig).removeClass('sharp-sig flat-sig');
            $(Gsig).removeClass('sharp-sig flat-sig');
            $(Csig).removeClass('sharp-sig flat-sig');
            $(Fsig).removeClass('sharp-sig flat-sig');
            break;
        case 'Bb':
            $(Bsig).removeClass('sharp-sig').addClass('flat-sig');
            $(Esig).removeClass('sharp-sig').addClass('flat-sig');
            $(Asig).removeClass('sharp-sig flat-sig');
            $(Dsig).removeClass('sharp-sig flat-sig');
            $(Gsig).removeClass('sharp-sig flat-sig');
            $(Csig).removeClass('sharp-sig flat-sig');
            $(Fsig).removeClass('sharp-sig flat-sig');
            break;
        case 'F':
            $(Bsig).removeClass('sharp-sig').addClass('flat-sig');
            $(Esig).removeClass('sharp-sig flat-sig');
            $(Asig).removeClass('sharp-sig flat-sig');
            $(Dsig).removeClass('sharp-sig flat-sig');
            $(Gsig).removeClass('sharp-sig flat-sig');
            $(Csig).removeClass('sharp-sig flat-sig');
            $(Fsig).removeClass('sharp-sig flat-sig');
            break;
        case 'C#':
            $(Bsig).removeClass('flat-sig').addClass('sharp-sig');
            $(Esig).removeClass('flat-sig').addClass('sharp-sig');
            $(Asig).removeClass('flat-sig').addClass('sharp-sig');
            $(Dsig).removeClass('flat-sig').addClass('sharp-sig');
            $(Gsig).removeClass('flat-sig').addClass('sharp-sig');
            $(Csig).removeClass('flat-sig').addClass('sharp-sig');
            $(Fsig).removeClass('flat-sig').addClass('sharp-sig');
            break;
        case 'F#':
            $(Bsig).removeClass('flat-sig sharp-sig');
            $(Esig).removeClass('flat-sig').addClass('sharp-sig');
            $(Asig).removeClass('flat-sig').addClass('sharp-sig');
            $(Dsig).removeClass('flat-sig').addClass('sharp-sig');
            $(Gsig).removeClass('flat-sig').addClass('sharp-sig');
            $(Csig).removeClass('flat-sig').addClass('sharp-sig');
            $(Fsig).removeClass('flat-sig').addClass('sharp-sig');
            break;
        case 'B':
            $(Bsig).removeClass('flat-sig sharp-sig');
            $(Esig).removeClass('flat-sig sharp-sig');
            $(Asig).removeClass('flat-sig').addClass('sharp-sig');
            $(Dsig).removeClass('flat-sig').addClass('sharp-sig');
            $(Gsig).removeClass('flat-sig').addClass('sharp-sig');
            $(Csig).removeClass('flat-sig').addClass('sharp-sig');
            $(Fsig).removeClass('flat-sig').addClass('sharp-sig');
            break;
        case 'E':
            $(Bsig).removeClass('flat-sig sharp-sig');
            $(Esig).removeClass('flat-sig sharp-sig');
            $(Asig).removeClass('flat-sig sharp-sig');
            $(Dsig).removeClass('flat-sig').addClass('sharp-sig');
            $(Gsig).removeClass('flat-sig').addClass('sharp-sig');
            $(Csig).removeClass('flat-sig').addClass('sharp-sig');
            $(Fsig).removeClass('flat-sig').addClass('sharp-sig');
            break;
        case 'A':
            $(Bsig).removeClass('flat-sig sharp-sig');
            $(Esig).removeClass('flat-sig sharp-sig');
            $(Asig).removeClass('flat-sig sharp-sig');
            $(Dsig).removeClass('flat-sig sharp-sig');
            $(Gsig).removeClass('flat-sig').addClass('sharp-sig');
            $(Csig).removeClass('flat-sig').addClass('sharp-sig');
            $(Fsig).removeClass('flat-sig').addClass('sharp-sig');
            break;
        case 'D':
            $(Bsig).removeClass('flat-sig sharp-sig');
            $(Esig).removeClass('flat-sig sharp-sig');
            $(Asig).removeClass('flat-sig sharp-sig');
            $(Dsig).removeClass('flat-sig sharp-sig');
            $(Gsig).removeClass('flat-sig sharp-sig');
            $(Csig).removeClass('flat-sig').addClass('sharp-sig');
            $(Fsig).removeClass('flat-sig').addClass('sharp-sig');
            break;
        case 'G':
            $(Bsig).removeClass('flat-sig sharp-sig');
            $(Esig).removeClass('flat-sig sharp-sig');
            $(Asig).removeClass('flat-sig sharp-sig');
            $(Dsig).removeClass('flat-sig sharp-sig');
            $(Gsig).removeClass('flat-sig sharp-sig');
            $(Csig).removeClass('flat-sig sharp-sig');
            $(Fsig).removeClass('flat-sig').addClass('sharp-sig');
            break;
        case 'C':
            $(Bsig).removeClass('flat-sig sharp-sig');
            $(Esig).removeClass('flat-sig sharp-sig');
            $(Asig).removeClass('flat-sig sharp-sig');
            $(Dsig).removeClass('flat-sig sharp-sig');
            $(Gsig).removeClass('flat-sig sharp-sig');
            $(Csig).removeClass('flat-sig sharp-sig');
            $(Fsig).removeClass('flat-sig sharp-sig');
            break;
    }
    let currentSigArray = [];
    for (let i = 0; i < sigArray.length; i++) {
        if ($(sigArray[i]).hasClass('sharp-sig') || $(sigArray[i]).hasClass('flat-sig')) {
            currentSigArray.push(sigArray[i]);
        }
    }
    for (let i = 0; i < currentSigArray.length; i++) {
        let sigColumn = i + 2;
        currentSigArray[i].style.gridColumn = sigColumn + ' / ' + sigColumn;
    }

    toggle = false;
    
    let g = 1;
    for (let i = 0; i < notesArrayStaff.length; i++) {

            notesArrayStaff[i].setAttribute('id', [g]);
        g++;
    }
}

function clefFunction(clef) {
    if (clef == 'bass') {
        staffGrid.style.backgroundImage = 'url("resources/images/Bass-clef.jpg")';
        currentClef = 'bass';
        if (!key == '' && !staffToggle) {
            staffFunction(globalScale);
        }
    } else if (clef == 'treble') {
        staffGrid.style.backgroundImage = 'url("resources/images/treble-clef.jpg")';
        currentClef = 'treble';
        if (!key == '' && !staffToggle) {
            staffFunction(globalScale);
        }
    } else if (clef == 'alto') {
        staffGrid.style.backgroundImage = 'url("resources/images/alto-clef.jpg")';
        currentClef = 'alto';
        if (!key == '' && !staffToggle) {
            staffFunction(globalScale);
        }
    } else if (clef == 'tenor') {
        staffGrid.style.backgroundImage = 'url("resources/images/tenor-clef.jpg")';
        currentClef = 'tenor';
        if (!key == '' && !staffToggle) {
            staffFunction(globalScale);
        }
    } 
}

$(function() {

    $(trebleButton).on('click', function () {
        clefFunction('treble');
    })

    $(bassButton).on('click', function () {
        clefFunction('bass');
    })

    $(altoButton).on('click', function () {
        clefFunction('alto');
    })

    $(tenorButton).on('click', function () {
        clefFunction('tenor');
    })

    $("button[class~='major-scale']").on('click', function () {
        if (!key == '' && !staffToggle) {
            staffFunction('major');
        }
    });

    $("button[class~='natural-minor']").on('click', function() {
        if (!key == '' && !staffToggle) {
            staffFunction('naturalMinor');
        }
    })

    $("button[class~='melodic-minor']").on('click', function() {
        if (!key == '' && !staffToggle) {
            staffFunction('melodicMinor');
        }
    })

    $("button[class~='harmonic-minor']").on('click', function() {
        if (!key == '' && !staffToggle) {

            staffFunction('harmonicMinor');
        }
    })

    $("button[class~='minor-pentatonic']").on('click', function() {
        if (!key == '' && !staffToggle) {

            staffFunction('minorPentatonic');
        }
    })

    $("button[class~='major-pentatonic']").on('click', function () {
        if (!key == '' && !staffToggle) {

            staffFunction('majorPentatonic');
        }
    })

    $("button[class~='blues-scale']").on('click', function() {
        if (!key == '' && !staffToggle) {

            staffFunction('blues');
        }
    })

    $("button[class~='dorian']").on('click', function() {
        if (!key == '' && !staffToggle) {

            staffFunction('dorian');
        }
    })

    $("button[class~='phyrigian']").on('click', function() {
        if (!key == '' && !staffToggle) {

            staffFunction('phyrigian');
        }
    })

    $("button[class~='lydian']").on('click', function() {
        if (!key == '' && !staffToggle) {

            staffFunction('lydian');
        }
    })

    $("button[class~='mixolydian']").on('click', function() {
        if (!key == '' && !staffToggle) {

            staffFunction('mixolydian');
        }
    })

    $("button[class~='aeolian']").on('click', function() {
        if (!key == '' && !staffToggle) {

            staffFunction('aeolian');
        }
    })

    $("button[class~='locrian']").on('click', function() {
        if (!key == '' && !staffToggle) {

            staffFunction('locrian');
        }
    })

})

export { notesArrayStaff, staffFunction, sigArray, currentClef, clefFunction, line1, line2, line3, line4, line5, line6, line7, line8, line9, line10, line11, line12, line13, line14, Bsig, Esig, Asig, Dsig, Gsig, Csig, Fsig };