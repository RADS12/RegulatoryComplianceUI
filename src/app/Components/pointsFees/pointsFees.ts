import { Component, OnInit } from '@angular/core';
import { DataReaderService } from '../../Services/data-reader.service';

@Component({
  selector: 'points-fees',
  templateUrl: './pointsFees.html',
  styleUrls: ['./pointsFees.css']
})
export class PointsFees implements OnInit {
  pointsFeesData: any;

  constructor(private dataReaderService: DataReaderService) {}

  ngOnInit() {
    this.dataReaderService.readJsonFile$('PointsFeesTestResults.json').subscribe(data => {
      this.pointsFeesData = data.PointsFeesTestResults;
    });
  }
}
