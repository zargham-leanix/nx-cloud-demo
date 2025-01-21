import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo36Component } from './lib68-demo36.component';

describe('Lib68Demo36Component', () => {
  let component: Lib68Demo36Component;
  let fixture: ComponentFixture<Lib68Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
