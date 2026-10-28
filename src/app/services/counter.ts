import { Service } from '@angular/core';

@Service()
export class CounterService {
  private count: number = 0;

  getCount(): number {
    return this.count;
  }

  increment(): void {
    this.count = this.count + 1;
  }

  decrement(): void {
    this.count = this.count - 1;
  }

  reset(): void {
    this.count = 0;
  }
}
