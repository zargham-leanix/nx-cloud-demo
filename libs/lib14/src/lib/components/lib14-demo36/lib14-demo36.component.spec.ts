import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo36Component } from './lib14-demo36.component';

describe('Lib14Demo36Component', () => {
  let component: Lib14Demo36Component;
  let fixture: ComponentFixture<Lib14Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
