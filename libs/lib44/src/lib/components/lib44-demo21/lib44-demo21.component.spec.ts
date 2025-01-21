import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo21Component } from './lib44-demo21.component';

describe('Lib44Demo21Component', () => {
  let component: Lib44Demo21Component;
  let fixture: ComponentFixture<Lib44Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
