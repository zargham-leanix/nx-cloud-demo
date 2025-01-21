import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo36Component } from './lib41-demo36.component';

describe('Lib41Demo36Component', () => {
  let component: Lib41Demo36Component;
  let fixture: ComponentFixture<Lib41Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
