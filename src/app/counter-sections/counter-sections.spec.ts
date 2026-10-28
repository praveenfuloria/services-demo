import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterSections } from './counter-sections';

describe('CounterSections', () => {
  let component: CounterSections;
  let fixture: ComponentFixture<CounterSections>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterSections],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterSections);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
