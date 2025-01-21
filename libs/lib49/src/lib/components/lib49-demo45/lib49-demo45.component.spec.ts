import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo45Component } from './lib49-demo45.component';

describe('Lib49Demo45Component', () => {
  let component: Lib49Demo45Component;
  let fixture: ComponentFixture<Lib49Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
