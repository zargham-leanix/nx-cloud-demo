import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo21Component } from './lib53-demo21.component';

describe('Lib53Demo21Component', () => {
  let component: Lib53Demo21Component;
  let fixture: ComponentFixture<Lib53Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
