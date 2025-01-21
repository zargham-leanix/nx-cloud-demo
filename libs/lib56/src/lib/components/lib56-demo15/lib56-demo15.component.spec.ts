import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo15Component } from './lib56-demo15.component';

describe('Lib56Demo15Component', () => {
  let component: Lib56Demo15Component;
  let fixture: ComponentFixture<Lib56Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
