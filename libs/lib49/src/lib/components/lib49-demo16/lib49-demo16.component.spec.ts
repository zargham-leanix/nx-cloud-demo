import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo16Component } from './lib49-demo16.component';

describe('Lib49Demo16Component', () => {
  let component: Lib49Demo16Component;
  let fixture: ComponentFixture<Lib49Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
