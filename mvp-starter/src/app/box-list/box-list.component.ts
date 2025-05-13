import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Box } from '../models/models/box.model';
import { BoxService } from '../services/services/box.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-box-list',
  standalone: true,
  imports: [CommonModule,RouterModule,HttpClientModule],
  templateUrl: './box-list.component.html',
  styleUrl: './box-list.component.scss',
})
export class BoxListComponent implements OnInit {
  boxes: Box[] = [];
  constructor(private boxService: BoxService) {}
  ngOnInit(): void {
    this.boxService.getBoxes().subscribe((data) => (this.boxes = data));
  }
}
