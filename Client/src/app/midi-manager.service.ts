import { Injectable, OnInit } from '@angular/core';
import {} from 'webmidi'

@Injectable({
  providedIn: 'root'
})
export class MidiManagerService{

  private audioContext : AudioContext;

  constructor() { }
    

  public start() : void {
    if (navigator['requestMIDIAccess']) {
      console.log('WebFMSynth - This browser supports WebMIDI!');

      navigator.requestMIDIAccess().then((m : WebMidi.MIDIAccess) => {this.onMIDISuccess(m);}, (m : WebMidi.MIDIAccess) => {this.onMIDIFailure(m);});

    } else {
        console.log('WebFMSynth - WebMIDI is not supported in this browser.');
    }
  }

  public onMIDISuccess(access : WebMidi.MIDIAccess) : void {
    

    access.inputs.forEach((value: WebMidi.MIDIInput, key: string) => {
      console.log(key, value);

      value.onmidimessage = (e : WebMidi.MIDIMessageEvent) => { this.handleMIDIMessage(e);};
    });

  }

  public onMIDIFailure(access : WebMidi.MIDIAccess) : void {
    console.log('WebFMSynth - Failure to listen to incoming MIDI messages...');
  }

  public handleMIDIMessage(midiMessage : WebMidi.MIDIMessageEvent) : void {
    console.log("WebFMSynth - Midi message received..... " + midiMessage);
  }
  
}

 

  