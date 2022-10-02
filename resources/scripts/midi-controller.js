


const controller = {
    inputs : { 
        id: '1',
        manufacturer: 'me',
        name: 'controller',
        type: 'input',
        version: '1',
        state: 'connected',
        connection: 'open'
      },
}




$(function () {

    $(window).on('keydown', function (event) {
        console.log(event.originalEvent.key);
    })

})