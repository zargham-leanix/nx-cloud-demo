import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo6Component } from './lib49-demo6.component';

describe('Lib49Demo6Component', () => {
  let component: Lib49Demo6Component;
  let fixture: ComponentFixture<Lib49Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
