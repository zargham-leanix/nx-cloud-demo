import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo21Component } from './lib31-demo21.component';

describe('Lib31Demo21Component', () => {
  let component: Lib31Demo21Component;
  let fixture: ComponentFixture<Lib31Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
