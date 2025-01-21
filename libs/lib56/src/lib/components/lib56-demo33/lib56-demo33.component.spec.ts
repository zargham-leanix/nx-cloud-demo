import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo33Component } from './lib56-demo33.component';

describe('Lib56Demo33Component', () => {
  let component: Lib56Demo33Component;
  let fixture: ComponentFixture<Lib56Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
