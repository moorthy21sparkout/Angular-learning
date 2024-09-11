import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-extended',
  standalone: true,
  imports: [],
  templateUrl: './extended.component.html',
  styleUrl: './extended.component.css'
})
export class ExtendedComponent extends BaseComponent {

  message: string = '';
  constructor() {
    super()   // call the constructure of the base component
  }

  /**
   * 
   * @returns 
   */
  override getValue(): string {
    return `welcome to the ${this.title}`;
  }


/**
 * pass the value form the view page using the get method
 */
  get getMessage() {
    return this.getValue(); // call the getValue using the overridden
  }

  /**
   * Show the messge for after click the button 
   */
  showMessage() {
    this.message = this.getValue();

    setTimeout(() => {
      this.message = ''
      alert("working good")
    }, 5000);

  }
}
