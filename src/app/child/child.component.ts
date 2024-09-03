import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit,OnChanges{

  /**
   * this is the decrate method
   */
  @Input() inputValue !: number

  public value !: string[];

/**
 *
 * @param changes
 * if any change the parent is reflact to the child based on the onchange the mathod
 */
  // ngOnChanges(changes: SimpleChanges): void {

  //   if(changes['inputValue']){
  //     console.log('the value is ',changes['inputValue'].currentValue);

  //   }
  // }
  // ngOnInit(): void {
  //   console.log("this is the value");
  //   this.value;

  // }
  @Input() valuesty!: string
  constructor() {
    console.log("child the constructor is working");

  }
  ngOnInit(): void {
    console.log("child noOnIt !!!");

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("child ngOnChanges");

  }
  ngDoCheck(): void {
    console.log("child ngDoCheck!!!!!");

  }
  ngAfterContentInit(): void {
    console.log("child ngAfterContentInit!!!");

  }
  ngAfterContentChecked(): void {
    console.log("child ngAfterContentChecked");

  }
  ngAfterViewInit(): void {
    console.log("child ngAfterViewInit");

  }
  ngAfterViewChecked(): void {
    console.log("child ngAfterViewChecked");

  }
  ngOnDestroy(): void {
    console.log("child ngOnDestroy !!!");

  }
}
