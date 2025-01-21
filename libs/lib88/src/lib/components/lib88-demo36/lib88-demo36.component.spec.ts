import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo36Component } from './lib88-demo36.component';

describe('Lib88Demo36Component', () => {
  let component: Lib88Demo36Component;
  let fixture: ComponentFixture<Lib88Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
