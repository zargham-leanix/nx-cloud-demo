import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo17Component } from './lib49-demo17.component';

describe('Lib49Demo17Component', () => {
  let component: Lib49Demo17Component;
  let fixture: ComponentFixture<Lib49Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
