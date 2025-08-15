import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  @Input() isAnyTabFailed: boolean = false;
}
