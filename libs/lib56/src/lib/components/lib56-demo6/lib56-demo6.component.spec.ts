import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo6Component } from './lib56-demo6.component';

describe('Lib56Demo6Component', () => {
  let component: Lib56Demo6Component;
  let fixture: ComponentFixture<Lib56Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
