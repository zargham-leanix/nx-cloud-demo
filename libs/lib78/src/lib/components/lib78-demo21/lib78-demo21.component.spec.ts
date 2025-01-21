import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo21Component } from './lib78-demo21.component';

describe('Lib78Demo21Component', () => {
  let component: Lib78Demo21Component;
  let fixture: ComponentFixture<Lib78Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
