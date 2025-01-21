import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo42Component } from './lib87-demo42.component';

describe('Lib87Demo42Component', () => {
  let component: Lib87Demo42Component;
  let fixture: ComponentFixture<Lib87Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
