import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Box } from '../models/models/box.model';
import { BoxService } from '../services/services/box.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subscribe',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.scss'
})
export class SubscribeComponent implements OnInit {
  box: Box | null = null;
  email: string = '';
  constructor(
    private route: ActivatedRoute,
    private boxService: BoxService
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.boxService.getBoxById(id).subscribe(data => this.box = data);
  }
  subscribe(): void {
    // Mock subscription flow
    alert(`Subscribed ${this.email} to ${this.box?.title}`);
  }
}
