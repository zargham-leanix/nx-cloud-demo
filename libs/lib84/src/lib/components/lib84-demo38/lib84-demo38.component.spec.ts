import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo38Component } from './lib84-demo38.component';

describe('Lib84Demo38Component', () => {
  let component: Lib84Demo38Component;
  let fixture: ComponentFixture<Lib84Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
