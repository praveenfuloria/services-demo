import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogDemo } from './log-demo/log-demo';
import { AnotherDemo } from './another-demo/another-demo';
import { CounterControls } from './counter-controls/counter-controls';
import { CounterDisplay } from './counter-display/counter-display';
import { CounterStatus } from './counter-status/counter-status';
import { CounterSections } from './counter-sections/counter-sections';

@Component({
  imports: [
    RouterOutlet,
    LogDemo,
    AnotherDemo,
    CounterControls,
    CounterDisplay,
    CounterStatus,
    CounterSections,
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class App {}
