import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo32Component } from './lib49-demo32.component';

describe('Lib49Demo32Component', () => {
  let component: Lib49Demo32Component;
  let fixture: ComponentFixture<Lib49Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
