import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo36Component } from './lib100-demo36.component';

describe('Lib100Demo36Component', () => {
  let component: Lib100Demo36Component;
  let fixture: ComponentFixture<Lib100Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
