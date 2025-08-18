import { Component, OnInit } from '@angular/core';
import { NgClass, DecimalPipe } from '@angular/common';
import { DataReaderService } from '../../Services/data-reader.service';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'safe-harbor',
  standalone: true,
  // ...existing code...
  templateUrl: './safeHarbor.html',
  styleUrls: ['./safeHarbor.css']
})
export class SafeHarbor implements OnInit {
  safeHarborData: any;

  constructor(private dataReaderService: DataReaderService, public authService: AuthService) {}

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.dataReaderService.readJsonFile$('SafeHarborTestResults.json').subscribe(data => {
        console.log('Loaded SafeHarbor data:', data);
        this.safeHarborData = data.SafeHarborTestResults;
      });
    }
  }
}
