import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo38Component } from './lib56-demo38.component';

describe('Lib56Demo38Component', () => {
  let component: Lib56Demo38Component;
  let fixture: ComponentFixture<Lib56Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
