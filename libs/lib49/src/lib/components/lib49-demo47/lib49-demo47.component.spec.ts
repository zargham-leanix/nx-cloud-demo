import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo47Component } from './lib49-demo47.component';

describe('Lib49Demo47Component', () => {
  let component: Lib49Demo47Component;
  let fixture: ComponentFixture<Lib49Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
