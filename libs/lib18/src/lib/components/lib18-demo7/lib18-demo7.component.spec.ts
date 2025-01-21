import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo7Component } from './lib18-demo7.component';

describe('Lib18Demo7Component', () => {
  let component: Lib18Demo7Component;
  let fixture: ComponentFixture<Lib18Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
