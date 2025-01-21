import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo9Component } from './lib87-demo9.component';

describe('Lib87Demo9Component', () => {
  let component: Lib87Demo9Component;
  let fixture: ComponentFixture<Lib87Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
