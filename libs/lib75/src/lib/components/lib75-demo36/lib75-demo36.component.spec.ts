import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo36Component } from './lib75-demo36.component';

describe('Lib75Demo36Component', () => {
  let component: Lib75Demo36Component;
  let fixture: ComponentFixture<Lib75Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
