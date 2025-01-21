import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo36Component } from './lib59-demo36.component';

describe('Lib59Demo36Component', () => {
  let component: Lib59Demo36Component;
  let fixture: ComponentFixture<Lib59Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
