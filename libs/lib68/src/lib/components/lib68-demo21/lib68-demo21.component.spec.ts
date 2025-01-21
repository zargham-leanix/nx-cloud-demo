import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo21Component } from './lib68-demo21.component';

describe('Lib68Demo21Component', () => {
  let component: Lib68Demo21Component;
  let fixture: ComponentFixture<Lib68Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
