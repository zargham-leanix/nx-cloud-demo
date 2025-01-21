import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo21Component } from './lib85-demo21.component';

describe('Lib85Demo21Component', () => {
  let component: Lib85Demo21Component;
  let fixture: ComponentFixture<Lib85Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
