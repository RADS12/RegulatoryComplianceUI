import { Component, OnInit } from '@angular/core';
import { DataReaderService } from '../../Services/data-reader.service';

@Component({
  selector: 'high-cost',
  templateUrl: './highCost.html',
  styleUrls: ['./highCost.css']
})
export class HighCost implements OnInit {
  highCostData: any;

  constructor(private dataReaderService: DataReaderService) {}

  ngOnInit() {
    this.dataReaderService.readJsonFile$('HighCostTestResults.json').subscribe(data => {
      this.highCostData = data.HighCostTestResults;
    });
  }
}
