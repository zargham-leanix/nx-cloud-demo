import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo33Component } from './lib49-demo33.component';

describe('Lib49Demo33Component', () => {
  let component: Lib49Demo33Component;
  let fixture: ComponentFixture<Lib49Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
