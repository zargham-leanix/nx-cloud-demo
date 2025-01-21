import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo36Component } from './lib26-demo36.component';

describe('Lib26Demo36Component', () => {
  let component: Lib26Demo36Component;
  let fixture: ComponentFixture<Lib26Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
