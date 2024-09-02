import { CommonModule } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  /**
   * string - interpolation
   * Property Binding
   * Event Binding
   */
  title = 'Learn-angular';
  fullName= "abu-Samson";
  isDisabled = true;
  isActive = true;
  color ='red';
  inputValue = "Go Back Your Home";
  getValue(){
    return "hello buddy is working good";
  }

  clickValue = 8;
  click(){
    this.clickValue--;
  }

  message ="";
  onButtonClick(){
    this.message = "the button was Click.Your data is Transfor to another person...!";
  }

  inputText = "";
  onInputChange(event: any){
    this.inputText= event.target.value
  }

  doubleClick = '';
  onDoubleClick(){
    this.doubleClick = 'the value is double time clicked'
  }

  onSelection = '';

  onSelect(event: any){
    this.onSelection= event.target.value;
  }

  selectCount = 0;

  onclick(){
    this.selectCount++;
    if(this.selectCount>=5){
    alert("you click the 5 time !,so wait for a minute")
    this.selectCount = 0;
    }
  }

  focusMessage = '';

  onfocus(){
    this.focusMessage = "the message was focused";
  }
  onBlur(){
    this.focusMessage = "not focus";
  }

  userList =[
    {id:1, name: "sudhan"},
    {id:2, name: "ram"},
    {id:3, name: "raj"}
  ]
  trackByUserId(index:number,user:any):number{
    return user.id;
  }

  checkObservable =new Observable((responce)=>{
    console.log("working");
    setTimeout(() => {  responce.next('1')}, 1000);
    setTimeout(() => {  responce.next('2')}, 2000);
    setTimeout(() => {  responce.next('3')}, 3000);
    setTimeout(() => {  responce.complete()}, 43330);
    setTimeout(() => {  responce.error(new Error("some thing is went to worng .please try it later"))}, 5000);
    setTimeout(() => {  responce.next('6')}, 6000);
    setTimeout(() => {  responce.next('7')}, 7000);
    setTimeout(() => {  responce.error('8')}, 8000);
    // console.log('1');
    // console.log('2');
    // console.log('3');
    // console.log('4');
    // console.log('5');
    // console.log('6');
    // console.log('7');
  })
ngOnInit(): void {
  this.checkObservable .subscribe((value)=>{
    console.log(value);

  },(error)=>{
    alert(error.message)
  })
}
}
