import { DataReaderService } from './data-reader.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('DataReaderService', () => {
  let service: DataReaderService;
  let mockHttpClient: any;

  beforeEach(() => {
    mockHttpClient = {
      get: jasmine.createSpy('get').and.callFake((url: string) => of({ url }))
    };
    service = new DataReaderService(mockHttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should read a JSON file', (done) => {
    service.readJsonFile$('test.json').subscribe(data => {
      expect(mockHttpClient.get).toHaveBeenCalledWith('assets/Data/test.json');
      expect(data.url).toBe('assets/Data/test.json');
      done();
    });
  });

  it('should read all data files', (done) => {
    service.readAllData$().subscribe(dataArr => {
      expect(dataArr.length).toBe(4);
      done();
    });
  });
});
