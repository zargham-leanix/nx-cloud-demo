import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo33Component } from './lib87-demo33.component';

describe('Lib87Demo33Component', () => {
  let component: Lib87Demo33Component;
  let fixture: ComponentFixture<Lib87Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
