import { staffFunction, currentClef, clefFunction, line1, line2, line3, line4, line5, line6, line7, line8, line9, line10, line11, line12, line13, line14, Bsig, Esig, Asig, Dsig, Gsig, Csig, Fsig, notesArrayStaff, sigArray } from './staff.js';

/* #region  objects */

let toggle1 = {
    toggle: true,
    class: 'natural'
}
let toggle2 = {
    toggle: true,
    class: 'natural'
}
let toggle3 = {
    toggle: true,
    class: 'natural'
}
let toggle4 = {
    toggle: true,
    class: 'natural'
}
let toggle5 = {
    toggle: true,
    class: 'natural'
}
let toggle6 = {
    toggle: true,
    class: 'natural'
}
let toggle7 = {
    toggle: true,
    class: 'natural'
}

let toggle8 = {
    toggle: true,
    class: 'natural'
}
let toggle9 = {
    toggle: true,
    class: 'natural'
}
let toggle10 = {
    toggle: true,
    class: 'natural'
}
let toggle11 = {
    toggle: true,
    class: 'natural'
}
let toggle12 = {
    toggle: true,
    class: 'natural'
}
let toggle13 = {
    toggle: true,
    class: 'natural'
}
let toggle14 = {
    toggle: true,
    class: 'natural'
}



/* #endregion */

function assignStaff() {
    if (currentClef=='treble') {
        for (let j = 0; j < notesArrayStaff.length; j++) {
            switch(notesArrayStaff[j].getAttribute('id')) {
                case '14': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty bStaff');
                        break;
                    case '13': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty aStaff');
                        break;
                    case '12': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty gStaff');
                        break;
                    case '11': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty fStaff');
                        break;
                    case '10': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty eStaff');
                        break;
                    case '9': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty dStaff');
                        break;
                    case '8': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty cStaff');
                        break;
                    case '7': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty bStaff');
                        break;
                    case '6': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty aStaff');
                        break;
                    case '5': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty gStaff');
                        break;
                    case '4': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty fStaff');
                        break;
                    case '3': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty eStaff');
                        break;
                    case '2': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty dStaff');
                        break;
                    case '1': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty cStaff');
                        break;
            }
        }
    } else if (currentClef=='bass') {
        for (let j = 0; j < notesArrayStaff.length; j++) {
            switch(notesArrayStaff[j].getAttribute('id')) {
                case '14': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty dStaff');
                        break;
                    case '13': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty cStaff');
                        break;
                    case '12': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty bStaff');
                        break;
                    case '11': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty aStaff');
                        break;
                    case '10': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty gStaff');
                        break;
                    case '9': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty fStaff');
                        break;
                    case '8': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty eStaff');
                        break;
                    case '7': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty dStaff');
                        break;
                    case '6': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty cStaff');
                        break;
                    case '5': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty bStaff');
                        break;
                    case '4': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty aStaff');
                        break;
                    case '3': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty gStaff');
                        break;
                    case '2': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty fStaff');
                        break;
                    case '1': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty eStaff');
                        break;
            }
        }
    } else if (currentClef=='alto') {
        for (let j = 0; j < notesArrayStaff.length; j++) {
            switch(notesArrayStaff[j].getAttribute('id')) {
                case '14': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty cStaff');
                        break;
                    case '13': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty bStaff');
                        break;
                    case '12': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty aStaff');
                        break;
                    case '11': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty gStaff');
                        break;
                    case '10': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty fStaff');
                        break;
                    case '9': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty eStaff');
                        break;
                    case '8': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty dStaff');
                        break;
                    case '7': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty cStaff');
                        break;
                    case '6': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty bStaff');
                        break;
                    case '5': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty aStaff');
                        break;
                    case '4': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty gStaff');
                        break;
                    case '3': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty fStaff');
                        break;
                    case '2': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty eStaff');
                        break;
                    case '1': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty dStaff');
                        break;
            }
        }
    } if (currentClef=='tenor') {
        for (let j = 0; j < notesArrayStaff.length; j++) {
            switch(notesArrayStaff[j].getAttribute('id')) {
                case '14': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty aStaff');
                        break;
                    case '13': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty gStaff');
                        break;
                    case '12': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty fStaff');
                        break;
                    case '11': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty eStaff');
                        break;
                    case '10': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty dStaff');
                        break;
                    case '9': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty cStaff');
                        break;
                    case '8': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty bStaff');
                        break;
                    case '7': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty aStaff');
                        break;
                    case '6': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty gStaff');
                        break;
                    case '5': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty fStaff');
                        break;
                    case '4': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty eStaff');
                        break;
                    case '3': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty dStaff');
                        break;
                    case '2': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty cStaff');
                        break;
                    case '1': 
                        $(notesArrayStaff[j]).removeClass().addClass('empty bStaff');
                        break;
            }
        }
    }
}


function onHover(obj, toggle) {

    if (toggle.class === 'natural') {
        $(obj).removeClass('empty').addClass(toggle.class);
    }

        
        $(obj).on('click', function () {
            console.log(toggle.class);
            switch (toggle.class) {
                case 'natural':
                    $(obj).removeClass('natural');
                    $(obj).addClass('selected-natural');
                    toggle.class = 'selected-natural';
                    toggle.toggle = false;
                    break;
                case 'selected-natural':
                    $(obj).removeClass('selected-natural');
                    $(obj).addClass('sharp');
                    toggle.class = 'sharp';
                    toggle.toggle = false;
                    break;
                case 'sharp':
                    $(obj).removeClass('sharp');
                    $(obj).addClass('flat');
                    toggle.class = 'flat';
                    toggle.toggle = false;
                    break;
                case 'flat':
                    $(obj).removeClass('flat');
                    $(obj).addClass('double-flat');
                    toggle.class = 'double-flat';
                    toggle.toggle = false;
                    break;
                case 'double-flat':
                    $(obj).removeClass('double-flat');
                    $(obj).addClass('natural');
                    toggle.class = 'natural';
                    toggle.toggle = true;
                    break;
            }
            
        });
    

}

function offHover(toggle, obj) {

    switch (toggle.class) {
        case 'natural':
            $(obj).removeClass('natural sharp flat double-flat').addClass('empty');
            console.log('test');
            break;
        default:
            break;
    }

}


$(function() {

    $(line1).hover(function () {
        onHover(line1, toggle1);
    }, function () {
        offHover(toggle1, line1);
    } )

    $(line2).hover(function () {
        onHover(line2, toggle2);
    }, function () {
        offHover(toggle2, line2);
    } )

    $(line3).hover(function () {
        onHover(line3, toggle3);
    }, function () {
        offHover(toggle3, line3);
    } )

    $(line4).hover(function () {
        onHover(line4, toggle4);
    }, function () {
        offHover(toggle4, line4);
    } )

    $(line5).hover(function () {
        onHover(line5, toggle5);
    }, function () {
        offHover(toggle5, line5);
    } )

    $(line6).hover(function () {
        onHover(line6, toggle6);
    }, function () {
        offHover(toggle6, line6);
    } )

    $(line7).hover(function () {
        onHover(line7, toggle7);
    }, function () {
        offHover(toggle7, line7);
    } )

    $(line8).hover(function () {
        onHover(line8, toggle8);
    }, function () {
        offHover(toggle8, line8);
    } )

    $(line9).hover(function () {
        onHover(line9, toggle9);
    }, function () {
        offHover(toggle9, line9);
    } )

    $(line10).hover(function () {
        onHover(line10, toggle10);
    }, function () {
        offHover(toggle10, line10);
    } )

    $(line11).hover(function () {
        onHover(line11, toggle11);
    }, function () {
        offHover(toggle11, line11);
    } )

    $(line12).hover(function () {
        onHover(line12, toggle12);
    }, function () {
        offHover(toggle12, line12);
    } )

    $(line13).hover(function () {
        onHover(line13, toggle13);
    }, function () {
        offHover(toggle13, line13);
    } )

    $(line14).hover(function () {
        onHover(line14, toggle14);
    }, function () {
        offHover(toggle14, line14);
    } )

})

console.log(window.location.pathname)

export {assignStaff};