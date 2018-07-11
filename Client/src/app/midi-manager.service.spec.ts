import { TestBed, inject } from '@angular/core/testing';

import { MidiManagerService } from './midi-manager.service';

describe('MidiManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MidiManagerService]
    });
  });

  it('should be created', inject([MidiManagerService], (service: MidiManagerService) => {
    expect(service).toBeTruthy();
  }));
});
