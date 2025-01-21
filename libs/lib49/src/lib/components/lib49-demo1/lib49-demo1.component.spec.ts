import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo1Component } from './lib49-demo1.component';

describe('Lib49Demo1Component', () => {
  let component: Lib49Demo1Component;
  let fixture: ComponentFixture<Lib49Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
