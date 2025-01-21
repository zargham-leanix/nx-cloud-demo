import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo17Component } from './lib56-demo17.component';

describe('Lib56Demo17Component', () => {
  let component: Lib56Demo17Component;
  let fixture: ComponentFixture<Lib56Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
