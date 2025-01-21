import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo36Component } from './lib29-demo36.component';

describe('Lib29Demo36Component', () => {
  let component: Lib29Demo36Component;
  let fixture: ComponentFixture<Lib29Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
