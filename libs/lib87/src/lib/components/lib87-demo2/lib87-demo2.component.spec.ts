import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo2Component } from './lib87-demo2.component';

describe('Lib87Demo2Component', () => {
  let component: Lib87Demo2Component;
  let fixture: ComponentFixture<Lib87Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
