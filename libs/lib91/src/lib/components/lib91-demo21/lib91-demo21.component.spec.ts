import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo21Component } from './lib91-demo21.component';

describe('Lib91Demo21Component', () => {
  let component: Lib91Demo21Component;
  let fixture: ComponentFixture<Lib91Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
