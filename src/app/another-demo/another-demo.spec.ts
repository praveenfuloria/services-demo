import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnotherDemo } from './another-demo';

describe('AnotherDemo', () => {
  let component: AnotherDemo;
  let fixture: ComponentFixture<AnotherDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnotherDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(AnotherDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
