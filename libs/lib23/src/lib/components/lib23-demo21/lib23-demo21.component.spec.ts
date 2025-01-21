import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo21Component } from './lib23-demo21.component';

describe('Lib23Demo21Component', () => {
  let component: Lib23Demo21Component;
  let fixture: ComponentFixture<Lib23Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
