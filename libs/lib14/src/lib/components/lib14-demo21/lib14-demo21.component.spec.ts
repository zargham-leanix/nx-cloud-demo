import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo21Component } from './lib14-demo21.component';

describe('Lib14Demo21Component', () => {
  let component: Lib14Demo21Component;
  let fixture: ComponentFixture<Lib14Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
