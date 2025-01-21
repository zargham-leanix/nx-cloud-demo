import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo36Component } from './lib52-demo36.component';

describe('Lib52Demo36Component', () => {
  let component: Lib52Demo36Component;
  let fixture: ComponentFixture<Lib52Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
