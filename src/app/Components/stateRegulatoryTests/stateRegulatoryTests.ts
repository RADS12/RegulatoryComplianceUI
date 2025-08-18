import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { DataReaderService } from '../../Services/data-reader.service';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'state-regulatory-tests',
  standalone: true,
  imports: [NgClass],
  templateUrl: './stateRegulatoryTests.html',
  styleUrls: ['./stateRegulatoryTests.css']
})
export class StateRegulatoryTests implements OnInit {
  stateRegulatoryData: any;

  constructor(private dataReaderService: DataReaderService, public authService: AuthService) {}

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.dataReaderService.readJsonFile$('StateRegulatoryTestResults.json').subscribe(data => {
        this.stateRegulatoryData = data.StateRegulatoryTestResults;
      });
    }
  }
}
