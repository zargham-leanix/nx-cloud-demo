import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo38Component } from './lib12-demo38.component';

describe('Lib12Demo38Component', () => {
  let component: Lib12Demo38Component;
  let fixture: ComponentFixture<Lib12Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
