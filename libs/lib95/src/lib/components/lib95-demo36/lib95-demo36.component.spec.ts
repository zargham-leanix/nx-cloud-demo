import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo36Component } from './lib95-demo36.component';

describe('Lib95Demo36Component', () => {
  let component: Lib95Demo36Component;
  let fixture: ComponentFixture<Lib95Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
