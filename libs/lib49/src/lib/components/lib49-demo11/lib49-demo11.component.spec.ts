import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo11Component } from './lib49-demo11.component';

describe('Lib49Demo11Component', () => {
  let component: Lib49Demo11Component;
  let fixture: ComponentFixture<Lib49Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
