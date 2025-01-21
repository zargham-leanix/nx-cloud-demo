import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo42Component } from './lib56-demo42.component';

describe('Lib56Demo42Component', () => {
  let component: Lib56Demo42Component;
  let fixture: ComponentFixture<Lib56Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
