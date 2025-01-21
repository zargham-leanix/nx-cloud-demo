import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo36Component } from './lib56-demo36.component';

describe('Lib56Demo36Component', () => {
  let component: Lib56Demo36Component;
  let fixture: ComponentFixture<Lib56Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
