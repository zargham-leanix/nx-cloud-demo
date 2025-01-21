import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo21Component } from './lib33-demo21.component';

describe('Lib33Demo21Component', () => {
  let component: Lib33Demo21Component;
  let fixture: ComponentFixture<Lib33Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
