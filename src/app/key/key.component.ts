import { Component, Input, HostListener, HostBinding, Renderer } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { tap, map, filter } from 'rxjs/operators';

import { Key } from '../models/key';

@Component({
  selector: 'app-key',
  template: `
    <span class="label" >{{ key.label }}</span>
    <span class="sound">{{ key.sound }}</span>
  `,
  styleUrls: ['./key.component.css']
})
export class KeyComponent implements OnInit, OnDestroy {
  audio: any;
  private data$: Subject<Key> = new Subject();
  private subscription: Subscription;
  private listeners: Function[] = [];
  @Input() key: Key;
  @HostBinding('class.playing') private isPlaying: boolean;
  @HostListener('click', ['$event'])
  clickEvent(event: MouseEvent) {
    this.playSound();
  }

  constructor(private renderer: Renderer) {
    this.subscription = this.data$
      .pipe(
        filter(key => key.label.match(/[a-z]/i) != null),
        map((key: Key): HTMLAudioElement => new Audio(key.src)),
        tap(audio => audio.load()),
        tap(audio => (this.audio = audio))
      )
      .subscribe(audio => console.log(audio), err => console.log(err));
  }

  ngOnInit() {
    this.data$.next(this.key);
    // listen only to specified key event
    this.listeners.push(
      this.renderer.listen('document', `keydown.${this.key.label}`, () => {
        this.playSound();
      })
    );
    this.listeners.push(
      this.renderer.listen(this.audio, 'ended', () => {
        this.isPlaying = false;
      })
    );
  }

  ngOnDestroy() {
    this.listeners.forEach(listener => {
      listener();
    });
    this.subscription.unsubscribe();
  }

  playSound() {
    this.audio.currentTime = 0;
    this.audio.play();
    this.isPlaying = true;
  }
}
