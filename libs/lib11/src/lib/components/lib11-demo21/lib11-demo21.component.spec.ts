import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo21Component } from './lib11-demo21.component';

describe('Lib11Demo21Component', () => {
  let component: Lib11Demo21Component;
  let fixture: ComponentFixture<Lib11Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
