import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo36Component } from './lib4-demo36.component';

describe('Lib4Demo36Component', () => {
  let component: Lib4Demo36Component;
  let fixture: ComponentFixture<Lib4Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
