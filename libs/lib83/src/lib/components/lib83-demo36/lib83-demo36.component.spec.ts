import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo36Component } from './lib83-demo36.component';

describe('Lib83Demo36Component', () => {
  let component: Lib83Demo36Component;
  let fixture: ComponentFixture<Lib83Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
