import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MidiManagerService } from './midi-manager.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  public constructor(private midiManager : MidiManagerService) {
    
    console.log("WebFMSynth - Starting...");

    midiManager.start();
  }

}
