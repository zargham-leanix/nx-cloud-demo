import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo8Component } from './lib87-demo8.component';

describe('Lib87Demo8Component', () => {
  let component: Lib87Demo8Component;
  let fixture: ComponentFixture<Lib87Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
