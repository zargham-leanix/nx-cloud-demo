import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo36Component } from './lib46-demo36.component';

describe('Lib46Demo36Component', () => {
  let component: Lib46Demo36Component;
  let fixture: ComponentFixture<Lib46Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
