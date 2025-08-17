import { Component, OnInit } from '@angular/core';
import { DataReaderService } from '../../Services/data-reader.service';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'points-fees',
  templateUrl: './pointsFees.html',
  styleUrls: ['./pointsFees.css']
})
export class PointsFees implements OnInit {
  pointsFeesData: any;

  constructor(private dataReaderService: DataReaderService, public authService: AuthService) {}

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.dataReaderService.readJsonFile$('PointsFeesTestResults.json').subscribe(data => {
        this.pointsFeesData = data.PointsFeesTestResults;
      });
    }
  }
}
