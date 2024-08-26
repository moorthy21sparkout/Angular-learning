import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

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
}
