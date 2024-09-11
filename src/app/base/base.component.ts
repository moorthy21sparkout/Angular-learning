import { Component } from '@angular/core';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
})
export class BaseComponent {

  title:string = "this is the base component";

  constructor(){}

  getValue():string{
    return `hello everyone ${this.title}`
  }
}
