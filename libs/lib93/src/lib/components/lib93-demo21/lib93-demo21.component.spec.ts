import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo21Component } from './lib93-demo21.component';

describe('Lib93Demo21Component', () => {
  let component: Lib93Demo21Component;
  let fixture: ComponentFixture<Lib93Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
