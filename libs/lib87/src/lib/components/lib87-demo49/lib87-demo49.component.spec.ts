import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo49Component } from './lib87-demo49.component';

describe('Lib87Demo49Component', () => {
  let component: Lib87Demo49Component;
  let fixture: ComponentFixture<Lib87Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
