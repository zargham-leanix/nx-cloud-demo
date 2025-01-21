import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo9Component } from './lib49-demo9.component';

describe('Lib49Demo9Component', () => {
  let component: Lib49Demo9Component;
  let fixture: ComponentFixture<Lib49Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
