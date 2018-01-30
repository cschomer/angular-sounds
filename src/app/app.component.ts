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
    { label: 'A', sound: 'clap', src: '/assets/sounds/clap.wav' },
    { label: 'S', sound: 'hihat', src: '/assets/sounds/hihat.wav' },
    { label: 'D', sound: 'kick', src: '/assets/sounds/kick.wav' },
    { label: 'F', sound: 'openhat', src: '/assets/sounds/openhat.wav' },
    { label: 'G', sound: 'boom', src: '/assets/sounds/boom.wav' },
    { label: 'H', sound: 'snare', src: '/assets/sounds/snare.wav' },
    { label: 'J', sound: 'tom', src: '/assets/sounds/tom.wav' },
    { label: 'K', sound: 'tink', src: '/assets/sounds/tink.wav' }
  ];
}
