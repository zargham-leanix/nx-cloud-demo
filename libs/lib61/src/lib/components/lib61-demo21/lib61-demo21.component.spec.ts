import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo21Component } from './lib61-demo21.component';

describe('Lib61Demo21Component', () => {
  let component: Lib61Demo21Component;
  let fixture: ComponentFixture<Lib61Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
