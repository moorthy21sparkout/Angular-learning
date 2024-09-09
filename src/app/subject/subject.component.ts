import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent implements OnInit{

  message: string[] = [];

  constructor(private dataService:DataserviceService){}

  ngOnInit(): void {
    this.dataService.getDataSubject().subscribe((message)=>{
      this.message.push(message);
      this.emitMessage()
    });
  }

  emitMessage():void{
    this.dataService.emitDataValue("service:isCompleted");
  }
}
