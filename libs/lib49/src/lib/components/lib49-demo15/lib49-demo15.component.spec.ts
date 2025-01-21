import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo15Component } from './lib49-demo15.component';

describe('Lib49Demo15Component', () => {
  let component: Lib49Demo15Component;
  let fixture: ComponentFixture<Lib49Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
