import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-life-cycle-hooks',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './life-cycle-hooks.component.html',
  styleUrl: './life-cycle-hooks.component.css'
})
export class LifeCycleHooksComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() value!: string

  values:string ="Virat"
  constructor() {
    console.log("the constructor is working");

  }
  ngOnInit(): void {
    console.log("noOnIt !!!");

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");

  }
  ngDoCheck(): void {
    console.log("ngDoCheck!!!!!");

  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit!!!");

  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");

  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");

  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");

  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy !!!");

  }
}

