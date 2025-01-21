import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo14Component } from './lib87-demo14.component';

describe('Lib87Demo14Component', () => {
  let component: Lib87Demo14Component;
  let fixture: ComponentFixture<Lib87Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
