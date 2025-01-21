import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo17Component } from './lib87-demo17.component';

describe('Lib87Demo17Component', () => {
  let component: Lib87Demo17Component;
  let fixture: ComponentFixture<Lib87Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
