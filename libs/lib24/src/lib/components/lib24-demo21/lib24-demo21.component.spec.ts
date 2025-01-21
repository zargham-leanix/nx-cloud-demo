import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo21Component } from './lib24-demo21.component';

describe('Lib24Demo21Component', () => {
  let component: Lib24Demo21Component;
  let fixture: ComponentFixture<Lib24Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
