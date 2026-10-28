import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogDemo } from './log-demo';

describe('LogDemo', () => {
  let component: LogDemo;
  let fixture: ComponentFixture<LogDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(LogDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
