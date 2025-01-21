import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo49Component } from './lib56-demo49.component';

describe('Lib56Demo49Component', () => {
  let component: Lib56Demo49Component;
  let fixture: ComponentFixture<Lib56Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
