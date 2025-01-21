import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo7Component } from './lib49-demo7.component';

describe('Lib49Demo7Component', () => {
  let component: Lib49Demo7Component;
  let fixture: ComponentFixture<Lib49Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
