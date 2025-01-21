import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo38Component } from './lib87-demo38.component';

describe('Lib87Demo38Component', () => {
  let component: Lib87Demo38Component;
  let fixture: ComponentFixture<Lib87Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
