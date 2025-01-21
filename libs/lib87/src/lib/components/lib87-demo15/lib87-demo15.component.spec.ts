import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo15Component } from './lib87-demo15.component';

describe('Lib87Demo15Component', () => {
  let component: Lib87Demo15Component;
  let fixture: ComponentFixture<Lib87Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
