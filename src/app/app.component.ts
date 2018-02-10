import { Component } from '@angular/core';

import { Key } from './models/key';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  keys: Key[] = [
    { label: 'A', sound: 'clap', src: 'clap.wav' },
    { label: 'S', sound: 'hihat', src: 'hihat.wav' },
    { label: 'D', sound: 'kick', src: 'kick.wav' },
    { label: 'F', sound: 'openhat', src: 'openhat.wav' },
    { label: 'G', sound: 'boom', src: 'boom.wav' },
    { label: 'H', sound: 'snare', src: 'snare.wav' },
    { label: 'J', sound: 'tom', src: 'tom.wav' },
    { label: 'K', sound: 'tink', src: 'tink.wav' }
  ];
}
