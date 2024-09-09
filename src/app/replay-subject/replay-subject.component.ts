import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-replay-subject',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './replay-subject.component.html',
  styleUrl: './replay-subject.component.css'
})
export class ReplaySubjectComponent implements OnInit{

  replay:string[]=[];


  constructor(private dataService:DataserviceService){}
  ngOnInit(): void {
    this.dataService.getReplaySubject().subscribe((message)=>{
      this.replay.push(message);
    });
  }

  emitMessage():void{
    this.dataService.emitReplaySubject("this is the emit funcction for replay");
  }
  

}
