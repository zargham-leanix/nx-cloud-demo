import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo36Component } from './lib67-demo36.component';

describe('Lib67Demo36Component', () => {
  let component: Lib67Demo36Component;
  let fixture: ComponentFixture<Lib67Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
