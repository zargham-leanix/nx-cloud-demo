import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo21Component } from './lib25-demo21.component';

describe('Lib25Demo21Component', () => {
  let component: Lib25Demo21Component;
  let fixture: ComponentFixture<Lib25Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
