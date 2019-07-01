import { TestBed } from '@angular/core/testing';

import { SongsService } from './songs.service';

describe('SongsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SongsService = TestBed.get(SongsServiceService);
    expect(service).toBeTruthy();
  });
});
