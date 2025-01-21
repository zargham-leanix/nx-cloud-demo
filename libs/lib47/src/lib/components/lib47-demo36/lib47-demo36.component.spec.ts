import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo36Component } from './lib47-demo36.component';

describe('Lib47Demo36Component', () => {
  let component: Lib47Demo36Component;
  let fixture: ComponentFixture<Lib47Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
