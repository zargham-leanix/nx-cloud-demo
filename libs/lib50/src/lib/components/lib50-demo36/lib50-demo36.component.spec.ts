import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo36Component } from './lib50-demo36.component';

describe('Lib50Demo36Component', () => {
  let component: Lib50Demo36Component;
  let fixture: ComponentFixture<Lib50Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
