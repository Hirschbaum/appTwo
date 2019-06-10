import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the Jungle';
  lineOne = 'Jungle, welcome to the jungle';
  lastLine = "Yeah, Guns N' Roses... not my music";
  nextLines = [
    {line: 'Watch it bring you to your '},
    {line: 'shun n-n-n-n-n-n-n-n knees, knees'},
    {line: 'Uh, I, I want to watch you bleed...'},
    ];
}
