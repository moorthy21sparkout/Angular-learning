import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-async-subject',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './async-subject.component.html',
  styleUrl: './async-subject.component.css'
})
export class AsyncSubjectComponent implements OnInit {

  dataAsync: string[] = [];

  constructor(private dataService: DataserviceService) { }

  ngOnInit(): void {
    this.dataService.getAsyncSubject().subscribe((responce) => {
      this.dataAsync.push(responce);
    })
  }

  emitMessage(): void {
    this.dataService.emitAsyncSubject("this is the behavior for the emit message in async subject");
  }

  completeSubject(): void {
    this.dataService.completeAsyncSubject();
  }
}
