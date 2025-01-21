import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo21Component } from './lib50-demo21.component';

describe('Lib50Demo21Component', () => {
  let component: Lib50Demo21Component;
  let fixture: ComponentFixture<Lib50Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
