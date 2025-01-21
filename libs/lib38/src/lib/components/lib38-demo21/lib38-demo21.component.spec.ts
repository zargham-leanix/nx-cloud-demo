import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo21Component } from './lib38-demo21.component';

describe('Lib38Demo21Component', () => {
  let component: Lib38Demo21Component;
  let fixture: ComponentFixture<Lib38Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
