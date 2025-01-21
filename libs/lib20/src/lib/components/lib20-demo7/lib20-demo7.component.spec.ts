import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo7Component } from './lib20-demo7.component';

describe('Lib20Demo7Component', () => {
  let component: Lib20Demo7Component;
  let fixture: ComponentFixture<Lib20Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
