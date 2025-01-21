import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo36Component } from './lib72-demo36.component';

describe('Lib72Demo36Component', () => {
  let component: Lib72Demo36Component;
  let fixture: ComponentFixture<Lib72Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
