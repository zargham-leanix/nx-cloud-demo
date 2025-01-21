import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo16Component } from './lib87-demo16.component';

describe('Lib87Demo16Component', () => {
  let component: Lib87Demo16Component;
  let fixture: ComponentFixture<Lib87Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
