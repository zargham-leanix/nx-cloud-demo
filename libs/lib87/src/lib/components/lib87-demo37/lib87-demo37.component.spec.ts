import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo37Component } from './lib87-demo37.component';

describe('Lib87Demo37Component', () => {
  let component: Lib87Demo37Component;
  let fixture: ComponentFixture<Lib87Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
