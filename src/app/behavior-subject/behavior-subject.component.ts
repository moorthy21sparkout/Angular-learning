import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-behavior-subject',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './behavior-subject.component.html',
  styleUrl: './behavior-subject.component.css'
})
export class BehaviorSubjectComponent implements OnInit{

  behavior:string[]=[];

  constructor(private dataService:DataserviceService){}
  ngOnInit(): void {
    this.dataService.getBehaviorSubject().subscribe((responce)=>{
      this.behavior.push(responce);
    });
  }

  emitMessage(){
    this.dataService.emitBehaviorSubject("this is the data behaviour for the behaviourSubject");
  }

}
