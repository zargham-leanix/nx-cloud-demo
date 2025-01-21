import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo21Component } from './lib81-demo21.component';

describe('Lib81Demo21Component', () => {
  let component: Lib81Demo21Component;
  let fixture: ComponentFixture<Lib81Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
