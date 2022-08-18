import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'athlete-app';

  athletes = [
    {
      name: "Bill Russell",
      sport: "(NBA Basketball)",
      active: false
    },
    {
      name: "Gabriela Sabatini",
      sport: "(WTA Tennis)",
      active: false
    },
    {
      name: "Simone Biles",
      sport: "(Olympic Gymnast)",
      active: true
    }
  ]
}
