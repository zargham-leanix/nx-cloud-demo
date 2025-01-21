import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo40Component } from './lib87-demo40.component';

describe('Lib87Demo40Component', () => {
  let component: Lib87Demo40Component;
  let fixture: ComponentFixture<Lib87Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
