import { fretboardDropdown, fretboardToggle, fretDropdownContainer, gridContainer, modifyFretToggle } from "./dropdowns.js";
import { notesArrayFrets, fretboardFunction } from "./fretboard.js";
import { rotateToggle } from "./utilities.js";
import { key } from './buttons.js';



$(function () {


    $(window).on('load', function () {
        modifyFretToggle(false);
        if (window.location.pathname == '/input.html') {
            for (let i = 0; i < notesArrayFrets.length; i++) {
                $(notesArrayFrets[i]).css({
                    width: '25px',
                    height: '25px'
                })
            }
        }
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
    })

})