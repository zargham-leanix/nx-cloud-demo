import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo27Component } from './lib87-demo27.component';

describe('Lib87Demo27Component', () => {
  let component: Lib87Demo27Component;
  let fixture: ComponentFixture<Lib87Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
