import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo36Component } from './lib53-demo36.component';

describe('Lib53Demo36Component', () => {
  let component: Lib53Demo36Component;
  let fixture: ComponentFixture<Lib53Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
