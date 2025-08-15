import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataReaderService {
  private dataFiles = [
    'SafeHarborTestResults.json',
    'HighCostTestResults.json',
    'PointsFeesTestResults.json',
    'StateRegulatoryTestResults.json'
  ];

  constructor(private http: HttpClient) {}

  readJsonFile$(fileName: string): Observable<any> {
    const filePath = `assets/Data/${fileName}`;
    return this.http.get<any>(filePath);
  }

  readAllData$(): Observable<any> {
    const requests = this.dataFiles.map(file => this.readJsonFile$(file));
    return forkJoin(requests);
  }
}
