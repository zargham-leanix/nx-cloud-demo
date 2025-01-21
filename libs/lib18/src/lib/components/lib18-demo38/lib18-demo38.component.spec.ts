import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo38Component } from './lib18-demo38.component';

describe('Lib18Demo38Component', () => {
  let component: Lib18Demo38Component;
  let fixture: ComponentFixture<Lib18Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
