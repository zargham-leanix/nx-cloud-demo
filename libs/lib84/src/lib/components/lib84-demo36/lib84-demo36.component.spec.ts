import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo36Component } from './lib84-demo36.component';

describe('Lib84Demo36Component', () => {
  let component: Lib84Demo36Component;
  let fixture: ComponentFixture<Lib84Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
