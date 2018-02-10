import { Component } from '@angular/core';

import { Key } from './models/key';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly basePath = 'https://firebasestorage.googleapis.com/v0/b/angularsounds-79988.appspot.com/o/';
  readonly query = '?alt=media&token=bc879236-6668-44f4-b954-3388cc56240a';
  keys: Key[] = [
    { label: 'A', sound: 'clap', src: `${this.basePath}clap.wav${this.query}` },
    { label: 'S', sound: 'hihat', src: `${this.basePath}hihat.wav${this.query}` },
    { label: 'D', sound: 'kick', src: `${this.basePath}kick.wav${this.query}` },
    { label: 'F', sound: 'openhat', src: `${this.basePath}openhat.wav${this.query}` },
    { label: 'G', sound: 'boom', src: `${this.basePath}boom.wav${this.query}` },
    { label: 'H', sound: 'snare', src: `${this.basePath}snare.wav${this.query}` },
    { label: 'J', sound: 'tom', src: `${this.basePath}tom.wav${this.query}` },
    { label: 'K', sound: 'tink', src: `${this.basePath}tink.wav${this.query}` }
  ];
}
