import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo36Component } from './lib55-demo36.component';

describe('Lib55Demo36Component', () => {
  let component: Lib55Demo36Component;
  let fixture: ComponentFixture<Lib55Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
