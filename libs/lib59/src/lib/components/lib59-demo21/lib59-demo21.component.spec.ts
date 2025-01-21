import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo21Component } from './lib59-demo21.component';

describe('Lib59Demo21Component', () => {
  let component: Lib59Demo21Component;
  let fixture: ComponentFixture<Lib59Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
