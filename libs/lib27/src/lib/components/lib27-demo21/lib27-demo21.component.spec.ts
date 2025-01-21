import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo21Component } from './lib27-demo21.component';

describe('Lib27Demo21Component', () => {
  let component: Lib27Demo21Component;
  let fixture: ComponentFixture<Lib27Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
