import { Component, OnInit } from '@angular/core';
import { DataReaderService } from '../../Services/data-reader.service';

@Component({
  selector: 'safe-harbor',
  templateUrl: './safeHarbor.html',
  styleUrls: ['./safeHarbor.css']
})
export class SafeHarbor implements OnInit {
  safeHarborData: any;

  constructor(private dataReaderService: DataReaderService) {}

  ngOnInit() {
    this.dataReaderService.readJsonFile$('SafeHarborTestResults.json').subscribe(data => {
      console.log('Loaded SafeHarbor data:', data);
      this.safeHarborData = data.SafeHarborTestResults;
    });
  }
}
