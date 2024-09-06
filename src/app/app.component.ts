import { CommonModule } from '@angular/common';
import { Component, input, OnInit, TrackByFunction ,signal,Signal} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { ChildComponent } from "./child/child.component";
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, ChildComponent,LifeCycleHooksComponent,HighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {

  /**
   * string - interpolation
   * Property Binding
   * Event Binding
   */
  title = 'Learn-angular';
  fullName = "abu-Samson";
  isDisabled = true;
  // isActive = true;
  color = 'red';
  inputValue = "Go Back Your Home";
  private value: number = 123;
  user !: string[];
  showData: boolean = false;
  valuedata:string = "Moorthy"
  name =''
  count =signal(0);
  isActive = signal(false);
  showAlert = false;
  private valueSignal = Signal.create(0);



  setSignalValue(newValue:number){
    this.valueSignal.set(newValue)
  }
  getSignalValue(){
    this.valueSignal.update(value => value+1)
  }
  mutateSignalValue(factor:number){
    this.valueSignal.mutate(value => value * factor);
  }
  /**
   * Toggle
   */

  toggle(){
    this.isActive.set(!this.isActive())
  
  if(this.isActive()){
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 4000);
  }
}
  /**
   * localstroage
   */

  setLocalStorage(){
    localStorage.setItem("username","kesavan")
    console.log("the localstorage set value is username=Kesavan");
    
  }
  getLocalStorage(){
    const name = localStorage.getItem('username');
    console.log('the get the value is',name);
    
  }
  removeLocalStorage(){
    localStorage.removeItem('username');
    console.log("the remove value is =username");
    
  }
  /**
   * to set the value from the session using the sessionstroage
   */

  setSession(){
    sessionStorage.setItem('city','Tirupur');
    console.log("to set the value from the session stroage city:Tirupur");
    
  }

  getSession(){
  const cityName = sessionStorage.getItem('city');
  console.log("to get the value form  the session stroage",cityName);
  
  }
  removeSession(){
    const cityRemove=sessionStorage.removeItem('city');
    console.log("remove the item in session",cityRemove);
    
  }
/**
 * signal is use for automaically update value .it no need of change 
 * if using the observable ->it can't be update automatically . if you need the update using the subscribe or async pipes.
 * but signal is automatically updated. 
 * 
 */
  countIncreament(){
    return this.count.set(this.count()+1)
  }
  countDecreament(){
    return this.count.set(this.count()-1);
  }
  logCount() {
    console.log('Current count value:', this.count()); 
  }
  changeEvent(newEvent:string){
    debugger
    console.log("the value of modelchange event is",newEvent);
    
  }

  items=[
    {id:1,name:"ram",age:21},
    {id:2,name:"raj",age:22},
    {id:3,name:"kumar",age:24}
  ]

  datanew = 2;
  trackById(index: number, item: { id: number; name: string; age: number }): number {
    console.log('TrackBy called for item:', item);
    return item.id; 
  }

  addItems(){
    const data =this.items.push({id:5,name:"hari",age:34});
    console.log("the value is",this.items);
    
  }

  getValue() {
    return "hello buddy is working good";
  }

  clickValue = 8;
  click() {
    this.clickValue--;
  }

  message = "";
  onButtonClick() {
    this.message = "the button was Click.Your data is Transfor to another person...!";
  }

  inputText = "";
  onInputChange(event: any) {
    this.inputText = event.target.value
  }

  doubleClick = '';
  onDoubleClick() {
    this.doubleClick = 'the value is double time clicked'
  }

  onSelection = '';

  onSelect(event: any) {
    this.onSelection = event.target.value;
  }

  selectCount = 0;

  onclick() {
    this.selectCount++;
    if (this.selectCount >= 5) {
      alert("you click the 5 time !,so wait for a minute")
      this.selectCount = 0;
    }
  }

  focusMessage = '';

  onfocus() {
    this.focusMessage = "the message was focused";
  }
  onBlur() {
    this.focusMessage = "not focus";
  }

  userList = [
    { id: 1, name: "sudhan" },
    { id: 2, name: "ram" },
    { id: 3, name: "raj" }
  ]
  trackByUserId(index: number, user: any): number {
    return user.id;
  }

  // checkObservable = new Observable((responce) => {
  //   console.log("working");
  //   setTimeout(() => { responce.next('1') }, 1000);
  //   setTimeout(() => { responce.next('2') }, 2000);
  //   setTimeout(() => { responce.next('3') }, 3000);
  //   setTimeout(() => { responce.complete() }, 43330);
  //   // setTimeout(() => {  responce.error(new Error("some thing is went to worng .please try it later"))}, 5000);
  //   setTimeout(() => { responce.next('6') }, 6000);
  //   setTimeout(() => { responce.next('7') }, 7000);
  //   setTimeout(() => { responce.error('8') }, 8000);
    // console.log('1');
    // console.log('2');
    // console.log('3');
    // console.log('4');
    // console.log('5');
    // console.log('6');
    // console.log('7');
  // })
  // ngOnInit(): void {
  //   this.checkObservable.subscribe((value) => {
  //     console.log(value);

  //   }, (error) => {
  //     // alert(error.message)
  //   })
  // }
  /**
   * this method is use for the value is pass the private method
   * so we get the value and the set the value for the current value
   */
  // get counter() {
  //   return this.value
  // }

  // set counter(nums: number) {
  //   this.value = nums;
  // }
  // increament() {
  //   return this.counter++

  // }

  // decreament() {
  //   return this.counter--
  // }

  // show() {
  //   this.showData = !this.showData
  // }
}
