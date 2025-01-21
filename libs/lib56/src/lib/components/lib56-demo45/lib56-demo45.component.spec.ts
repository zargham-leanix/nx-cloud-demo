import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo45Component } from './lib56-demo45.component';

describe('Lib56Demo45Component', () => {
  let component: Lib56Demo45Component;
  let fixture: ComponentFixture<Lib56Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
