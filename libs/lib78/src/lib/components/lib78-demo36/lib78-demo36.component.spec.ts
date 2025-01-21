import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo36Component } from './lib78-demo36.component';

describe('Lib78Demo36Component', () => {
  let component: Lib78Demo36Component;
  let fixture: ComponentFixture<Lib78Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
