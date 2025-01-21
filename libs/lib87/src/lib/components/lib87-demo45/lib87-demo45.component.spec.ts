import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo45Component } from './lib87-demo45.component';

describe('Lib87Demo45Component', () => {
  let component: Lib87Demo45Component;
  let fixture: ComponentFixture<Lib87Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
