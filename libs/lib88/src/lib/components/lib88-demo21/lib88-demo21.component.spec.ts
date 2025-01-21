import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo21Component } from './lib88-demo21.component';

describe('Lib88Demo21Component', () => {
  let component: Lib88Demo21Component;
  let fixture: ComponentFixture<Lib88Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
