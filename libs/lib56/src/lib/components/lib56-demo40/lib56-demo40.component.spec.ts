import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo40Component } from './lib56-demo40.component';

describe('Lib56Demo40Component', () => {
  let component: Lib56Demo40Component;
  let fixture: ComponentFixture<Lib56Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
