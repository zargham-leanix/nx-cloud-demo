import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo21Component } from './lib63-demo21.component';

describe('Lib63Demo21Component', () => {
  let component: Lib63Demo21Component;
  let fixture: ComponentFixture<Lib63Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
