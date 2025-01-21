import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo36Component } from './lib61-demo36.component';

describe('Lib61Demo36Component', () => {
  let component: Lib61Demo36Component;
  let fixture: ComponentFixture<Lib61Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
