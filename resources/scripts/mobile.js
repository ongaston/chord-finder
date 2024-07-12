import { onNoteHover, offNoteHover } from "./fretboard";

/* #region variables */

const mobileCheck = document.getElementById('mobile-check');

let buttonContainer = document.getElementById('button-container');
let noteButtons = document.getElementsByClassName('note-button');

/* #endregion */

if ($(mobileCheck).css('display', 'block')) {

    const mobileButtonContainer = document.createElement('div');
    const mobileButtonUnderlay = document.createElement('div');
    const mobileMenuButton = document.createElement('span');
    const mobileMenuSymbol = document.createElement('i');

    document.body.insertBefore(mobileButtonContainer, document.getElementsByTagName('main')[1]);
    document.body.insertBefore(mobileButtonUnderlay, document.getElementsByTagName('main')[1]);
    document.body.insertBefore(mobileMenuButton, document.getElementsByTagName('main')[1]);
    $(mobileMenuSymbol).appendTo(mobileMenuButton);

    $(mobileButtonContainer).css({
        'display' : 'none',
        'width' : '90%',
        'z-index' : '12',
        'position' : 'absolute',
        'padding' : '0 3rem 3rem',
        'border-radius': '3px',
        'box-shadow' : 'inset 0 0 2000px rgb(255 255 255 / 50%',
        'justify-content' : 'center',
        'align-items' : 'center'
    });

    /*mobileButtonContainer.style.display = 'none';
    mobileButtonContainer.style.width = '90%';
    mobileButtonContainer.style.zIndex = '12';
    mobileButtonContainer.style.position = 'absolute';
    mobileButtonContainer.style.padding = '0 3rem 3rem';
    mobileButtonContainer.style.borderRadius = '3px';
    mobileButtonContainer.style.boxShadow = 'inset 0 0 2000px rgb(255 255 255 / 50%)';*/

    $(mobileButtonUnderlay).css({
        'display' : 'none',
        'width' : '100%',
        'height' : '100%',
        'position' : 'absolute',
        'background-color' : 'rgb(255 255 255)',
        'opacity' : '0.2',
        'z-index' : '11'
    });

    $(mobileMenuButton).css({
        'position' : 'relative',
        'left' : '97%'
    });

    $(mobileMenuSymbol).css({
        'class' : 'fa-solid fa-wave-square fa-xl',
        'position' : 'relative',
        'left' : '97%',
        'color' : 'antiquewhite'
    });

    /*mobileButtonUnderlay.style.display = 'none';
    mobileButtonUnderlay.style.width = '100%';
    mobileButtonUnderlay.style.height = '100%';
    mobileButtonUnderlay.style.position = 'absolute';


    mobileButtonContainer.style.justifyContent = 'center';
    mobileButtonContainer.style.alignItems = 'center';*/


    $(buttonContainer).appendTo(mobileButtonContainer);


}