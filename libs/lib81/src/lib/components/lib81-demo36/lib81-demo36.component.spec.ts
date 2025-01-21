import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo36Component } from './lib81-demo36.component';

describe('Lib81Demo36Component', () => {
  let component: Lib81Demo36Component;
  let fixture: ComponentFixture<Lib81Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
