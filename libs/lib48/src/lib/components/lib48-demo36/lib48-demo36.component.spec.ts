import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo36Component } from './lib48-demo36.component';

describe('Lib48Demo36Component', () => {
  let component: Lib48Demo36Component;
  let fixture: ComponentFixture<Lib48Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
