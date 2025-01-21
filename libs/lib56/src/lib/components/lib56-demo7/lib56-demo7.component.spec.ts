import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo7Component } from './lib56-demo7.component';

describe('Lib56Demo7Component', () => {
  let component: Lib56Demo7Component;
  let fixture: ComponentFixture<Lib56Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
