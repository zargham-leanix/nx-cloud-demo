import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo39Component } from './lib87-demo39.component';

describe('Lib87Demo39Component', () => {
  let component: Lib87Demo39Component;
  let fixture: ComponentFixture<Lib87Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
