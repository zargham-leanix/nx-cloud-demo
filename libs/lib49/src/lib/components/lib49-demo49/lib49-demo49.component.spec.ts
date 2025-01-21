import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo49Component } from './lib49-demo49.component';

describe('Lib49Demo49Component', () => {
  let component: Lib49Demo49Component;
  let fixture: ComponentFixture<Lib49Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
