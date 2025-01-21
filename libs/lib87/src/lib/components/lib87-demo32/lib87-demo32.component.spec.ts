import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo32Component } from './lib87-demo32.component';

describe('Lib87Demo32Component', () => {
  let component: Lib87Demo32Component;
  let fixture: ComponentFixture<Lib87Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
