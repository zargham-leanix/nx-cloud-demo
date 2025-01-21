import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo21Component } from './lib30-demo21.component';

describe('Lib30Demo21Component', () => {
  let component: Lib30Demo21Component;
  let fixture: ComponentFixture<Lib30Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
