import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo37Component } from './lib49-demo37.component';

describe('Lib49Demo37Component', () => {
  let component: Lib49Demo37Component;
  let fixture: ComponentFixture<Lib49Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
