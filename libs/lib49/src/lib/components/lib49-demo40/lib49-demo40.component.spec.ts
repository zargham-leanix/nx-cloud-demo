import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo40Component } from './lib49-demo40.component';

describe('Lib49Demo40Component', () => {
  let component: Lib49Demo40Component;
  let fixture: ComponentFixture<Lib49Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
