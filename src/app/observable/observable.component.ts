import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css'
})
export class ObservableComponent implements OnInit {

  message: string[] = [];

  constructor(private dataService: DataserviceService) { }
  ngOnInit(): void {
    this.dataService.getDataObserve().subscribe({
      next: (message) => this.message.push(message),
      complete: () => this.message.push("Observable:IsCompleted")
    });
  }


}
