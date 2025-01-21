import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo7Component } from './lib87-demo7.component';

describe('Lib87Demo7Component', () => {
  let component: Lib87Demo7Component;
  let fixture: ComponentFixture<Lib87Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
