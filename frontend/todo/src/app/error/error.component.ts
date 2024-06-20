import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {

  errorMessage = 'An Error Occured! Contact Support at 123'

  constructor() { }

  ngOnInit() {
  }

}
