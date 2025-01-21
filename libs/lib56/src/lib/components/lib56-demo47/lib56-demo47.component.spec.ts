import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo47Component } from './lib56-demo47.component';

describe('Lib56Demo47Component', () => {
  let component: Lib56Demo47Component;
  let fixture: ComponentFixture<Lib56Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
