import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CounterService } from '../services/counter';

@Component({
  imports: [],
  selector: 'app-counter-display',
  styleUrl: './counter-display.css',
  templateUrl: './counter-display.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class CounterDisplay {
  constructor(private counterService: CounterService) {
    this.getCurrentCount();
  }

  getCurrentCount(): number {
    return this.counterService.getCount();
  }
}
