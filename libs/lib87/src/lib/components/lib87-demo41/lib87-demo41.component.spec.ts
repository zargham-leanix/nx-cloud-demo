import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo41Component } from './lib87-demo41.component';

describe('Lib87Demo41Component', () => {
  let component: Lib87Demo41Component;
  let fixture: ComponentFixture<Lib87Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
