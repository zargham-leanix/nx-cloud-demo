import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo36Component } from './lib8-demo36.component';

describe('Lib8Demo36Component', () => {
  let component: Lib8Demo36Component;
  let fixture: ComponentFixture<Lib8Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
