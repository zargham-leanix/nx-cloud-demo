import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo21Component } from './lib94-demo21.component';

describe('Lib94Demo21Component', () => {
  let component: Lib94Demo21Component;
  let fixture: ComponentFixture<Lib94Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
