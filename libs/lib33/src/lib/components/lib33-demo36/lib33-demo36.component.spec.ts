import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo36Component } from './lib33-demo36.component';

describe('Lib33Demo36Component', () => {
  let component: Lib33Demo36Component;
  let fixture: ComponentFixture<Lib33Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
