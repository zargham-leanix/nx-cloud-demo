import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo13Component } from './lib87-demo13.component';

describe('Lib87Demo13Component', () => {
  let component: Lib87Demo13Component;
  let fixture: ComponentFixture<Lib87Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
