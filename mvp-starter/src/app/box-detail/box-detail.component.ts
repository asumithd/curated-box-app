import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Box } from '../models/models/box.model';
import { BoxService } from '../services/services/box.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-box-detail',
  standalone: true,
  imports: [CommonModule,RouterModule,HttpClientModule],
  templateUrl: './box-detail.component.html',
  styleUrl: './box-detail.component.scss'
})
export class BoxDetailComponent implements OnInit {
  box: Box | null = null;
  constructor(
    private route: ActivatedRoute,
    private boxService: BoxService
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.boxService.getBoxById(id).subscribe(data => this.box = data);
  }
}
