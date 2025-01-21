import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo48Component } from './lib87-demo48.component';

describe('Lib87Demo48Component', () => {
  let component: Lib87Demo48Component;
  let fixture: ComponentFixture<Lib87Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
