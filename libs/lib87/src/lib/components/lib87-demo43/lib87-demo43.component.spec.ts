import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo43Component } from './lib87-demo43.component';

describe('Lib87Demo43Component', () => {
  let component: Lib87Demo43Component;
  let fixture: ComponentFixture<Lib87Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
