import { Component, OnInit } from '@angular/core';
import { DataReaderService } from '../../Services/data-reader.service';

@Component({
  selector: 'state-regulatory-tests',
  templateUrl: './stateRegulatoryTests.html',
  styleUrls: ['./stateRegulatoryTests.css']
})
export class StateRegulatoryTests implements OnInit {
  stateRegulatoryData: any;

  constructor(private dataReaderService: DataReaderService) {}

  ngOnInit() {
    this.dataReaderService.readJsonFile$('StateRegulatoryTestResults.json').subscribe(data => {
      this.stateRegulatoryData = data.StateRegulatoryTestResults;
    });
  }
}
