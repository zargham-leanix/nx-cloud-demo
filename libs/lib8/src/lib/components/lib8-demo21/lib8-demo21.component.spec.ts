import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo21Component } from './lib8-demo21.component';

describe('Lib8Demo21Component', () => {
  let component: Lib8Demo21Component;
  let fixture: ComponentFixture<Lib8Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
