import { TestBed, inject } from '@angular/core/testing';

import { AudioEngineService } from './audio-engine.service';

describe('AudioEngineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AudioEngineService]
    });
  });

  it('should be created', inject([AudioEngineService], (service: AudioEngineService) => {
    expect(service).toBeTruthy();
  }));
});
