import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo25Component } from './lib87-demo25.component';

describe('Lib87Demo25Component', () => {
  let component: Lib87Demo25Component;
  let fixture: ComponentFixture<Lib87Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
