import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo27Component } from './lib49-demo27.component';

describe('Lib49Demo27Component', () => {
  let component: Lib49Demo27Component;
  let fixture: ComponentFixture<Lib49Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
