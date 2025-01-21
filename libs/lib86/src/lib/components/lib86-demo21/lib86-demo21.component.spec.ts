import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo21Component } from './lib86-demo21.component';

describe('Lib86Demo21Component', () => {
  let component: Lib86Demo21Component;
  let fixture: ComponentFixture<Lib86Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
