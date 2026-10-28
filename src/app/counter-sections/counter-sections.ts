import { Component } from '@angular/core';
import { CounterControls } from '../counter-controls/counter-controls';
import { CounterDisplay } from '../counter-display/counter-display';
import { CounterStatus } from '../counter-status/counter-status';
import { CounterService } from '../services/counter';

@Component({
  imports: [CounterControls, CounterDisplay, CounterStatus],
  selector: 'app-counter-sections',
  styleUrl: './counter-sections.css',
  templateUrl: './counter-sections.html',
  providers: [CounterService],
})
export class CounterSections {}
