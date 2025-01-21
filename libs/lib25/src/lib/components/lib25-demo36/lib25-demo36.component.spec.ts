import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo36Component } from './lib25-demo36.component';

describe('Lib25Demo36Component', () => {
  let component: Lib25Demo36Component;
  let fixture: ComponentFixture<Lib25Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
