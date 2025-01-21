import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo21Component } from './lib48-demo21.component';

describe('Lib48Demo21Component', () => {
  let component: Lib48Demo21Component;
  let fixture: ComponentFixture<Lib48Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
