import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo21Component } from './lib67-demo21.component';

describe('Lib67Demo21Component', () => {
  let component: Lib67Demo21Component;
  let fixture: ComponentFixture<Lib67Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
