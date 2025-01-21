import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo36Component } from './lib49-demo36.component';

describe('Lib49Demo36Component', () => {
  let component: Lib49Demo36Component;
  let fixture: ComponentFixture<Lib49Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
