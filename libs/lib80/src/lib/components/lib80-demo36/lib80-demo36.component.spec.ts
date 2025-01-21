import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo36Component } from './lib80-demo36.component';

describe('Lib80Demo36Component', () => {
  let component: Lib80Demo36Component;
  let fixture: ComponentFixture<Lib80Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
