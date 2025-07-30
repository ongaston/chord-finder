let midi = null;
let midiWindowToggle = true;
let biggerContainer = document.getElementById('bigger-container');

function onMIDISuccess(midiAccess) {
    console.log('MIDI Ready');
    midi = midiAccess;
    const inputs = midiAccess.inputs.values();
    const outputs = midiAccess.outputs.values();
    midiAccess.onstatechange = (event) => {
        listInputsAndOutputs(event);

        if (midiWindowToggle) {

        }
        else if (!midiWindowToggle) {

        }
    }
    Array.from(midiAccess.inputs).forEach((input) => {
        input[1].onmidimessage = (msg) => {console.log(msg)};
    })
}

function onMIDIFail(msg) {
    console.error(`failed to get MIDI access- ${msg}`);
}

navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFail);

function onMIDIMessage(event) {
    let str = ``;
    for (const character of event.data) {
        str += `0x${character.toString(16)}`;
    }
    console.log(str);
}

function startLoggingMIDIInput(midiAccess, indexOfPort) {
    midiAccess.inputs.forEach((entry) => {entry.onmidimessage = onMIDIMessage});
}

function listInputsAndOutputs(midiAccess) {
    for (const entry of midiAccess.inputs) {
        const input = entry[1];
        console.log(`Input port [type: '${input.type}']` + 
        ` id: '${input.id}'` +
        `name: '${input.name}'`);
    }
    for (const entry of midiAccess.outputs) {
        const output = entry[1];
        console.log(`Output port [type: '${output.type}'] id: '${output.id}' name: '${output.name}'`);
    }
}

//listInputsAndOutputs(midi);

function onMIDIConnection () {



}

function getLocalStream() {
   let inputList = [];
  navigator.mediaDevices
    .getUserMedia({ video: false, audio: true })
    .then((stream) => {
      window.localStream = stream; // A
      window.localAudio.srcObject = stream; // B
      //window.localAudio.autoplay = true; // C
    })
    .catch((err) => {
      //console.error(`you got an error: ${err}`);
    });
    //log list of devices, separate out inputs
  navigator.mediaDevices.enumerateDevices().then((devices) => {
      devices.forEach((device) => {
          console.log(device); // an InputDeviceInfo object if the device is an input device, otherwise a MediaDeviceInfo object.
          console.log(device.kind);
          if (device.kind == 'audioinput') {
              inputList.push(device)
          }
    });
  });
    console.log(inputList);
    return inputList;
}
getLocalStream();

