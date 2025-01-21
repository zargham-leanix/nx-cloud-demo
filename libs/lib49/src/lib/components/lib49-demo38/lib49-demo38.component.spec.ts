import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo38Component } from './lib49-demo38.component';

describe('Lib49Demo38Component', () => {
  let component: Lib49Demo38Component;
  let fixture: ComponentFixture<Lib49Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
