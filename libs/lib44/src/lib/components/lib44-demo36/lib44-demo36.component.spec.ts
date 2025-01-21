import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo36Component } from './lib44-demo36.component';

describe('Lib44Demo36Component', () => {
  let component: Lib44Demo36Component;
  let fixture: ComponentFixture<Lib44Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
